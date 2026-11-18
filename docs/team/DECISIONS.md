# Decisions

_Record agreed technical choices so neither of us re-debates them._

<!-- Template:
## YYYY-MM-DD — Short title
- **Decision:** ...
- **Why:** ...
- **Decided by:** ...
-->

## 2026-11-19 — Repo workflow
- **Decision:** `main` is the default branch; pull before working and before pushing; team board lives in `docs/team/`.
- **Why:** Two people working in parallel need a single source of truth.
- **Decided by:** Saket

## 2026-11-19 — Brief amendments adopted
- **Decision:** The 12 amendments in `docs/plan/01-brief-review.md` override the original brief.
- **Why:** The original assumed insurer ROI, an under-powered pilot and an oversized MVP.
- **Decided by:** Saket (teammate to confirm)

## 2026-11-19 — Two markets, different jobs
- **Decision:** India is used to prove the product (founder-run beta); the UAE to prove the business (paid pilot). Insurers remain the target buyer, but the first pilot may be a clinic chain, TPA or employer.
- **Why:** Two students with no budget can't run regulated enterprise pilots in two countries at once.
- **Decided by:** Saket (teammate to confirm)

## 2026-11-19 — Tech stack (provisional until the architecture deliverable)
- **Decision:** All TypeScript: React Native (Expo), Next.js, NestJS modular monolith, Medplum FHIR server on PostgreSQL; one in-country deployment cell per market.
- **Why:** One language end to end for a two-person team.
- **Decided by:** Saket (teammate to confirm)

## 2026-11-19 — Clinical safety line
- **Decision:** The app never recommends or changes medication. Patient-facing explanations are clinician-approved templates; the LLM is used for extraction only in the MVP.
- **Why:** Patient safety, and to stay outside medical-device regulation (to be confirmed by a regulatory opinion).
- **Decided by:** Founding brief

## 2026-11-19 — MVP ships as two releases
- **Decision:** R1 is the patient app only (upload, extraction, timeline, trends, reminders, nudges) for a founder-run beta in India. R2 adds the partner console, claims ingestion, worklist, outcome report, theming and Arabic for the first pilot.
- **Why:** R1 needs no partner and proves extraction and retention; R2 is only worth building once a design partner is in sight.
- **Decided by:** Saket (teammate to confirm)
