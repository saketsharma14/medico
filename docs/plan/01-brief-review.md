# Brief Review: What to Change Before Planning

_Written 2026-11-19. These amendments override [00-brief.md](00-brief.md) where they differ._
_Market facts below come from general knowledge, not fresh research; everything marked **[Verify]** must be checked against current sources or in discovery interviews._

## Verdict

The brief is strong on product shape, the clinical safety line and the data model. Its weak points are commercial: it assumes insurers will pay for long-term outcomes, that a short pilot can prove them, and that patients will hand records to an insurer-branded app. The amendments below fix those, cut the MVP to what a small team can ship, and make the platform portable beyond the UAE.

## A. Changes that alter the plan

| # | Issue in the brief | Amendment | Why |
|---|---|---|---|
| 1 | **Market is UAE-only.** | Keep **one beachhead market for the first pilot**, but build the platform **region-portable from day one**: per-country deployment cell (data stays in-country), pluggable identity (UAE Pass, ABHA in India, Nafath in KSA), pluggable drug/terminology code sets, pluggable exchange connectors (Malaffi/NABIDH, India's ABDM, KSA's NPHIES). Which market goes first is decided by where we get the first design partner. | Two markets at once doubles compliance work before any revenue. Portability costs little if designed in early and a lot if retrofitted. |
| 2 | **Insurer ROI is assumed.** Group policies renew yearly and members move between insurers, so an insurer may not be around to collect savings from complications avoided in year 3. | Lead the ROI case with **savings inside the policy year**: avoidable ER visits, steering tests and refills to lower-cost in-network labs and pharmacies, reduced medication waste. Add **TPAs, government-funded programs and self-insured employers** to the first-buyer list, since their members stay longer. **[Verify]** member tenure by segment in discovery. | This is the most likely reason an insurer says "interesting, but no budget". |
| 3 | **Pilot can't prove what it promises.** 500–1,000 members over 3–6 months is too small and too short to show a change in admissions, and barely enough for HbA1c. | Pilot is **6 months minimum**. Primary metrics are process measures (HbA1c testing rate, PDC, screening completion, activation). HbA1c change is secondary. ER and admissions are reported but not promised. Agree a **matched comparison group from claims** before the pilot starts. | Without a control group the insurer's actuary will dismiss the result, and the case study is the whole point of the pilot. |
| 4 | **Adherence is measured from in-app dose logging.** | PDC must come from **pharmacy claims or dispensing data**. Self-logged doses are an engagement feature only. This makes the **insurer claims feed connector #1**, equal with patient upload. | Payers only trust PDC from dispensing records. Claims also pre-fill each member's timeline (diagnoses, dispensed drugs, tests done) with no patient effort, which fixes the empty-app problem on first open. |
| 5 | **Patients won't trust an insurer-branded app with their full records.** They will fear higher premiums or denied claims. | Add a **data firewall** as a product principle: the payer sees care-gap status and aggregate outcomes only. Raw records the patient uploads are not shared with the payer unless the patient opts in per category. State this on the first onboarding screen and in the contract. **[Verify]** what local law allows insurers to do with member health data. | Activation is the top product risk, and this is the main reason people won't sign up. It is also a selling point with regulators. |
| 6 | **MVP is too large** for a small team: booking, pharmacy ordering with delivery, UAE Pass, three notification channels and white-label store apps are all in v1. | MVP = claims ingestion + care-gap worklist + patient app (upload, timeline, trends, reminders, nudges) + outcome report. **Booking and refills are deep links or a concierge handoff** in the pilot; real integrations come after. Identity is OTP + member ID first, national ID login second. | Each cut item is an integration project with a third party's timeline. None of them is needed to prove the pilot metrics. |
| 7 | **White-label means a separate app-store listing per partner.** Many insurers also already have a member app. | Ship **one app with per-tenant theming** ("powered by") for pilots, and offer an **embeddable module (SDK or web view)** for partners with an existing app. Separate store listings become a paid tier later. | Separate listings mean separate reviews, releases and support for every partner. |
| 8 | **App-only engagement.** | Add a **human layer**: the partner's care managers, or ours as a paid service tier, work the worklist by phone and WhatsApp. Make **WhatsApp the first touchpoint** (invite, reminders with deep links), with no health details in the message text. **[Verify]** WhatsApp Business data-residency position. | Chronic-care programs that pair an app with human outreach consistently engage better than apps alone, and the target age group lives on WhatsApp. |
| 9 | **"Keeps us out of medical-device regulation" is asserted.** Personalised nudges and LLM-written explanations of lab results can be read as clinical decision support. | Patient-facing explanations are **clinician-approved templates**, not free LLM text, in the MVP. The LLM is used for extraction only. Get a **written regulatory opinion** on device classification before the pilot. | Makes the non-device position defensible and removes the hallucination risk from the patient screen. |
| 10 | **Extraction safety relies on the patient confirming values.** Patients can't spot a wrong unit. | Add confidence scores, physiological range checks, unit sanity checks, and a **"patient-reported, unverified" label** that follows the value everywhere. Unverified values never close a care gap in payer reports without that label. Set an accuracy target on a test set of real reports before launch. | A wrong HbA1c value is both a safety issue and a credibility issue with the payer. |
| 11 | **ISO 27001 "by customer #2".** | Run ISO-27001-aligned controls **from the first line of code** and be ready for the first insurer's security questionnaire. Formal certification by customer #2 stays as the target. **[Verify]** whether ADHICS compliance is required before any Abu Dhabi go-live. | The first insurer's security team will block the pilot otherwise. |
| 12 | **Pharmacy and lab commissions** are listed as revenue. | Park until a lawyer confirms referral fees are allowed in each market. **[Verify]** | Referral payments in healthcare are restricted in many jurisdictions and can undermine the "neutral" positioning. |

