# Deliverable 11: Risk Register and First 30-Day Action Plan

_Version 1, 2026-11-19. Likelihood and impact ratings are my judgement given what's in [02-founder-inputs.md](02-founder-inputs.md); re-rate them together and review monthly._

## 1. Risk register

**Scale:** likelihood and impact are each High (3), Medium (2) or Low (1). Score = likelihood × impact. Owners are "A" or "B" until you assign names.

### Top risks (score 6–9)

| ID | Risk | L | I | Score | Early warning | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R1 | **No clinical advisor found**, so Gate A can't pass and payers don't take meetings | 2 | 3 | 6 | No candidate in serious talks by end of December | Approach 5 candidates in the first 30 days through faculty and interviews; offer advisory equity; ask each doctor interviewed | A |
| R2 | **Founder time runs short** (studies, exams); dates slip by months | 3 | 3 | 9 | Two sprints in a row under 50% complete | Agree weekly hours in writing; follow the cut order in the build roadmap; protect discovery over features | Both |
| R3 | **Insurers won't buy** because members churn yearly and savings come later | 3 | 3 | 9 | Tenure objection raised in most payer interviews with no counter | Lead with in-year savings; target long-tenure segments, TPAs and employers; clinic route to first evidence; week-8 decision can change the first buyer | B |
| R4 | **Sales cycle outlasts the team's patience and cash** | 3 | 3 | 9 | No prospect past the demo step by April 2027 | Paid pilot with a faster-moving partner first; grants and credits; no recurring costs without six months of funding; work at most three prospects | B |
| R5 | **Patients don't activate or come back** | 3 | 3 | 9 | Beta: under 40% upload in week one, or 30-day retention under 25% | Partner- and doctor-sent invitations; WhatsApp-first; privacy promise up front; human outreach; weekly user calls in beta; don't start a pilot with a leaky app | A |
| R6 | **Extraction isn't accurate enough** on real reports | 2 | 3 | 6 | Spike accuracy under 90% on typed reports | Two independent reads with cross-check; validators; evaluation harness in CI; narrow to well-handled formats and keep manual entry | A |
| R7 | **A wrong value or nudge contributes to patient harm** | 1 | 3 | 3→**6** if no advisor | Any incident or near miss in beta | Clinical safety line; approved templates; permanent "unverified" label; hazard log; incident process; no real patient data before Gate A | Advisor + A |
| R8 | **Regulator treats the product as a medical device or requires a licence** we don't have | 2 | 3 | 6 | Lawyer or partner compliance raises it | Position paper; written regulatory opinion before any UAE pilot; templates only, no generated advice; Gate E for new features | B |
| R9 | **Data breach or privacy failure** | 1 | 3 | 3→**6** once real data is held | Failed security test; leaked credential | Security baseline from the first commit; firewall enforced in the database; no production data outside production; penetration test before pilot; incident plan | A |
| R10 | **Two markets split the effort** and neither moves | 3 | 2 | 6 | Interviews and build both behind after sprint 3 | Each market has one job (India product, UAE business); one cell until a pilot country is certain; review the split at the week-8 decision | Both |
| R11 | **No legal entity when it's needed** (accounts, contracts, credits) | 2 | 3 | 6 | Incubator decision not made by end of December | Decide location in the first 30 days; use test tracks and email login meanwhile | B |
| R12 | **Partner can't or won't share claims data** | 2 | 3 | 6 | Security or legal objection in discovery question 13 | Start pilots on the member file plus uploads; accept any existing export; processing agreement template ready | B |
| R13 | **University claims the intellectual property**, or founders disagree on equity later | 2 | 3 | 6 | No written policy answer; no signed agreement | Read the policy and ask the incubator office in week 1; sign a founders' agreement in the first 30 days | Both |

### Other risks (score 1–4)

| ID | Risk | L | I | Score | Mitigation |
|---|---|---|---|---|---|
| R14 | A funded competitor, hospital group or government app adds the missing piece first | 2 | 2 | 4 | Speed to a published pilot; any-provider records plus payer proof; partner with, don't fight, government programmes |
| R15 | Drift into custom development for one partner | 2 | 2 | 4 | Configuration only; implementation fee covers mapping; say no in writing |
| R16 | Health information exchange access never granted in the UAE | 3 | 1 | 3 | Never depend on it; route through licensed partners; ABDM in India |
| R17 | In-region LLM or OCR unavailable, or price rises | 2 | 2 | 4 | Provider interfaces; self-hosted fallback; small per-member cost |
| R18 | Self-hosted Medplum proves too heavy for two people | 2 | 2 | 4 | `ClinicalRepository` interface; decide in sprint 3 from real use; fallback to FHIR JSON in PostgreSQL |
| R19 | Pilot result is inconclusive or negative | 2 | 2 | 4 | Comparison group and metrics agreed up front; process metrics as primary; publish honestly and iterate |
| R20 | WhatsApp or SMS registration delayed or restricted | 2 | 2 | 4 | Start registration at incorporation; generic templates; alternate channel |
| R21 | Key-person risk: one founder leaves | 1 | 3 | 3 | Vesting; shared knowledge through the team board and reviews; no single-owner systems |
| R22 | A statistic or claim in a pitch is wrong | 2 | 2 | 4 | Source every figure; resolve **[Verify]** items before external use |
| R23 | Arabic or Hindi content is mistranslated in a clinically misleading way | 2 | 2 | 4 | Native-speaking clinical reviewer signs off each language |
| R24 | Pharmacy or lab commissions breach referral rules | 1 | 2 | 2 | Parked until legal advice |

