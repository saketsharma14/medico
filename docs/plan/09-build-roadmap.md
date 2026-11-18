# Deliverable 7: Build Roadmap

_Version 1, 2026-11-19. Covers November 2026 to May 2028 (18 months)._

## 1. Planning assumptions

| Assumption | Value |
|---|---|
| Team | Two technical founders. "Founder A" and "Founder B" below; assign names in the team board. |
| Time available | About 20 hours each per week during term, less around exams **[Assumption]**. Adjust every date here if the real figure differs. |
| Budget | None until a grant, credits or pilot fee arrives |
| Sprint length | Two weeks, starting Monday 23 November 2026 |
| Method | One founder owns each track per sprint; Friday review (30 minutes) updates the team board |

All dates are **[Assumption]**. The plan has two fixed points that everything else moves around: the **week-8 discovery decision** and **Gate A** (no real patient data before it).

## 2. Phases at a glance

| Phase | Dates | Goal | Exit milestone |
|---|---|---|---|
| **0. Foundations and discovery** | Nov 2026 – Jan 2027 | Know the problem is real; have a working extraction spike; have a company, an advisor and an incubator | Discovery summary and first-buyer decision |
| **1. R1 build** | Dec 2026 – Mar 2027 | Patient app that meets the extraction launch gate | Gate A passed |
| **2. R1 beta** | Apr – Jun 2027 | 50–100 real users in India; retention and accuracy data | Beta report; design partner signed |
| **3. R2 build** | May – Aug 2027 | Console, ingestion, firewall, Arabic, second cell | Gate B passed |
| **4. Pilot** | Sep 2027 – Feb 2028 | 500–1,000 members, 6 months, comparison group | Outcome report accepted by the partner |
| **5. Scale** | Mar – May 2028 | Convert pilot to contract; sell customer #2; raise seed | Signed contract; ISO audit scheduled |

Phases 1 and 0 overlap deliberately: building the upload pipeline needs no customer input and produces the demo for week-7 follow-up calls.

## 3. Milestones

| # | Milestone | Target | Evidence |
|---|---|---|---|
| M1 | Repository, CI and local environment working | 6 Dec 2026 | A new clone runs with one command |
| M2 | Extraction spike on 20 reports | 6 Dec 2026 | Accuracy numbers in the repo |
| M3 | 10 interviews done; clinical advisor in conversation | 3 Jan 2027 | Notes in `docs/discovery/notes/` |
| M4 | Upload-to-timeline works end to end on a phone | 17 Jan 2027 | Screen recording |
| M5 | Discovery summary and first-buyer decision | 31 Jan 2027 | `docs/discovery/summary.md`; brief amended if needed |
| M6 | Full R1 feature set on synthetic data; demo ready | 14 Feb 2027 | Demo shown to top prospects |
| M7 | Company registered; incubator joined; advisor signed | 28 Feb 2027 | Documents |
| M8 | Extraction launch gate met (200 reports, 15 labs) | 21 Mar 2027 | Evaluation report |
| M9 | **Gate A passed** | 31 Mar 2027 | Checklist in compliance roadmap |
| M10 | Beta open; first 20 users | 15 Apr 2027 | Analytics |
| M11 | 50+ users with 30-day retention measured | 15 Jun 2027 | Beta report |
| M12 | Design partner signs pilot agreement | 30 Jun 2027 | Signed agreement |
| M13 | Console and ingestion working on synthetic partner data | 31 Jul 2027 | Demo to partner |
| M14 | **Gate B passed**; pilot cell live | 31 Aug 2027 | Checklist; penetration test report |
| M15 | Pilot go-live; first members invited | 15 Sep 2027 | Activation numbers |
| M16 | Mid-pilot review with partner | 15 Dec 2027 | Interim report |
| M17 | Pilot outcome report | 15 Mar 2028 | Report accepted |
| M18 | Contract signed; customer #2 in negotiation; seed round opened | 31 May 2028 | Documents |

## 4. First three months, sprint by sprint

Two tracks run in parallel. Swap owners each sprint if you both want both skills; never leave a track unowned.

### Sprint 1 — 23 Nov to 6 Dec 2026: set up and spike

