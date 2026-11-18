import { MARKERS, type MarkerDef } from "./markers.ts";

/** Lower-case, strip punctuation and qualifiers so name variants compare equal. */
export function normalizeTestName(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/\(.*?\)/g, " ") // drop bracketed qualifiers such as "(HPLC)"
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Normalise a printed unit: "MG/DL", "mg / dl", "mg%" all become "mg/dl". */
export function normalizeUnit(raw: string): string {
  const u = raw
    .toLowerCase()
    .replace(/[µμ]/g, "u")
    .replace(/\s+/g, "")
    .replace(/²/g, "2")
    .replace(/m\^2/g, "m2")
    .replace(/sq\.?m/g, "m2");
  if (u === "mg%" || u === "mgs/dl" || u === "mg/100ml") return "mg/dl";
  if (u === "mg/gcreatinine" || u === "mg/gcreat" || u === "ug/mg") return "mg/g";
  if (u === "ml/min/1.73sqm") return "ml/min/1.73m2";
  return u;
}

const synonymIndex: ReadonlyMap<string, MarkerDef> = new Map(
  MARKERS.flatMap((m) => m.synonyms.map((s) => [normalizeTestName(s), m] as const)),
);

/** Exact match on the curated synonym table only. No fuzzy matching: an unknown name stays unknown. */
export function findMarker(testName: string): MarkerDef | undefined {
  return synonymIndex.get(normalizeTestName(testName));
}
