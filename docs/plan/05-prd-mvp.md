# Deliverable 3: Product Requirements Document — MVP

_Version 1, 2026-11-19. Draft before discovery; revise after the week-8 discovery summary ([04-discovery-kit.md](04-discovery-kit.md))._
_Clinical content in section 6 is a starting point from general knowledge and must be reviewed by the clinical advisor before any patient sees it._

## 1. Scope in two releases

The MVP ships in two steps, matching the two-market plan in [02-founder-inputs.md](02-founder-inputs.md).

| | **R1: Patient beta** | **R2: Partner pilot** |
|---|---|---|
| Purpose | Prove extraction works and patients come back | Prove care gaps close and a partner will pay |
| Where | India, founder-run, 50–100 consenting users | First design partner (clinic chain, TPA, employer or insurer), UAE or India |
| Contains | Patient app: sign-up, upload and extraction, timeline, trends, reminders, care-gap nudges | R1 plus: partner console, member import, claims ingestion, worklist, outcome report, tenant theming, Arabic |
| Target date **[Assumption]** | Beta open April 2027 | Pilot-ready August 2027 |

## 2. Personas

| Persona | Who | Goal | Main frustration |
|---|---|---|---|
| **Ramesh, 54, patient** | Type 2 diabetes for 6 years, uses two hospitals and a neighbourhood lab, WhatsApp daily, limited English | Know if he's doing okay; not get scolded by the doctor | Reports are in a drawer and his phone gallery; forgets tests |
| **Aisha, 32, caregiver** | Manages her mother's diabetes from another city | Make sure her mother takes medicine and does tests | Finds out about missed tests months later |
| **Dr. Mehta, diabetologist** | Sees 40 patients a day | See the trend in 30 seconds | Patients arrive with partial records from elsewhere |
| **Sara, care manager** (partner staff) | Nurse on a payer or clinic care team, covers about 800 chronic members **[Assumption]** | Call the right 20 people today | Works from spreadsheets; can't tell who is overdue |
| **Dr. Khalid, medical director** (buyer) | Owns chronic-care cost and quality at the partner | Show management that the programme worked | No credible numbers |
| **Omar, partner IT/security** | Reviews vendors | Make sure member data is safe | Small vendors fail his questionnaire |

Aisha's caregiver features are phase 2; she is listed so that nothing in the MVP blocks them. Dr. Mehta has no login in the MVP; he is served by the shareable summary.

## 3. Feature list (MoSCoW)

### Must have

| ID | Feature | Release |
|---|---|---|
| M1 | Phone-number OTP sign-up, profile, language choice | R1 |
| M2 | Consent capture: granular, revocable, versioned | R1 |
| M3 | Report upload (camera, gallery, PDF) | R1 |
| M4 | Extraction of lab values with patient review and safety checks | R1 |
| M5 | Unified timeline with provenance labels | R1 |
| M6 | Trend charts for the diabetes marker set, with template explanations | R1 |
| M7 | Medication list and reminders with dose logging | R1 |
| M8 | Care-gap engine and nudges (type 2 diabetes rule set) | R1 |
| M9 | Push notifications with rate limiting and quiet hours | R1 |
| M10 | Account deletion and data export | R1 |
| M11 | Member import and invitation by the partner (file upload) | R2 |
| M12 | Member-ID linking at sign-up | R2 |
| M13 | Claims and dispensing file ingestion; PDC calculation | R2 |
| M14 | Care-gap worklist with filters, assignment and outreach logging | R2 |
| M15 | Population dashboard and outcome report (export to PDF/CSV) | R2 |
| M16 | Data firewall: payer sees gap status and aggregates only, unless the patient opts in | R2 |
| M17 | Console roles, MFA and audit log | R2 |
| M18 | Tenant theming (logo, colours, name) and protocol configuration | R2 |
| M19 | Arabic with right-to-left layout | R2 |
| M20 | WhatsApp and SMS for invitations and reminders, no health details in message text | R2 |

### Should have