| Track | Tasks | Done when |
|---|---|---|
| **Build** | Monorepo (pnpm workspaces) with `apps/api`, `apps/mobile`, `packages/extraction`; lint, type-check and test in CI; Docker Compose with PostgreSQL, Redis and Medplum; extraction spike: run 20 reports through OCR and an LLM with a fixed output schema, record accuracy by hand | `pnpm dev` starts everything locally; spike results committed |
| **Business** | Build and score the 120-name target list; ask faculty and incubator office for introductions; send first 50 messages; shortlist incubators and 5 clinical-advisor candidates; start collecting sample reports (own family's, names removed) | List in the tracker; 3 interviews booked |

### Sprint 2 — 7 to 20 Dec: extraction core and API skeleton

| Track | Tasks | Done when |
|---|---|---|
| **Build** | `packages/extraction`: schema, validators (range, unit, date), OCR cross-check, LOINC synonym table for the 15 diabetes markers, evaluation harness with 50 labelled reports; API: email OTP for testers, profile, consent endpoints with versioning | Harness runs in CI and prints accuracy; consent API has tests |
| **Business** | First 5 interviews (doctors and patients first); refine scripts; apply to 2 incubators; first conversations with advisor candidates | 5 note files; applications sent |

### Sprint 3 — 21 Dec to 3 Jan 2027: app shell and clinical store (light sprint, holidays and exams)

| Track | Tasks | Done when |
|---|---|---|
| **Build** | Mobile app shell: onboarding, consent, language switch, upload screen; signed-link upload to local object storage; `ClinicalRepository` interface with Medplum adapter; decide Medplum yes/no from real experience | A photo taken on a phone lands in storage and queues a job |
| **Business** | Interviews 6–10; start payer outreach through doctor introductions | Milestone M3 |

### Sprint 4 — 4 to 17 Jan: review and timeline

| Track | Tasks | Done when |
|---|---|---|
| **Build** | Review screen with confidence flags and forced confirmation; save DocumentReference, DiagnosticReport, Observations and Provenance; timeline with provenance labels; duplicate detection; evaluation set to 100 reports | Milestone M4 |
| **Business** | Interviews 11–18; start incorporation; design clickable console mock-up in a design tool (not code) | Mock-up ready for week-7 calls |

### Sprint 5 — 18 to 31 Jan: trends, medications, discovery decision

| Track | Tasks | Done when |
|---|---|---|
| **Build** | Trend charts with reference ranges; template engine with draft explanations for advisor review; medication list with on-device reminders and dose log | Charts and reminders work offline on Android |
| **Business** | Interviews to 25+; write discovery summary; score assumptions against pass/fail rules; decide first buyer | Milestone M5 |

### Sprint 6 — 1 to 14 Feb: care gaps and demo

| Track | Tasks | Done when |
|---|---|---|
| **Build** | Care-gap engine with versioned rule set v0; nudges with source citation; notification limits and quiet hours; synthetic data generator; end-to-end demo script | Milestone M6 |
| **Business** | Follow-up calls with top prospects using the app demo and console mock-up; send interviewees the promised summary; advisor terms agreed | 2+ organisations agree to a pilot conversation |

## 5. Months 4 to 18

### Phase 1 close-out — 15 Feb to 31 Mar 2027

- [ ] Hindi interface; one-page summary PDF; manual home readings; account export and deletion
- [ ] Evaluation set to 200 reports from 15 labs; tune until the launch gate is met
- [ ] India cell deployed with infrastructure as code; backups and alerts
- [ ] Phone OTP once sender registration clears
- [ ] Advisor signs off rules and templates; hazard log; privacy notice and terms reviewed
- [ ] Internal security review; Gate A checklist

### Phase 2 — R1 beta, Apr to Jun 2027

- [ ] Recruit through interviewed doctors, family and community; 20 users, then 50, then 100
- [ ] Weekly: review analytics, call 5 users, fix the top friction point
- [ ] Review every unmapped test name and every corrected field; grow the synonym table
- [ ] Negotiate the pilot: scope, metrics, comparison group, data agreement, fee
- [ ] Beta report: activation, uploads, extraction acceptance, 30-day retention

### Phase 3 — R2 build, May to Aug 2027

| Month | Build | Other |
|---|---|---|
| May | Tenancy, memberships, row-level security; console shell with login and MFA; member import and invitations | Apply for grants and cloud credits using beta data |
| Jun | Claims ingestion with validator; PDC; projection builder and firewall tests | Pilot agreement signed |
| Jul | Worklist, outreach log, dashboard, outcome report; tenant theming and protocol configuration | Partner file mapping; regulatory opinion commissioned |
| Aug | Arabic and right-to-left; WhatsApp and SMS outreach; second cell deployed; penetration test and fixes | Gate B checklist; care-manager training |

### Phase 4 — Pilot, Sep 2027 to Feb 2028

- [ ] Staged invitation: 100 members, then the rest after two weeks without serious issues
- [ ] Weekly call with the partner's care team; monthly numbers; one improvement release every two weeks
- [ ] No new features unless they move a pilot metric
- [ ] Month 3: interim report; start conversations with customer #2 using it
- [ ] In parallel from month 2: ISO 27001 preparation; ABDM sandbox work; pre-seed fundraising
- [ ] Month 6: outcome report with comparison group; case study with partner approval

### Phase 5 — Scale, Mar to May 2028

- [ ] Convert the pilot to an annual contract; add hypertension and lipids for the same partner
- [ ] Standard contract pack; implementation playbook so partner #2 takes weeks, not months
- [ ] ISO 27001 audit; first lab feed; embeddable module or separate store listing if a partner pays for it
- [ ] Seed round on the back of pilot results

## 6. Team needs by phase

| Phase | Founders do | Add | How to afford it |
|---|---|---|---|
| 0–1 | Everything: build, interviews, incorporation | Clinical advisor (a few hours a month); 1–2 mentors with payer or health-tech experience | Advisory equity, typically a fraction of a percent to about 1% vesting over two years **[Verify]** norms with the incubator |
| 2 | Build, beta support, pilot sales | Part-time designer for the app and console; native Arabic reviewer; legal review | Freelance from first grant; university talent |
| 3 | Core build | Commercial lead or co-founder with payer sales experience, if discovery shows founders can't close alone; one contract mobile or full-stack engineer if behind | Pre-seed or pilot implementation fee |
| 4 | Product and partner relationship | Customer success / clinical operations person (nurse background ideal) to work with care managers; part-time security and compliance help for ISO | Pilot fee and pre-seed |
| 5 | Product, fundraising | 2 engineers, 1 implementation lead, clinical lead moving from advisor toward part-time | Seed |

**Outsource:** legal, penetration testing, ISO audit, translation review, brand design. **Never outsource:** extraction pipeline, care-gap engine, data firewall, partner relationships.

**The gap to close first is the clinical advisor.** Gate A can't be passed without one, and they open doors to payers.

## 7. If you fall behind

Cut in this order; do not cut anything below the line.

1. Hindi interface (ship English first)
2. One-page summary PDF
3. Manual home readings
4. iOS for the beta (Android only)
5. Medication reminders in R1 (move to R2)
6. Trend explanations (ship charts with reference ranges only)

---
**Never cut:** extraction safety checks and launch gate, consent and deletion, provenance, clinical sign-off, the data firewall, security baseline.

## 8. Decision checkpoints

| When | Question | If no |
|---|---|---|
| 31 Jan 2027 | Do payers or clinics confirm the problem and a route to a pilot? | Change first buyer, or stop and rethink before building R2 |
| 21 Mar 2027 | Does extraction meet the launch gate? | Narrow to the reports it handles well (typed PDFs, top labs) and keep manual entry for the rest |
| 15 Jun 2027 | Do beta users come back (30-day retention near 40%)? | Fix engagement before any pilot; a pilot with a leaky app wastes the partner |
| 30 Jun 2027 | Is a design partner signed? | Keep the beta running, extend discovery to the other market or segment; don't build R2 on speculation beyond ingestion basics |
| 15 Dec 2027 | Is activation of invited members near 30%? | Add human outreach and incentives with the partner immediately |
| 15 Mar 2028 | Did care gaps close faster than in the comparison group? | Publish honestly, learn why, and decide whether to iterate or change the model |

## 9. Working agreements

- `main` is always deployable; feature branches named `<name>/<feature>`; the other founder reviews every pull request touching extraction, care rules, consent or the firewall.
- Tests are required for validators, rule evaluation, consent and tenancy. Demo-only screens can ship without them.
- Every sprint ends with the team board updated: `TODO.md`, `UPDATES.md`, and `DECISIONS.md` if something was decided.
- Real patient data never appears in the repository, issues, chat or screenshots.
