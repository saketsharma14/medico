# Deliverable 1: Lean Canvas, Value Propositions and Competitive Landscape

_Version 1, 2026-11-19. Built on [00-brief.md](00-brief.md), [01-brief-review.md](01-brief-review.md) and [02-founder-inputs.md](02-founder-inputs.md)._
_Nothing here has been validated with customers yet. Every row is a hypothesis for the discovery interviews._

## 1. One-line positioning

> A white-label chronic-care platform that pulls a patient's scattered records into one timeline, keeps them on schedule with tests and prescribed medication, and gives the payer or clinic proof that it worked.

## 2. Lean canvas by customer

### 2a. Payers (insurers, TPAs, self-insured employers) — the economic buyer

| Block | Content |
|---|---|
| **Customer segment** | UAE: insurers and TPAs with enhanced-plan members, government-funded programmes, large self-insured employers. India: employers with group health cover, insurers with wellness or outpatient benefits **[Verify]**. Early adopter: a medical director or head of care management who already runs a manual diabetes programme. |
| **Problem** | 1. Can't see which diabetic members are overdue for tests or have stopped refilling until a costly claim arrives. 2. Outreach is phone calls from a small nurse team and doesn't scale. 3. No credible way to show that a wellness programme changed anything. |
| **Existing alternatives** | In-house disease-management nurses, TPA call centres, the insurer's own member app, wellness vendors, doing nothing. |
| **Unique value proposition** | "Find every diabetic member who is falling behind, bring them back on track, and get an actuary-ready report showing the result against a comparison group." |
| **Solution** | Claims-fed care-gap worklist; multi-channel nudges plus care-manager workflow; outcome report (testing rate, PDC, screening completion) with a matched comparison group. |
| **Channels** | Direct founder-led outreach to medical directors, incubator and regulator innovation programmes, TPA partnerships, clinical advisor's network, health-insurance conferences. |
| **Revenue** | Fee per activated member per month; one-time implementation fee; outcome bonus from year 2. All prices are hypotheses. |
| **Key metrics** | Members activated ÷ invited; care gaps closed; PDC ≥ 80% share; HbA1c testing on schedule; pilot-to-contract conversion. |
| **Unfair advantage (to build)** | Outcome evidence from the first pilot; a normalised cross-provider record no single hospital app has; a patient-trust firewall insurers' own apps lack. |

### 2b. Clinic chains, labs and pharmacies — the delivery network and the likely first pilot

| Block | Content |
|---|---|
| **Customer segment** | Mid-size clinic chains and stand-alone diabetes or endocrinology centres (5–30 sites **[Assumption]**), plus lab and pharmacy chains. Early adopter: an operations head or lead diabetologist worried about patients who never come back. |
| **Problem** | 1. Chronic patients drop out of follow-up, so revenue and outcomes both leak. 2. Doctors don't see results from other hospitals, so tests get repeated or decisions are made blind. 3. Recall is done by reception staff with spreadsheets. |
| **Existing alternatives** | The clinic's EMR recall list, WhatsApp broadcast messages, receptionist phone calls, booking marketplaces. |
| **Unique value proposition** | "Your diabetic patients come back on schedule, and your doctors see their full history, including results from other hospitals, in one page before the visit." |
| **Solution** | Recall worklist driven by guideline intervals; branded patient app or WhatsApp reminders; pre-visit one-page summary; booking deep link. |
| **Channels** | Clinical advisor introductions, direct outreach to clinic owners, medical association events, lab and pharmacy partnerships. |
| **Revenue** | Low monthly fee per site or per active patient **[Assumption]**; in the first pilot, a nominal fee in exchange for data and a case study. Later, payer contracts route members to partner clinics. |
| **Key metrics** | Follow-up visit rate, recall-to-booking conversion, repeat-test rate, doctor usage of the summary page. |
| **Unfair advantage (to build)** | Patient volume routed from payer contracts, which a stand-alone recall tool can't offer. |

### 2c. Patients and caregivers — the user (pays nothing)