| ID | Feature | Release |
|---|---|---|
| S1 | Hindi interface | R1 |
| S2 | One-page health summary PDF to show a doctor | R1 |
| S3 | Manual entry of home readings (glucose, BP, weight) | R1 |
| S4 | Refill prediction ("about 5 days of medicine left") | R2 |
| S5 | Booking and refill as deep links or call-back request to the partner | R2 |
| S6 | Segmented outreach campaigns from the console | R2 |
| S7 | Ramadan mode for reminder timing (GCC partners) | R2 |

### Could have

| ID | Feature |
|---|---|
| C1 | Prescription photo extraction to pre-fill the medication list |
| C2 | Time-limited share link or QR code for a doctor |
| C3 | A/B testing of nudges |
| C4 | Console single sign-on |
| C5 | National ID login (UAE Pass, ABHA) |

### Won't have in the MVP

| Item | Reason |
|---|---|
| Any medication recommendation, dose advice or diagnosis | Clinical safety line |
| Free-text LLM explanations or chat shown to patients | Regulatory and safety risk; templates only |
| Real-time booking, pharmacy ordering and delivery | Third-party integrations not needed to prove pilot metrics |
| HIE connections (Malaffi, NABIDH, ABDM live) | Approval timelines; start applications, build later |
| Caregiver profiles, teleconsultation, device sync, drug-interaction checks | Phase 2 |
| Imaging and non-lab document extraction | Stored as attachments only |
| Hypertension, lipids and other condition programmes | After the diabetes pilot (the markers are still charted) |
| Separate app-store listing per partner; embeddable SDK | After first paid contract |
| Commission-based transactions | Legal check pending |

## 4. User stories and acceptance criteria

### Patient app

**M1 — Sign-up.** As a patient, I sign up with my phone number so I can start in under two minutes.
- [ ] OTP sent by SMS; 6 digits, expires in 5 minutes, 5 attempts then a 15-minute lock.
- [ ] Profile asks only: name, date of birth, sex, language, diabetes type and year diagnosed (skippable).
- [ ] Under-18s are blocked with a clear message.
- [ ] Median time from install to home screen is under 2 minutes in beta testing.

**M2 — Consent.** As a patient, I see exactly what I'm agreeing to and can change it later.
- [ ] Separate toggles for: storing my records (required), reminders, sharing gap status with my partner organisation, sharing detailed records with my partner organisation (off by default).
- [ ] Each consent is stored with timestamp, policy version and language shown.
- [ ] Any toggle can be changed in Settings; the change takes effect within 1 minute and is logged.
- [ ] The first onboarding screen states in one sentence what the partner can and cannot see.

**M3 / M4 — Upload and extraction.** As a patient, I photograph a lab report and get the values without typing.
- [ ] Accepts camera photo, gallery image and PDF up to 20 MB and 10 pages.
- [ ] Extracts for each result: test name, value, unit, reference range, sample date, lab name.
- [ ] Results appear for review within 60 seconds for 90% of uploads; the patient can leave and is notified when ready.
- [ ] Each value shows a confidence level; low-confidence fields are highlighted and must be confirmed or corrected one by one.
- [ ] Values outside a physiologically plausible range, or with a unit that doesn't match the test, are blocked until corrected.
- [ ] Test names map to a standard code (LOINC); unmapped tests are saved under their original name and queued for review.
- [ ] Units are converted to the display unit for the patient's region (e.g. glucose mg/dL or mmol/L).
- [ ] The original file is kept and openable from every value derived from it.
- [ ] A duplicate upload (same lab, date and values) is detected and merged.
- [ ] If the name on the report differs clearly from the profile name, the app asks "Is this your report?" before saving.
- [ ] **Launch gate:** on a test set of at least 200 real reports from at least 15 labs, field-level accuracy is ≥ 97% for value and unit of the diabetes marker set, and no wrong value passes at high confidence in more than 0.5% of fields. **[Assumption]** thresholds to confirm with the clinical advisor.

**M5 — Timeline.** As a patient, I see everything in date order and know where each item came from.
- [ ] Every item shows a provenance label: "From your insurer's claims", "Uploaded by you, lab report attached", or "Entered by you".
- [ ] Filter by type (labs, medications, visits, documents) and by date.
- [ ] Patient-entered and patient-uploaded values carry an "unverified" mark wherever they appear, including the console and reports.

