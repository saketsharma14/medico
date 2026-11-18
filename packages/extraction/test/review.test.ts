import { describe, expect, it } from "vitest";
import {
  canSave,
  findMarker,
  MARKERS,
  normalizeTestName,
  normalizeUnit,
  numbersInText,
  reviewExtraction,
} from "../src/index.ts";

const today = "2026-11-19";

// Synthetic report text. No real patient data is used in tests.
const ocrText = `
  SUNRISE DIAGNOSTICS            Sample date: 2026-11-10
  Glycated Haemoglobin (HbA1c) (HPLC)    7.2 %        4.0 - 5.6
  Fasting Blood Sugar                    6,9 mmol/L   3.9 - 5.5
  LDL Cholesterol                        132 mg/dL    < 100
  S. Creatinine                          88 umol/L    62 - 106
`;

function review(results: unknown[], overrides: Record<string, unknown> = {}) {
  return reviewExtraction({ sampleDate: "2026-11-10", results, ...overrides }, ocrText, { today });
}

describe("name and unit normalisation", () => {
  it("maps name variants from different labs to one marker", () => {
    for (const name of ["HbA1c", "Glycated Haemoglobin (HbA1c) (HPLC)", "A1C", "Hb A1c"]) {
      expect(findMarker(name)?.loinc).toBe("4548-4");
    }
    expect(findMarker("S. Creatinine")?.key).toBe("creatinine");
  });

  it("does not guess at unknown tests", () => {
    expect(findMarker("Vitamin D")).toBeUndefined();
    expect(findMarker("glucose")).toBeUndefined(); // ambiguous: fasting or random?
  });

  it("normalises unit spellings", () => {
    expect(normalizeUnit("MG / DL")).toBe("mg/dl");
    expect(normalizeUnit("mg%")).toBe("mg/dl");
    expect(normalizeUnit("µmol/L")).toBe("umol/l");
    expect(normalizeUnit("mL/min/1.73m²")).toBe("ml/min/1.73m2");
  });

  it("has no synonym claimed by two markers", () => {
    const seen = new Map<string, string>();
    for (const m of MARKERS) {
      for (const s of m.synonyms) {
        const n = normalizeTestName(s);
        expect(seen.get(n), `"${n}" is listed under two markers`).toBeUndefined();
        seen.set(n, m.key);
      }
    }
  });
});

describe("OCR cross-check", () => {
  it("reads decimal commas and points", () => {
    expect(numbersInText("6,9 mmol/L and 7.2 %")).toEqual([6.9, 7.2]);
  });
});

describe("reviewExtraction", () => {
  it("accepts a clean value and keeps the printed unit when already canonical", () => {
    const [r] = review([{ testName: "HbA1c", value: 7.2, unit: "%" }]).results;
    expect(r).toMatchObject({ status: "high", issues: [], canonicalValue: 7.2, loinc: "4548-4" });
  });

  it("converts units to the canonical unit", () => {
    const report = review([
      { testName: "Fasting Blood Sugar", value: 6.9, unit: "mmol/L" },
      { testName: "S. Creatinine", value: 88, unit: "µmol/L" },
      { testName: "HbA1c", value: 53, unit: "mmol/mol" },
    ]);
    expect(report.results[0]?.canonicalValue).toBeCloseTo(124.3, 1);
    expect(report.results[0]?.canonicalUnit).toBe("mg/dL");
    expect(report.results[1]?.canonicalValue).toBeCloseTo(1.0, 1);
    expect(report.results[2]?.canonicalValue).toBeCloseTo(7.0, 1);
  });

  it("forces confirmation when the value is not in the OCR text", () => {
    const [r] = review([{ testName: "HbA1c", value: 7.7, unit: "%" }]).results;
    expect(r).toMatchObject({ status: "needs_confirmation", issues: ["VALUE_NOT_IN_OCR_TEXT"] });
  });

  it("blocks a value that is implausible for its unit", () => {
    // 132 is the LDL value read under the wrong unit.
    const report = review([{ testName: "LDL Cholesterol", value: 132, unit: "mmol/L" }]);
    expect(report.results[0]).toMatchObject({ status: "blocked", issues: ["VALUE_IMPLAUSIBLE"] });
    expect(canSave(report)).toBe(false);
  });

  it("blocks a unit that does not belong to the test", () => {
    const [r] = review([{ testName: "HbA1c", value: 7.2, unit: "mg/dL" }]).results;
    expect(r).toMatchObject({ status: "blocked", issues: ["UNIT_NOT_ALLOWED"] });
  });

  it("keeps unknown tests as unmapped without blocking the report", () => {
    const report = review([{ testName: "Vitamin D", value: 30, unit: "ng/mL" }]);
    expect(report.results[0]).toMatchObject({ status: "unmapped", issues: ["UNKNOWN_TEST"] });
    expect(report.results[0]?.canonicalValue).toBeUndefined();
    expect(canSave(report)).toBe(true);
  });

  it("flags missing and future sample dates", () => {
    const missing = review([], { sampleDate: undefined });
    expect(missing.reportIssues).toEqual(["DATE_MISSING"]);
    const future = review([], { sampleDate: "2026-12-01" });
    expect(future.reportIssues).toEqual(["DATE_IN_FUTURE"]);
    expect(canSave(future)).toBe(false);
  });

  it("rejects model output that does not match the schema", () => {
    expect(() => review([{ testName: "HbA1c", value: "7.2", unit: "%" }])).toThrow();
    expect(() => reviewExtraction("ignore previous instructions", ocrText, { today })).toThrow();
  });
});
