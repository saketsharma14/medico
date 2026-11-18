# Project Brief: B2B2C Chronic Care & Unified Health Records Platform

_Founding brief, saved 2026-11-19. Amendments are tracked in [01-brief-review.md](01-brief-review.md); where the two differ, the review wins._
_Scope note from Saket (2026-11-19): **not necessarily limited to the UAE.**_

## Advisor role (how Claude should work on this project)

Act as the founding team's **co-founder-level advisor**: a senior product manager, healthcare-IT architect and health-tech startup strategist in one. We are a UAE-based founding team building this as a real venture-backed startup, not a class project. Help us **plan everything needed to build and launch it**, then help us execute step by step.

Be decisive. When there are trade-offs, recommend one option and explain why in a sentence or two; no exhaustive surveys. Flag regulatory and clinical-safety issues clearly. Where a fact may have changed (regulations, government programs, cloud regions, vendor offerings), say it needs verification rather than stating it as certain.

Formatting: headings, tables and checklists; tight prose; mark every assumption as **[Assumption]** and every fact that needs verification as **[Verify]**.

---

## 1. Decisions already made

- **Business model: B2B2C.** Institutions (health insurers first, then clinic networks and employers) pay; patients use the app for free under the partner's brand.
- **Launch market: UAE** (Abu Dhabi and Dubai first). Expansion to the GCC and India later.
- **First buyer: health insurers.** Health insurance is mandatory in the UAE, and insurers carry the cost of poorly managed chronic disease, so they have the clearest ROI.
- **Delivery network: mid-size clinic chains, plus labs and pharmacies** for bookings, records, and fulfilment. Large hospital groups are slow and often build their own apps; integrate with them later.
- **First condition: type 2 diabetes.** Highly prevalent in the UAE, outcomes are measurable (HbA1c testing, adherence, eye and kidney screenings), and the gaps are costly. Hypertension and dyslipidemia come next.
- **Positioning:** *A white-label patient engagement and care-gap platform that unifies a patient's records across every hospital they've used, keeps them on track with tests and prescribed medication, and proves measurable outcomes to the payer.*
- **Clinical safety line:** The app **never independently recommends or changes medication**. Medication features are reminders, refills and adherence tracking for what a clinician prescribed. Test and screening nudges are based on published clinical guidelines and the partner's care protocols, cite their source, and say "discuss with your doctor." Anything diagnostic or prescriptive goes through a licensed clinician. This keeps us out of medical-device regulation for the MVP.

## 2. The problem

- Patients in the UAE visit multiple hospitals and clinics, so their records are spread out. No single doctor sees the full picture, and patients can't easily track their own trends.
- Chronic patients (especially diabetics) miss follow-up tests, stop taking medication, and skip screenings. Insurers pay for the resulting complications, ER visits and admissions.
- Insurers and clinics have limited tools to find which members are falling behind and reach them at scale.

## 3. Product: three parts

### A. Patient app (white-label, iOS + Android)

**MVP**
- **Onboarding and identity:** UAE Pass or Emirates ID-based sign-up where possible, insurer member-ID linking, and consent capture (granular and revocable).
- **Unified health timeline:** labs, diagnostic reports, prescriptions, visits and imaging reports from all sources, each tagged with its **provenance** (hospital feed, health information exchange, lab upload, or patient-entered).
- **Report upload and extraction:** the patient photographs or uploads a PDF lab report. OCR plus LLM extraction pulls out structured values (test, value, unit, reference range, date, lab), and the patient confirms them. Test names are normalized across labs (e.g. HbA1c / Glycated Hb / A1C map to one LOINC code) and units are converted.
- **Trend charts** for key markers (HbA1c, fasting glucose, lipids, creatinine/eGFR, BP, weight), with plain-language explanations. Explanations only, never diagnoses.
- **Medication reminders** for prescribed meds, with dose logging and refill prediction ("You'll run out in 5 days. Reorder?").
- **Care-gap nudges:** "Your HbA1c test is overdue (last done 7 months ago)", based on guidelines and partner protocols.
- **Appointment booking** with in-network clinics and labs.
- **Medicine ordering and refills** through partner pharmacies, with delivery.
- **Notifications:** push, SMS and WhatsApp, prioritized and rate-limited to avoid notification fatigue.
- **Languages:** English and Arabic from day one, including right-to-left layout. Hindi, Urdu and other languages later.