**M6 — Trends.** As a patient, I see whether my numbers are improving.
- [ ] Charts for HbA1c, fasting glucose, LDL, HDL, triglycerides, creatinine/eGFR, urine albumin ratio, BP and weight when at least 2 values exist.
- [ ] The lab's reference range is shaded on the chart.
- [ ] Explanations are fixed templates approved by the clinical advisor, selected by rule; no generated text.
- [ ] Every explanation ends with "This is general information, not medical advice. Discuss your results with your doctor."
- [ ] No explanation tells the patient to start, stop or change any medication.

**M7 — Medication reminders.** As a patient, I get reminded to take what my doctor prescribed.
- [ ] Patient adds a medicine by searching a drug list or typing a name; sets dose, times and start date.
- [ ] Reminder fires at the set time; actions are Taken, Skip, Remind in 15 minutes.
- [ ] Missed doses are never followed by advice on what to do; the screen says "If you're unsure, ask your doctor or pharmacist."
- [ ] Adherence history is visible to the patient by week and month.
- [ ] Medicines from claims data (R2) appear as suggestions the patient confirms.

**M8 — Care-gap nudges.** As a patient, I'm told when a routine test is due.
- [ ] Gaps are computed from the rule set in section 6 using all sources of data.
- [ ] Each nudge names the test, when it was last done, the guideline source, and says "discuss with your doctor."
- [ ] The patient can respond: Done (upload proof), Booked, Remind me later, Not relevant to me.
- [ ] A gap closes automatically when a matching result or claim arrives.

**M9 — Notifications.** As a patient, I'm not spammed.
- [ ] No more than 2 non-medication notifications per day and 5 per week; medication reminders are exempt.
- [ ] Quiet hours default 21:00–08:00 local time, adjustable.
- [ ] Each notification category can be turned off separately.

**M10 — Leaving.** As a patient, I can take my data and go.
- [ ] Export all records as a PDF summary plus original files.
- [ ] Account deletion removes personal data within 30 days, except what law requires us to keep; the patient is told which. **[Verify]** retention rules per market.

### Partner console

**M11 / M12 — Enrolment.** As a care manager, I upload my member list and invite them.
- [ ] CSV template with member ID, name, phone, date of birth, language; row-level validation errors shown before import.
- [ ] Invitations go by SMS or WhatsApp with a link that opens the app pre-linked to the member ID.
- [ ] At sign-up the member confirms date of birth to complete linking; 3 failures send the case to a review queue.
- [ ] The console shows invited, installed and activated counts. "Activated" means onboarding and consent completed.

**M13 — Claims ingestion.** As a partner analyst, I send a monthly file and the system computes adherence.
- [ ] Accepts a documented CSV format via secure upload or SFTP: member ID, service date, diagnosis codes, procedure or test codes, drug code, quantity, days' supply.
- [ ] A rejected file returns a report listing the failing rows and reasons.
- [ ] PDC is computed per member per drug class over a rolling 180 days, from dispensing records only.
- [ ] Tests found in claims close the matching care gap and appear on the patient's timeline as "test done, result not available".

**M14 — Worklist.** As a care manager, I see who to contact today.
- [ ] One row per member with open gaps, days overdue, PDC band, last app activity and last outreach.
- [ ] Filter and sort by gap type, days overdue, risk tier and assignee; export to CSV.
- [ ] Assign members to a care manager; log an outreach attempt with channel, outcome and note.
- [ ] With default consent, the care manager sees gap status and identity only, not lab values or uploaded files (see M16).

**M15 — Dashboard and outcome report.** As a medical director, I see whether it's working.
- [ ] Dashboard: invited, activated, active in last 30 days, open gaps by type, PDC distribution.
- [ ] Outcome report for any date range: HbA1c testing rate, screening completion, share with PDC ≥ 80%, gaps closed, each against the baseline period and, when provided, a comparison group.
- [ ] Every figure states its data source and how much of it rests on unverified patient-reported values.
- [ ] Groups smaller than 10 members are suppressed in aggregate views.

**M16 — Data firewall.** As a patient, my insurer can't browse my reports.
- [ ] Partner-facing queries return only fields allowed by the member's current consent; enforced on the server, not in the interface.
- [ ] Withdrawing consent removes the member's detail from the console within 1 minute.
- [ ] An automated test suite proves a partner user cannot retrieve a non-consented record through any console endpoint.

