import { z } from "zod";

/**
 * The fixed shape an extraction model must return for one lab report.
 * Anything outside this shape is discarded: the model's output is data, never text shown to a patient.
 */
export const extractedResultSchema = z.object({
  /** Test name exactly as printed on the report. */
  testName: z.string().trim().min(1).max(200),
  /** Numeric result. Non-numeric results ("Negative", "<5") are out of scope for now. */
  value: z.number().finite(),
  /** Unit exactly as printed. */
  unit: z.string().trim().max(40),
  referenceRange: z
    .object({
      low: z.number().finite().optional(),
      high: z.number().finite().optional(),
      text: z.string().trim().max(200).optional(),
    })
    .optional(),
});

export const extractedReportSchema = z.object({
  labName: z.string().trim().max(200).optional(),
  patientName: z.string().trim().max(200).optional(),
  /** Sample collection date, ISO format YYYY-MM-DD. */
  sampleDate: z.iso.date().optional(),
  results: z.array(extractedResultSchema).max(200),
});

export type ExtractedResult = z.infer<typeof extractedResultSchema>;
export type ExtractedReport = z.infer<typeof extractedReportSchema>;

/** Country-specific providers plug in behind these (see docs/plan/06-architecture.md, section 8). */
export interface OcrProvider {
  readText(document: Uint8Array, contentType: string): Promise<string>;
}
export interface ExtractionModel {
  /** Must return JSON that parses with `extractedReportSchema`; the caller validates it. */
  extract(document: Uint8Array, contentType: string): Promise<unknown>;
}