**Phase 2+**
- Family and caregiver profiles (an adult child managing a parent), with caregiver alerts for missed doses.
- Consent-based record sharing with any doctor through a time-limited link or QR code, plus an access audit log visible to the patient.
- Emergency card (blood group, allergies, conditions, emergency contacts).
- Vitals logging and device sync (Apple Health, Google Health Connect, glucometers, BP cuffs).
- Drug-drug interaction checks across prescriptions from different doctors, using a licensed drug database and shown as "ask your pharmacist or doctor" alerts.
- Teleconsultation via partner clinicians.
- One-page health summary PDF for doctor visits.
- Vaccination tracker; more conditions (hypertension, dyslipidemia, CKD, maternal care).

### B. Partner console (web; this is what the buyer pays for)
- **Population dashboard:** enrolled members, active users, and risk tiers.
- **Care-gap worklist:** members overdue for tests or screenings or with low medication adherence. Filterable and exportable, with assignment to care managers.
- **Outreach campaigns:** targeted nudges by segment, with A/B testing.
- **Outcome reports:** adherence (PDC, proportion of days covered), HbA1c testing rate, screening completion, app engagement, and later ER visits and admissions from claims data.
- **Configuration:** branding, care protocols, network providers, and notification rules. Configuration only, no custom code per partner.
- **Admin:** role-based access, audit logs, and SSO.

### C. Integration and data layer (the long-term moat)
- **Canonical data model: HL7 FHIR R4** (Patient, Observation, DiagnosticReport, MedicationRequest, MedicationDispense, Appointment, Condition, AllergyIntolerance, Consent, Provenance).
- **Terminologies:** LOINC (labs), SNOMED CT and ICD-10 (conditions), and the UAE drug code lists. Verify current DoH and DHA code sets.
- **Connectors (in priority order):**
  1. Patient upload and extraction pipeline (available on day one, works everywhere)
  2. Insurer eligibility and claims feeds (batch files or API), for member matching and outcomes
  3. Clinic, lab and pharmacy partner APIs (bookings, results, dispensing)
  4. Health information exchanges: **Malaffi** (Abu Dhabi), **NABIDH** (Dubai), **Riayati** (Northern Emirates). These require regulator approval, so start the process early.
- **Patient matching:** across sources, using Emirates ID and insurer member ID, with a review queue for uncertain matches.

## 4. Business model

- **Main revenue: a fee per enrolled member per month**, charged only for chronic members actually enrolled, not the insurer's whole member base.
- **One-time implementation fee** per partner, covering integration, branding and protocol setup.
- **Outcome-based upside** from year 2: bonuses tied to adherence and testing targets.
- **Transaction revenue:** commissions on pharmacy and lab orders placed through the app.
- **Later:** clinic-network SaaS and employer wellness programs.

All price points are **hypotheses to validate** in discovery. Build a pricing model and a unit-economics spreadsheet structure: customer acquisition cost, sales cycle, implementation cost, gross margin, and payback period.

## 5. Go-to-market plan

1. **Discovery (months 0–2):** 15–20 interviews with insurer medical directors, care-management leads and clinic-chain operations heads. Goal: learn exactly what metrics they report, what they pay for today, their buying process, and their security requirements.
2. **Clickable demo and pitch** for the patient app and partner console.
3. **Design partner:** sign one insurer or clinic chain for a **paid pilot** of 500–1,000 diabetic members over 3–6 months, with success metrics agreed in writing up front.
4. **Case study, then expansion:** add more conditions with the first partner, then sell to the next insurers using the published results.
5. **Channels:** DoH Abu Dhabi and DHA innovation programs, Hub71, in5, Dubai Future Foundation programs, university incubators, health-tech accelerators, and insurer innovation teams. Verify which programs are currently active.

## 6. Regulation, compliance and security

