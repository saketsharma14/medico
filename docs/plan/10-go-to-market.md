# Deliverable 8: Go-to-Market Plan

_Version 1, 2026-11-19. Target account criteria and interview scripts are in [04-discovery-kit.md](04-discovery-kit.md); this document covers what happens after discovery._
_Every price below is a hypothesis invented for testing, not a market benchmark. Replace them with what discovery interviews reveal._

## 1. Strategy in one paragraph

Win **one paid design-partner pilot** with a mid-size organisation that can decide quickly (clinic chain, TPA or self-insured employer), run it for six months with a comparison group, and turn the result into a case study. Use the case study to sell to insurers, who are the long-term buyer but won't move for an unproven student team. India supplies product evidence (beta retention, extraction accuracy) that makes the first pilot credible; the UAE supplies the first meaningful revenue.

## 2. Sequence

| Stage | When | Target | Offer | Goal |
|---|---|---|---|---|
| 1. Discovery | Nov 2026 – Jan 2027 | 38 interviews | Nothing; research | Validated problem; 2–3 warm prospects |
| 2. Design partner | Feb – Jun 2027 | 1 organisation | 6-month paid pilot, founder-level attention, input into the roadmap, discounted first-year price | Signed pilot agreement |
| 3. Pilot | Sep 2027 – Feb 2028 | Same | Delivery | Outcome report, reference, case study |
| 4. First insurers | From Dec 2027 (interim results) | 5–8 insurers and TPAs scored highest in the tracker | Pilot or direct annual contract, using the case study | Customer #2 signed by mid-2028 |
| 5. Expand | 2028 onward | Existing partners; second market segment | More conditions; more members; embeddable module | Net revenue growth per partner |

## 3. Sales process

| Step | What happens | Exit criterion |
|---|---|---|
| 1. First meeting | Discovery interview or intro call | They describe the problem in their own words and agree to a second call |
| 2. Demo | 30 minutes: patient app on a phone, console mock-up or build, one slide on the firewall | A named sponsor says "this could work here" |
| 3. Sizing | Agree cohort, metrics and data they can provide; we send the pilot proposal (section 6) | Proposal accepted in principle; budget owner identified |
| 4. Security and legal | Questionnaire, data agreement, regulatory position paper | Their IT and compliance sign off |
| 5. Signature | Pilot agreement signed; fee invoiced | Signed agreement and kick-off date |
| 6. Onboarding | File mapping, branding, protocol sign-off, care-manager training | Go-live |

Rules for a two-person team:
- Work at most **three prospects past step 2** at once.
- Always get a **named sponsor** and a **named budget owner**; if they are different people, meet both before step 3.
- If a prospect stalls for more than four weeks at any step, ask directly what's blocking, then park it.
- Bring the **clinical advisor** to at least one call per prospect; credibility is the main thing a student team lacks.

## 4. Messages by audience

| Audience | Lead with | Proof to show | Avoid |
|---|---|---|---|
| Medical director (payer) | "See which diabetic members are off track this month, and bring them back." | Worklist demo; outcome report with comparison group | Promising reduced admissions in six months |
| Care management lead | "Your nurses call the right 20 people each day instead of working a spreadsheet." | Worklist filters, outreach log | Suggesting we replace their team |
| Finance or actuary | "Results measured against a matched comparison group from your own claims." | Report methodology page | Unsupported savings figures |
| Partner IT and compliance | "Data stays in-country; your staff can't see patient-uploaded records without consent; here is our security pack." | Architecture summary, firewall tests, position paper | Vagueness about the LLM |
| Clinic owner | "Your chronic patients come back on schedule." | Recall worklist; pre-visit summary | Payer language like PDC |
| Doctor | "A full history in one page before the patient sits down." | Summary PDF from a real-looking record | Any hint that the app advises patients on treatment |
| Patient | "All your reports in one place, reminders that keep you on track, and private from your insurer by default." | The app itself | Medical claims |

## 5. Objections

| Objection | Response |
|---|---|
| "Members switch insurers every year; prevention doesn't pay back for us." | The first-year case rests on in-year effects: avoidable emergency visits, steering to in-network labs and pharmacies, fewer duplicate tests. We measure those in the pilot. Also strongest for long-tenure groups, so start there. |
| "We already have an app." | We don't replace it. Members can reach us from inside your app, and later we can embed. Your app shows your network's data; ours adds everything from outside it and the care-gap layer. |
| "You're students with no track record." | That's why it's a small, fixed-fee pilot with exit rights. Here are our beta numbers, our clinical advisor and our security pack. You get founder attention a large vendor won't give. |
| "Patients won't use it." | Our beta retention is X. Activation depends on the invitation coming from you or the member's doctor; here is the invitation playbook (section 8). We commit to an activation target in the pilot. |
| "We can't share claims data." | Start with the member file only; we use patient uploads for the first two months and add claims when your team is ready. Data stays in-country under a processing agreement. |
| "Is this a medical device? Is the AI safe?" | The AI only transcribes reports and the patient confirms. Nothing generated is shown as advice. Here is our position paper and clinical safety plan. |
| "What will the insurer see?" (from patients and regulators) | Gap status and totals only, unless the member opts in. Enforced in the database, and written into the contract. |
| "Too expensive." | Price is per activated member, so you pay only for people who actually joined. Pilot fee is fixed and credited against the first-year contract. |