**M17 — Access and audit.** As partner IT, I can see who did what.
- [ ] Roles: admin, care manager, analyst (aggregates only).
- [ ] MFA required for every console user.
- [ ] Every view or export of member-level data is logged with user, time, member and action; logs are exportable by the admin and can't be edited.
- [ ] A user from one tenant can never access another tenant's data; covered by automated tests.

**M18 — Configuration.** As a partner admin, I brand the app and adjust protocols without a developer.
- [ ] Set logo, colours, app display name, support contact.
- [ ] Adjust care-gap intervals within clinically approved bounds; every change is versioned and logged.
- [ ] No partner-specific code branches exist in the codebase.

**M19 / M20 — Language and channels.**
- [ ] All patient screens and templates available in English and Arabic with correct right-to-left layout, numerals and date formats.
- [ ] WhatsApp and SMS messages contain no diagnosis, test name, drug name or result; they carry a generic prompt and a link.

## 5. Non-functional requirements

| Area | Requirement |
|---|---|
| Data residency | Each market's data stays in that market's deployment; no cross-region copies. Any LLM or OCR call is made to an endpoint in the same region. **[Verify]** available regions and services. |
| Security | Encryption in transit and at rest; secrets in a managed vault; least-privilege access; dependency and code scanning in CI; penetration test before R2. |
| Privacy | Collect only fields listed in this document; production data never used in development; synthetic data for demos. |
| Reliability | 99.5% monthly availability for R2; medication reminders must fire offline from the device. |
| Performance | App opens to home in under 3 seconds on a mid-range Android phone; console pages under 2 seconds at 10,000 members. |
| Accessibility | Font scaling, minimum contrast, screen-reader labels; usable by a 60-year-old first-time app user in moderated tests. |
| Devices | Android 9+ and iOS 15+ **[Assumption]**; Android is the priority for both markets. |
| Observability | Product analytics events for every metric in section 7, containing no health values. |
| Clinical safety | Named clinical safety officer; hazard log; every template and rule signed off and versioned; incident process with a 24-hour first response. |

## 6. Care-gap rule set v0 (type 2 diabetes)

**[Verify]** every row against the current ADA Standards of Care and local guidelines with the clinical advisor. Partners may adjust intervals within bounds the advisor approves.

| Gap | Default interval | Closed by |
|---|---|---|
| HbA1c test | Every 6 months; every 3 months if last value was above target or treatment changed | Lab result or claim |
| Kidney check (urine albumin ratio and eGFR) | Yearly | Lab result or claim |
| Dilated eye exam | Yearly (partner may set 2-yearly after a normal exam) | Claim or patient-confirmed visit |
| Lipid panel | Yearly | Lab result or claim |
| Foot examination | Yearly | Claim or patient-confirmed visit |
| Blood pressure reading | At least every 6 months | Visit claim or home entry |
| Medication refill (R2) | Supply ends within 5 days based on dispensing data | New dispensing record |

## 7. Success metrics

| Release | Metric | Target **[Assumption]** |
|---|---|---|
| R1 | First report uploaded within 7 days of sign-up | ≥ 60% |
| R1 | Extraction fields accepted without correction | ≥ 90% |
| R1 | 30-day retention (opened app in days 23–30) | ≥ 40% |
| R1 | Nudge acted on within 14 days | ≥ 25% |
| R2 | Activation of invited members | ≥ 30% |
| R2 | 90-day retention of activated members | ≥ 35% |
| R2 | Open care gaps closed within 60 days | ≥ 30%, and above comparison group |
| R2 | Care-manager weekly use of worklist | ≥ 80% of assigned users |

## 8. Open questions

- [ ] Which guideline and intervals will the clinical advisor sign off? (blocks M6, M8)
- [ ] Which drug list for medication search in each market? **[Verify]** licensing.
- [ ] What claims file format do UAE payers and TPAs actually export? (discovery question 13)
- [ ] Is OTP-only identity acceptable to a UAE partner, or is national ID login needed for the pilot?
- [ ] Does the first partner want its own care managers on the console, or expect us to provide outreach?
- [ ] Legal retention periods for health records after account deletion, per market. **[Verify]**
