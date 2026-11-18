/**
 * Second, independent check on a value the model extracted: the same number must be
 * present in the OCR text of the document. A value the OCR never saw is treated as
 * low confidence and must be confirmed by the patient field by field.
 */
export function numbersInText(text: string): number[] {
  const found: number[] = [];
  for (const match of text.matchAll(/\d+(?:[.,]\d+)?/g)) {
    const n = Number(match[0].replace(",", "."));
    if (Number.isFinite(n)) found.push(n);
  }
  return found;
}

export function valueAppearsInText(value: number, ocrText: string): boolean {
  const tolerance = 1e-9;
  return numbersInText(ocrText).some((n) => Math.abs(n - value) <= tolerance);
}