## 6. Pilot proposal template

_Copy, fill the brackets, keep it to three pages. Have a lawyer turn it into a contract once accepted in principle._

---

### Pilot proposal: diabetes care-gap programme for [Partner]

**1. Objective.** Show that [Partner]'s members with type 2 diabetes complete recommended tests and screenings and refill medication more reliably when supported by [Product], compared with similar members who are not.

**2. Scope**

| Item | Proposal |
|---|---|
| Duration | 6 months from go-live, plus 4 weeks of set-up before and 4 weeks of reporting after |
| Intervention group | [500–1,000] adult members with type 2 diabetes, identified by [Partner] from [diagnosis codes / programme list] |
| Comparison group | A similar number of members matched on age band, sex, plan type, and prior-year testing and refill history, who receive [Partner]'s usual care. Selected before go-live. |
| Included | Branded patient app (English, [Arabic/Hindi]); member invitations; care-gap worklist and dashboard for up to [5] care-team users; monthly reports; final outcome report |
| Not included | Medication advice, diagnosis, teleconsultation, real-time booking or pharmacy ordering, integration with [Partner]'s other systems |

**3. Success metrics** (measured for both groups over the same period)

| Metric | Definition | Target for intervention group |
|---|---|---|
| Activation | Invited members who complete onboarding and consent | ≥ [30]% |
| HbA1c testing | Members with at least one HbA1c test in the period (two if previously above target) | [+10] percentage points over comparison |
| Kidney and eye screening | Members due at start who complete the screening | [+10] percentage points over comparison |
| Medication adherence | Share with proportion of days covered ≥ 80%, from dispensing data | [+5] percentage points over comparison |
| Care gaps closed | Open gaps at start that are closed within the period | Higher than comparison |
| Reported, not targeted | HbA1c values where available; emergency visits and admissions | Reported with a note that the pilot is too small and short to show a reliable difference |

**4. Responsibilities**

| [Partner] | [Company] |
|---|---|
| Executive sponsor and day-to-day lead | Named founder as lead; clinical advisor for protocol review |
| Member file at start; claims and dispensing file [monthly], plus 12–24 months of history | Secure intake, mapping and validation of files |
| Sign-off of care protocol and message wording | Configuration, branding, training |
| Sends the first invitation under its own name | Follow-up messages, app, console, support |
| [1–3] care-team users working the worklist weekly | Monthly report; weekly check-in call |

**5. Data and privacy.** Data is stored in [country]. [Company] acts on [Partner]'s instructions for data [Partner] provides. Records that members add themselves are visible to [Partner] only as care-gap status and totals unless the member chooses to share more. A data processing agreement is attached. At the end, [Partner]'s data is returned or deleted within [30] days; members may keep their own accounts.

**6. Timeline**

| Week | Activity |
|---|---|
| −4 to −1 | Agreement, security review, file mapping, cohort and comparison selection, branding, training |
| 0 | Go-live with first [100] members |
| 2 | Remaining members invited |
| 12 | Interim report and review meeting |
| 26 | Pilot ends |
| 30 | Final outcome report and decision meeting |

**7. Fee.** Fixed pilot fee of [amount], invoiced [50% at signature, 50% at interim report]. The fee is credited in full against the first-year contract if signed within [60] days of the final report.

**8. After the pilot.** If the activation target and at least [two of four] outcome targets are met, the parties intend to enter a [12]-month agreement at [price] per activated member per month, with a minimum of [N] members. Either party may decline; this clause records intent and pre-agreed pricing.

**9. Exit.** Either party may end the pilot with [30] days' notice. [Company] may publish anonymised, aggregate results with [Partner]'s approval of the text, which won't be unreasonably withheld.

---

## 7. Pricing hypotheses

**Nothing here is a benchmark.** These are starting points I chose so that interviews have something concrete to react to. Test them with "what do you pay today for…" questions, never by quoting them cold.

### Model

