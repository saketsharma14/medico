import { valueAppearsInText } from "./crosscheck.ts";
import type { MarkerKey } from "./markers.ts";
import { findMarker, normalizeUnit } from "./normalize.ts";
import { extractedReportSchema, type ExtractedResult } from "./schema.ts";

export type IssueCode =
  | "UNKNOWN_TEST"
  | "UNIT_NOT_ALLOWED"
  | "VALUE_IMPLAUSIBLE"
  | "VALUE_NOT_IN_OCR_TEXT"
  | "DATE_MISSING"
  | "DATE_IN_FUTURE";

/**
 * - `high`: no issues; shown to the patient for a single overall confirmation.
 * - `needs_confirmation`: the patient must confirm or correct this field individually.
 * - `blocked`: cannot be saved until corrected.
 * - `unmapped`: test not in the catalogue; kept under its printed name and queued for our review.
 */
export type ReviewStatus = "high" | "needs_confirmation" | "blocked" | "unmapped";

export interface ReviewedResult {
  original: ExtractedResult;
  status: ReviewStatus;
  issues: IssueCode[];
  marker?: MarkerKey;
  loinc?: string;
  /** Value converted to the marker's canonical unit; absent when the test or unit is unknown. */
  canonicalValue?: number;
  canonicalUnit?: string;
}

export interface ReviewedReport {
  labName?: string;
  patientName?: string;
  sampleDate?: string;
  reportIssues: IssueCode[];
  results: ReviewedResult[];
}

export interface ReviewOptions {
  /** Today's date as YYYY-MM-DD, in the patient's time zone. Passed in so the function stays pure. */
  today: string;
}

function reviewResult(result: ExtractedResult, ocrText: string): ReviewedResult {
  const marker = findMarker(result.testName);
  if (!marker) {
    return { original: result, status: "unmapped", issues: ["UNKNOWN_TEST"] };
  }

  const base = { original: result, marker: marker.key, loinc: marker.loinc };
  const unit = marker.units[normalizeUnit(result.unit)];
  if (!unit) {
    return { ...base, status: "blocked", issues: ["UNIT_NOT_ALLOWED"] };
  }

  const canonicalValue = unit.toCanonical(result.value);
  const withValue = { ...base, canonicalValue, canonicalUnit: marker.canonicalUnit };
  if (canonicalValue < marker.plausible.min || canonicalValue > marker.plausible.max) {
    return { ...withValue, status: "blocked", issues: ["VALUE_IMPLAUSIBLE"] };
  }

  if (!valueAppearsInText(result.value, ocrText)) {
    return { ...withValue, status: "needs_confirmation", issues: ["VALUE_NOT_IN_OCR_TEXT"] };
  }
  return { ...withValue, status: "high", issues: [] };
}

/**
 * Validates raw model output and applies every safety check before anything is shown
 * to the patient. Throws if the output does not match the fixed schema.
 */
export function reviewExtraction(
  modelOutput: unknown,
  ocrText: string,
  options: ReviewOptions,
): ReviewedReport {
  const report = extractedReportSchema.parse(modelOutput);

  const reportIssues: IssueCode[] = [];
  if (!report.sampleDate) reportIssues.push("DATE_MISSING");
  else if (report.sampleDate > options.today) reportIssues.push("DATE_IN_FUTURE");

  return {
    labName: report.labName,
    patientName: report.patientName,
    sampleDate: report.sampleDate,
    reportIssues,
    results: report.results.map((r) => reviewResult(r, ocrText)),
  };
}

/** A report can be saved only when nothing is blocked and the date is usable. */
export function canSave(report: ReviewedReport): boolean {
  return report.reportIssues.length === 0 && report.results.every((r) => r.status !== "blocked");
}