## B. Smaller additions

- **Competitive landscape is missing.** Add it to deliverable 1. Candidates to check: HIE patient apps (Malaffi, NABIDH), insurer member apps, GluCare/meta[bolic], Okadoc, TruDoc in the UAE; Eka Care, DRiefcase, BeatO, Sugar.fit, Fitterfly in India. **[Verify]** each one's current status and offering.
- **Ramadan mode** for the GCC: reminder times shift with fasting hours, with a "talk to your doctor before fasting" prompt. Low build cost, strong local differentiator.
- **Language priority by member segment.** In the Gulf many members are South Asian or Filipino expats, so Hindi, Urdu, Malayalam and Tagalog may matter as early as Arabic for some partners. Decide per design partner.
- **Named roles from day one:** clinical safety officer and data protection officer (can be part-time advisors at first).
- **"Enrolled member" must be defined in the contract** as an activated member (completed onboarding), otherwise billing disputes follow.

## C. Stack recommendation (replaces the either/or choices in section 7)

All TypeScript, so a small team works in one language end to end:

| Layer | Pick | Reason |
|---|---|---|
| Mobile | React Native (Expo) | Shares types and code with web; RTL support is adequate. |
| Console | Next.js | As in the brief. |
| Backend | NestJS modular monolith | Same language as the clients; clear module boundaries for later splitting. |
| FHIR | Medplum (self-hosted) on PostgreSQL | TypeScript-native, open source, includes auth and audit; lighter to run than HAPI. **[Verify]** licence and fit during architecture work. |
| Hosting | One cloud, one in-country region per market | Chosen in the architecture deliverable after checking what partners accept. **[Verify]** |

## D. Deliverable order (revised)

Discovery starts in month 0, so its materials move up:

1. Lean canvas, value propositions and competitive landscape
2. **Discovery kit** (target account criteria, interview script) — moved up from GTM
3. PRD for the MVP
4. System architecture
5. Integration plan
6. Compliance roadmap
7. Build roadmap
8. Go-to-market plan (pilot proposal template, pricing hypotheses)
9. Financial model structure
10. Pitch deck outline
11. Risk register and first 30-day action plan