### How to use the register

- [ ] Assign an owner to every risk scored 6 or more.
- [ ] Review on the first Friday of each month: re-rate, add new risks, close dead ones, and note the change in `UPDATES.md`.
- [ ] Any risk whose early warning fires goes on the next sprint's task list.
- [ ] The clinical hazard log (compliance roadmap section 5) is separate and belongs to the clinical safety officer.

## 2. First 30 days: 20 November to 19 December 2026

This covers Sprint 1 and Sprint 2 of the build roadmap. Two tracks, one owner each. Adjust the split, but leave no line without a name.

### End-of-period targets

| # | Target | Evidence |
|---|---|---|
| 1 | Both founders have read the plan and agreed or amended it | `DECISIONS.md` entries marked confirmed |
| 2 | Founders' agreement signed; university IP policy answered | Signed document; written answer |
| 3 | Repository runs locally with one command; CI green | Fresh clone test |
| 4 | Extraction works on 50 labelled reports with measured accuracy | Harness output in the repo |
| 5 | Target list of 120 names scored; 100+ outreach messages sent | Tracker |
| 6 | 5 interviews completed, 5 more booked | Notes files |
| 7 | 5 clinical-advisor candidates contacted; 1 in serious conversation | Tracker |
| 8 | 2 incubator applications submitted; incorporation location decided | Confirmation emails; `DECISIONS.md` |

### Week 1 — 20 to 29 November: agree and set up

| Track | Tasks |
|---|---|
| **Both** | - [ ] Read `docs/plan/00` to `13`; list disagreements in `UPDATES.md`; meet once to settle them<br>- [ ] Agree weekly hours and which track each owns<br>- [ ] Draft the founders' agreement (equity, vesting, roles, IP assignment)<br>- [ ] Read the university's IP policy; email the incubator office with the question |
| **Build (A)** | - [ ] Monorepo with `apps/api`, `apps/mobile`, `packages/extraction`; lint, type-check, test in CI<br>- [ ] Docker Compose: PostgreSQL, Redis, Medplum<br>- [ ] Resolve architecture **[Verify]** items: cloud regions, in-region LLM and OCR options, Medplum licence |
| **Business (B)** | - [ ] Start the target list: payers, TPAs, clinic chains, diabetes centres in both markets<br>- [ ] Ask three faculty members and the incubator office for two introductions each<br>- [ ] Shortlist incubators and note deadlines<br>- [ ] Register for a LOINC licence |

### Week 2 — 30 November to 6 December: first evidence

| Track | Tasks |
|---|---|
| **Build (A)** | - [ ] Collect 20+ sample reports (own and family's, names and IDs removed before they leave the phone)<br>- [ ] Extraction spike: OCR plus LLM into a fixed schema; record field accuracy by hand<br>- [ ] Write down what failed and why |
| **Business (B)** | - [ ] Finish and score the 120-name list<br>- [ ] Send the first 50 outreach messages; follow the template in the discovery kit<br>- [ ] Contact 5 clinical-advisor candidates<br>- [ ] Book the first 3 interviews (doctors and patients are fastest) |
| **Both** | - [ ] Sprint review Friday 4 December; update the team board |

### Week 3 — 7 to 13 December: core pieces

| Track | Tasks |
|---|---|
| **Build (A)** | - [ ] `packages/extraction`: schema, range and unit validators, OCR cross-check<br>- [ ] LOINC synonym table for the 15 diabetes markers<br>- [ ] Evaluation harness reading labelled reports and printing accuracy |
| **Business (B)** | - [ ] Run interviews 1–3; write up within an hour; both founders on each call where possible<br>- [ ] Send 50 more messages; one follow-up to non-replies<br>- [ ] Submit the first incubator application |
| **Both** | - [ ] Sign the founders' agreement<br>- [ ] Choose three candidate names; check domains |

### Week 4 — 14 to 19 December: consolidate

| Track | Tasks |
|---|---|
| **Build (A)** | - [ ] Label up to 50 reports; run the harness in CI<br>- [ ] API skeleton: email login codes for testers, profile, versioned consent endpoints with tests |
| **Business (B)** | - [ ] Interviews 4–5; book 5 more for January<br>- [ ] Second incubator application<br>- [ ] First conversation with the strongest advisor candidate about terms<br>- [ ] Decide incorporation location with incubator input |
| **Both** | - [ ] Sprint review Friday 18 December<br>- [ ] First monthly risk review: re-rate R1–R13<br>- [ ] Write a one-page 30-day summary in `UPDATES.md`: what was learned, what changed, what's next |

### What not to do in the first 30 days

- Don't build the partner console, Arabic layout or any screen beyond what the extraction test needs.
- Don't show a demo in discovery interviews.
- Don't collect, store or share anyone's real health records beyond your own families' de-identified sample reports.
- Don't spend money on anything recurring.
- Don't quote prices or statistics from the plan as fact.

## 3. After the planning deliverables

Planning is complete with this document. What follows, in order:

1. Both founders review and confirm the plan (week 1 above).
2. **Start building:** repository structure and MVP backbone, as in Sprint 1 of the build roadmap.
3. Revise the brief, PRD and go-to-market plan after the week-8 discovery decision (31 January 2027).