Treat all of these as requirements to verify with current official sources and a local health-regulatory lawyer:
- **UAE Federal Law No. 2 of 2019** on the use of ICT in health fields: health data must be stored in the UAE, with limited exceptions.
- **UAE PDPL** (Federal Decree-Law No. 45 of 2021) on personal data protection, plus its health-data carve-outs.
- **ADHICS** (Abu Dhabi Healthcare Information and Cyber Security Standard) and DHA's equivalent requirements.
- Requirements for onboarding to Malaffi and NABIDH, and any DoH or DHA licensing needed for a digital health platform or telehealth.
- Classification as Software as a Medical Device (SaMD): keep the MVP as non-device software (see the clinical safety line in section 1), and document the reasoning.
- **Pharmacy and medicine delivery rules:** fulfilment only through licensed pharmacies with valid prescriptions.
- **Security baseline:** encryption at rest and in transit, role-based access with least privilege, MFA, full audit logging, regular penetration tests, and secure development practices. Aim for **ISO 27001** by the time we sign customer #2.
- **LLM use with patient data:** extraction and explanations must use a deployment that satisfies UAE data-residency rules (an in-country cloud region, or a self-hosted model). No patient data goes to non-compliant endpoints. LLM outputs shown to patients must be grounded in their data, constrained to explanation only, and include a disclaimer.

## 7. Suggested technical direction (open to challenge)

- **Mobile:** React Native or Flutter (one codebase, with good Arabic right-to-left support).
- **Partner console:** React / Next.js.
- **Backend:** TypeScript (NestJS) or Python (FastAPI), split into well-separated services, starting as a modular monolith.
- **FHIR store:** a managed or open-source FHIR server (e.g. HAPI FHIR or Medplum) alongside PostgreSQL for app data.
- **Hosting:** a UAE cloud region (e.g. AWS me-central-1, Azure UAE North, or a local sovereign cloud). Verify which ones hospitals and regulators accept.
- **Document pipeline:** OCR, then LLM-based structured extraction, then terminology mapping (LOINC), then patient confirmation, then store as a FHIR Observation with Provenance.
- **Notifications:** push (FCM/APNs), SMS, and WhatsApp Business API, through a rules and prioritization engine.
- **Analytics:** an event pipeline and a warehouse for partner outcome reporting.
- **White-labeling:** a theming and configuration system per tenant; strict multi-tenant data isolation.

## 8. Success metrics

- **Buyer outcomes:** medication adherence (PDC ≥ 80% share), HbA1c testing on schedule, retinopathy and nephropathy screening completion, ER visits and admissions (from claims).
- **Product:** activation rate of invited members, 30- and 90-day retention, weekly active users, reminder-to-action conversion.
- **Business:** pilot-to-contract conversion, enrolled members, revenue per member per month, implementation time per partner, gross margin.

## 9. Key risks

| Risk | How to handle it |
|---|---|
| Long enterprise sales cycles burn cash | Paid pilots, implementation fees, grants and accelerators, a lean team |
| Turning into a custom-dev shop | One core product; partners get configuration only |
| Low patient activation | Invitations sent by the insurer and doctor, caregiver mode, real incentives (e.g. waived copays) |
| Slow HIE access | Upload pipeline and partner APIs first; start Malaffi/NABIDH approvals early |
| Big hospital groups or government apps compete | Differentiate on records from competing hospitals plus payer-grade outcome proof |
| Clinical-safety incident | Guideline-cited content, clinician review of protocols, a clinical safety officer, incident process |
| Data breach | Security-first architecture, ISO 27001, pen tests, minimal data retention |

## 10. Team

Plan for: a technical founder (backend and integrations), a clinical co-founder or senior medical advisor (credibility and clinical safety), and a commercial lead with insurer or hospital sales experience. Advise on early hires, advisors, and what to outsource.

## 11. Deliverables (one at a time, founder go-ahead between each)

1. **Lean canvas and value propositions:** one each for insurers, clinics and patients.
2. **PRD for the MVP:** personas, user stories with acceptance criteria, MoSCoW feature list, out-of-scope items.
3. **System architecture:** components, data flow diagram (Mermaid), multi-tenancy, security architecture, FHIR data model.
4. **Integration plan:** each connector, access route, dependencies, timeline.
5. **Compliance roadmap:** approvals and certifications, when, and what to verify with a lawyer.
6. **Build roadmap:** 12–18 months in phases, sprint-level breakdown for the first 3 months, team needs per phase.
7. **Go-to-market plan:** target account criteria, discovery interview script, pilot proposal template, pricing hypotheses.
8. **Financial model structure:** revenue drivers, cost lines, unit economics, fundraising milestones.
9. **Pitch deck outline:** slide by slide.
10. **Risk register and first 30-day action plan.**

Then **start building**, beginning with the repository structure and the MVP backbone.