| Block | Content |
|---|---|
| **Customer segment** | Adults with type 2 diabetes who use more than one hospital or lab; adult children managing a parent's care. Early adopter: 35–60, recently diagnosed or recently told their numbers are worsening, comfortable with WhatsApp. |
| **Problem** | 1. Reports are scattered across paper, PDFs, hospital portals and phone galleries. 2. They don't know whether their numbers are getting better or worse. 3. They forget tests, screenings and refills until something goes wrong. |
| **Existing alternatives** | A folder of paper reports, phone photos, individual hospital apps, pill-reminder apps, a relative who keeps track. |
| **Unique value proposition** | "Photograph any report from any hospital. See all your results in one place, understand the trend, and never miss a test or a refill. Your insurer never sees your reports unless you choose to share them." |
| **Solution** | Photo or PDF upload with automatic extraction; unified timeline with trend charts; medication and test reminders; shareable summary for the doctor. |
| **Channels** | Invitation from the insurer, employer or their own doctor; WhatsApp-first onboarding; caregiver referral. |
| **Revenue** | None from the patient. |
| **Key metrics** | Activation of invited members, first report uploaded within 7 days, 30- and 90-day retention, reminder-to-action conversion. |
| **Unfair advantage (to build)** | Works with every provider from day one, in the patient's language, with a clear privacy promise. |

## 3. Cost structure (shared across segments)

| Cost line | Now (bootstrapped) | After first funding |
|---|---|---|
| People | Two founders, unpaid | First hires: clinical lead (part-time), commercial lead |
| Cloud and LLM | Free tiers and startup credits; India region for beta | In-country cells for each market |
| Legal and regulatory | Incubator or pro-bono clinics **[Verify]** | Regulatory opinion, contracts, data-protection counsel |
| Security | Free tooling, ISO-aligned practices | Penetration test, ISO 27001 certification |
| Messaging | WhatsApp and SMS at pilot volume (small) | Scales with members |

## 4. Value proposition statements

| Audience | Statement | Proof we need |
|---|---|---|
| **Payer** | We show you which diabetic members are off track this month and bring a measurable share of them back, with results reported against a comparison group. | Pilot data: testing rate and PDC uplift versus control. |
| **Clinic** | Your chronic patients return on schedule and arrive with a complete history. | Follow-up rate before and after, at one clinic. |
| **Patient** | All your reports in one place, explained simply, with reminders that keep you on track, and private from your insurer by default. | Beta retention and upload rates. |

## 5. Competitive landscape

_From general knowledge, not checked against current sources. **[Verify]** every row before using it in a pitch._

| Type | Examples | What they do well | Gap we target |
|---|---|---|---|
| Government exchange apps | Malaffi and NABIDH patient access (UAE), ABHA apps (India) | Official records from connected hospitals | Limited to one emirate or to linked facilities; no adherence, care-gap or payer reporting |
| Hospital and insurer apps | Large hospital group apps, insurer member apps | Booking, claims, records from their own network | Single-network view; low patient trust for sharing outside records |
| Diabetes programmes | GluCare / meta[bolic] (UAE); BeatO, Sugar.fit, Fitterfly (India) | Deep clinical programmes with devices and coaches | Mostly direct-to-consumer or own-clinic; costly per patient; not a white-label layer for payers |
| Personal health record apps | Eka Care, DRiefcase (India) | Report storage and ABDM linking | Consumer focus; no payer worklist or outcome proof |
| Booking and telehealth | Okadoc, TruDoc (UAE); Practo (India) | Appointments and consultations | Transactional; no longitudinal chronic-care tracking |
| Population-health vendors | Global care-management platforms sold to payers | Analytics on claims | Weak patient-facing engagement; expensive; not localised |

**Where we sit:** the only layer that combines any-provider records, patient engagement and payer-grade outcome reporting, sold white-label. The risk is that a well-funded diabetes programme or a government app adds the missing piece first, so speed to a published pilot result matters more than feature breadth.

## 6. Top assumptions to test in discovery (ranked)

- [ ] Payers have budget for chronic-care engagement and a named owner for it.
- [ ] Payers can and will send a claims and eligibility file to a small vendor.
- [ ] Savings within one policy year are large enough to justify a per-member fee.
- [ ] A clinic chain will pay, even nominally, for recall and a cross-provider summary.
- [ ] Patients invited by a payer or doctor will install, and will upload at least one report in the first week.
- [ ] The privacy firewall matters to patients and is acceptable to payers.
- [ ] Extraction reaches usable accuracy on real UAE and Indian lab reports.