| Component | Structure | Why |
|---|---|---|
| Platform fee | Per **activated** member per month, with a monthly minimum | Aligns price with engagement; the minimum protects us from a partner that doesn't promote the programme |
| Implementation fee | One-off per partner | Covers mapping, branding, protocol set-up; discourages unserious pilots |
| Pilot fee | Fixed, credited against year one | A paying pilot gets executive attention; credit removes the objection |
| Outcome bonus | From year two, tied to agreed targets against comparison | Only once measurement is trusted by both sides |
| Add-ons | Human outreach service; extra conditions; separate store listing; embeddable module | Expansion revenue without custom development |

### Starting numbers to test **[Assumption]**

| Segment | Platform fee | Implementation | Pilot (6 months) |
|---|---|---|---|
| UAE insurer or TPA | USD 4–10 per activated member per month | USD 10,000–25,000 | USD 10,000–20,000 fixed |
| UAE self-insured employer | USD 5–12 | USD 5,000–10,000 | USD 5,000–10,000 |
| UAE clinic chain | USD 150–400 per site per month, or USD 1–3 per active patient | USD 2,000–5,000 | USD 2,000–5,000, or free for the first design partner in exchange for data access and a case study |
| India employer or insurer | USD 0.5–2 per activated member per month | USD 1,000–5,000 | USD 1,000–3,000 |
| India clinic chain | USD 30–100 per site per month | Waived | Free for a first reference |

### How to justify a price to a payer

Use the partner's own numbers; fill this in during step 3 of the sales process.

| Input | Source |
|---|---|
| A. Annual claims cost per diabetic member | Partner |
| B. Share of that cost judged avoidable in-year (emergency visits, duplicate tests, out-of-network labs and pharmacy) | Partner estimate; discovery |
| C. Reduction we can plausibly achieve in B among activated members | Conservative assumption until pilot data exists |
| D. Annual price per activated member | Our fee × 12 |
| **Return** | (A × B × C) ÷ D; a payer will usually want this clearly above 1 within the policy year **[Assumption]** |

If the return doesn't clear the bar with honest inputs, the price or the segment is wrong. Don't adjust C to make it work.

### Pricing rules

- [ ] Never run a free pilot for an insurer. For a first clinic reference, free is acceptable only with a signed agreement covering data access, a named sponsor and case-study rights.
- [ ] Never price on the insurer's total membership.
- [ ] Never sell custom features; sell configuration and a roadmap.
- [ ] Define "activated" in the contract: completed onboarding and consent, and still enrolled in the month billed.

## 8. Getting patients to activate

The partner buys outcomes, and outcomes need activation. This playbook is part of onboarding.

| Step | Day | Channel | Sender | Content |
|---|---|---|---|---|
| 1 | 0 | SMS or WhatsApp | Partner's name | "[Partner] has a free programme to help you stay on top of your health checks. Set up in 2 minutes: [link]" |
| 2 | 3 | Same | Partner | Reminder with the privacy promise in one line |
| 3 | 7 | Phone call | Care manager, from the worklist | Personal invitation; offer to help install |
| 4 | 14 | At the clinic or pharmacy | Doctor or pharmacist, QR card | "Scan to keep all your reports in one place" |
| 5 | 30 | SMS | Partner | Last invitation, with any incentive the partner offers |

- Messages never mention diabetes or any health detail.
- Ask each partner for one real incentive: a waived co-pay on the overdue test, a free HbA1c test, or pharmacy delivery. **[Verify]** what local insurance rules allow.
- First-week goal after install: one uploaded report. The onboarding flow ends on the upload screen.
- Track the funnel per step and per channel; report it to the partner monthly.

## 9. Channels and credibility

| Channel | Use | First action |
|---|---|---|
| University and faculty | Introductions, incubator, legal clinic | Ask this month |
| Incubators and regulator innovation programmes | Entity, credits, payer introductions, regulatory guidance | Shortlist and apply in Sprint 1–2 **[Verify]** which are open |
| Clinical advisor's network | Doctors, clinic owners, medical directors | Ask each advisor candidate who they know |
| Events | Meet payers and clinic operators in person | Pick two events in the next six months **[Verify]** dates |
| LinkedIn | Outreach; founders post what they learn from discovery (no confidential detail) | One post a week from January |
| Published evidence | Beta report, then pilot case study, then a conference abstract with the advisor | After the beta |
| TPAs and brokers | Reach several insurers and employers through one relationship | Include in discovery |

## 10. Go-to-market metrics

| Metric | Target by June 2027 **[Assumption]** |
|---|---|
| Interviews completed | 38 |
| Organisations past demo | 6 |
| Pilot proposals sent | 3 |
| Pilot agreements signed | 1 |
| Time from first meeting to signature | Measure; expect 3–6 months for a clinic or TPA |
| Beta users, 30-day retention | 50+ users, near 40% |
