/**
 * Catalogue of the lab tests the MVP understands (type 2 diabetes marker set).
 *
 * NOT CLINICALLY REVIEWED. The LOINC codes, conversion factors and plausibility
 * bounds below were written from general knowledge. Before any real patient uses
 * this, each row must be checked against the LOINC database and signed off by the
 * clinical advisor (Gate A, docs/plan/08-compliance-roadmap.md).
 *
 * `plausible` is a sanity bound for catching extraction errors (a misplaced decimal,
 * a wrong unit). It is not a clinical reference range and is never shown to patients.
 */

export type MarkerKey =
  | "hba1c"
  | "glucose_fasting"
  | "glucose_random"
  | "glucose_postprandial"
  | "cholesterol_total"
  | "ldl"
  | "hdl"
  | "triglycerides"
  | "creatinine"
  | "egfr"
  | "uacr";

export interface UnitDef {
  /** Converts a value in this unit to the marker's canonical unit. */
  toCanonical: (value: number) => number;
}

export interface MarkerDef {
  key: MarkerKey;
  loinc: string;
  display: string;
  canonicalUnit: string;
  /** Keyed by normalised unit (see `normalizeUnit`). */
  units: Record<string, UnitDef>;
  plausible: { min: number; max: number };
  /** Lower-case name variants seen on reports. Matched after `normalizeTestName`. */
  synonyms: string[];
}

const same: UnitDef = { toCanonical: (v) => v };
const times = (factor: number): UnitDef => ({ toCanonical: (v) => v * factor });

const GLUCOSE_MMOL_TO_MGDL = 18.016;
const CHOLESTEROL_MMOL_TO_MGDL = 38.67;
const TRIGLYCERIDE_MMOL_TO_MGDL = 88.57;
const CREATININE_UMOL_TO_MGDL = 1 / 88.4;
const UACR_MG_MMOL_TO_MG_G = 8.84;

const glucoseUnits = { "mg/dl": same, "mmol/l": times(GLUCOSE_MMOL_TO_MGDL) };
const cholesterolUnits = { "mg/dl": same, "mmol/l": times(CHOLESTEROL_MMOL_TO_MGDL) };

export const MARKERS: readonly MarkerDef[] = [
  {
    key: "hba1c",
    loinc: "4548-4",
    display: "HbA1c",
    canonicalUnit: "%",
    units: {
      "%": same,
      // IFCC (mmol/mol) to NGSP (%) master equation.
      "mmol/mol": { toCanonical: (v) => 0.09148 * v + 2.152 },
    },
    plausible: { min: 3, max: 20 },
    synonyms: [
      "hba1c",
      "hb a1c",
      "a1c",
      "glycated hemoglobin",
      "glycated haemoglobin",
      "glycosylated hemoglobin",
      "glycosylated haemoglobin",
      "glycated hb",
      "hemoglobin a1c",
      "haemoglobin a1c",
    ],
  },
  {
    key: "glucose_fasting",
    loinc: "1558-6",
    display: "Fasting glucose",
    canonicalUnit: "mg/dL",
    units: glucoseUnits,
    plausible: { min: 20, max: 1000 },
    synonyms: [
      "fasting glucose",
      "fasting blood glucose",
      "fasting blood sugar",
      "fasting plasma glucose",
      "glucose fasting",
      "blood sugar fasting",
      "fbs",
      "fbg",
      "fpg",
    ],
  },
  {
    key: "glucose_random",
    loinc: "2345-7",
    display: "Random glucose",
    canonicalUnit: "mg/dL",
    units: glucoseUnits,
    plausible: { min: 20, max: 1000 },
    synonyms: [
      "random glucose",
      "random blood glucose",
      "random blood sugar",
      "glucose random",
      "blood sugar random",
      "rbs",
      "rbg",
    ],
  },
  {
    key: "glucose_postprandial",
    loinc: "1521-4",
    display: "Post-meal glucose (2 h)",
    canonicalUnit: "mg/dL",
    units: glucoseUnits,
    plausible: { min: 20, max: 1000 },
    synonyms: [
      "postprandial glucose",
      "post prandial glucose",
      "post prandial blood sugar",
      "postprandial blood sugar",
      "glucose pp",
      "blood sugar pp",
      "ppbs",
      "ppbg",
      "2 hr pp glucose",
    ],
  },
  {
    key: "cholesterol_total",
    loinc: "2093-3",
    display: "Total cholesterol",
    canonicalUnit: "mg/dL",
    units: cholesterolUnits,
    plausible: { min: 50, max: 600 },
    synonyms: ["total cholesterol", "cholesterol total", "cholesterol", "serum cholesterol"],
  },
  {
    key: "ldl",
    loinc: "13457-7",
    display: "LDL cholesterol",
    canonicalUnit: "mg/dL",
    units: cholesterolUnits,
    plausible: { min: 10, max: 400 },
    synonyms: ["ldl", "ldl cholesterol", "ldl c", "cholesterol ldl", "low density lipoprotein"],
  },
  {
    key: "hdl",
    loinc: "2085-9",
    display: "HDL cholesterol",
    canonicalUnit: "mg/dL",
    units: cholesterolUnits,
    plausible: { min: 5, max: 150 },
    synonyms: ["hdl", "hdl cholesterol", "hdl c", "cholesterol hdl", "high density lipoprotein"],
  },
  {
    key: "triglycerides",
    loinc: "2571-8",
    display: "Triglycerides",
    canonicalUnit: "mg/dL",
    units: { "mg/dl": same, "mmol/l": times(TRIGLYCERIDE_MMOL_TO_MGDL) },
    plausible: { min: 20, max: 3000 },
    synonyms: ["triglycerides", "triglyceride", "tg", "serum triglycerides"],
  },
  {
    key: "creatinine",
    loinc: "2160-0",
    display: "Creatinine",
    canonicalUnit: "mg/dL",
    units: { "mg/dl": same, "umol/l": times(CREATININE_UMOL_TO_MGDL) },
    plausible: { min: 0.1, max: 20 },
    synonyms: ["creatinine", "serum creatinine", "s creatinine", "creatinine serum"],
  },
  {
    key: "egfr",
    loinc: "62238-1",
    display: "eGFR",
    canonicalUnit: "mL/min/1.73m2",
    units: { "ml/min/1.73m2": same, "ml/min": same },
    plausible: { min: 1, max: 200 },
    synonyms: ["egfr", "estimated gfr", "estimated glomerular filtration rate", "gfr estimated"],
  },
  {
    key: "uacr",
    loinc: "9318-7",
    display: "Urine albumin-to-creatinine ratio",
    canonicalUnit: "mg/g",
    units: { "mg/g": same, "mg/mmol": times(UACR_MG_MMOL_TO_MG_G) },
    plausible: { min: 0, max: 10000 },
    synonyms: [
      "uacr",
      "acr",
      "urine albumin creatinine ratio",
      "albumin creatinine ratio",
      "albumin creatinine ratio urine",
      "microalbumin creatinine ratio",
      "urine microalbumin creatinine ratio",
    ],
  },
];
