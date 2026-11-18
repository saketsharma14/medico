# Deliverable 9: Financial Model Structure

_Version 1, 2026-11-19. This is the design for a spreadsheet, plus fundraising milestones. It is not a forecast._

> **Every number in this document is a placeholder.** I chose them to show how the model works. None comes from a quote, a benchmark or a customer. Replace each one with a real figure from discovery, a supplier quote or your own data before showing the model to anyone.

## 1. What the model must answer

1. How much cash do we need to reach the first pilot, and where does it come from?
2. What is one partner worth, and how long until it pays back what it cost to win and set up?
3. How many partners and activated members do we need to reach break-even?
4. How much should we raise at pre-seed and seed, and what does each round buy?

## 2. Spreadsheet layout

One workbook, monthly columns from November 2026 to December 2029. Blue cells are inputs; everything else is a formula. No number is typed into a formula.

| Tab | Purpose | Key contents |
|---|---|---|
| **1. Inputs** | Every assumption in one place | Prices, activation, churn, sales cycle, unit costs, salaries, exchange rates; a source and a confidence level beside each |
| **2. Pipeline** | Partner timeline | One row per partner (real or planned): segment, country, signature month, go-live month, eligible members, pilot or contract |
| **3. Members** | Activated members by month | Per partner: eligible × activation curve − churn |
| **4. Revenue** | Revenue by stream and month | Platform fees, implementation, pilot fees, add-ons, grants shown separately |
| **5. Variable costs** | Cost that scales with members | Cloud, LLM and OCR, messaging, support, payment of any outreach staff |
| **6. People** | Headcount plan | Role, start month, monthly cost, country; founders' pay from a chosen month |
| **7. Fixed costs** | Everything else | Legal, compliance, security, tools, insurance, travel, entity fees |
| **8. Cash** | Monthly cash flow and runway | Opening cash + receipts − payments; funding events; months of runway |
| **9. Unit economics** | Per-partner and per-member view | Gross margin, acquisition cost, payback, lifetime value |
| **10. Scenarios** | Slow, base, fast | Switch that swaps a small set of inputs |
| **11. Summary** | One page for investors | Charts of members, revenue, burn, runway; key metrics table |

## 3. Revenue drivers

| Driver | Formula | Inputs to validate |
|---|---|---|
| Partners live | From the Pipeline tab | Sales cycle length; win rate from proposal to signature |
| Eligible members per partner | Input per partner | Size of the diabetic population the partner enrols |
| Activated members | Eligible × activation rate, reached along a curve over about 4 months, less monthly churn | Activation rate; churn (members leaving the partner or the app) |
| Platform revenue | Activated members × fee per member per month, or the monthly minimum if higher | Price; minimum |
| Implementation revenue | One-off in the go-live month | Fee |
| Pilot revenue | Fixed fee, split across signature and interim report | Fee |
| Expansion | Extra conditions × uptake × add-on price; outreach service × members covered | From year two |
| Outcome bonus | Base fee × bonus rate × probability of hitting targets | From year two; keep at zero in the base case |
| Grants and prizes | Listed by month, shown below the revenue line | Not counted as revenue |

Revenue recognition for the model: platform fees monthly as billed; implementation and pilot fees in the month invoiced. An accountant decides the formal treatment later.

## 4. Cost lines

### Variable (per activated member per month)

| Line | Driver | Placeholder |
|---|---|---|
| Cloud hosting | Members, plus a fixed base per cell | USD 0.15 |
| OCR and LLM extraction | Uploads per member × cost per page | USD 0.06 |
| SMS and WhatsApp | Messages per member × unit price by country | USD 0.24 |
| Support | Tickets per member × time per ticket | USD 0.30 |
| **Total** | | **USD 0.75** |
| Human outreach (only if we provide it) | Members per care coordinator | Priced as an add-on, modelled separately |

### People

| Role | Earliest month | Notes |
|---|---|---|
| Two founders | Unpaid until pre-seed; modest pay after | Input the month and amount |
| Clinical advisor | Now | Equity only at first |
| Designer, Arabic reviewer | Beta | Freelance, fixed fee |
| Commercial lead | Before or during pilot | Salary plus commission, or co-founder equity |
| Customer success / clinical operations | Pilot | One per 2–3 partners at first |
| Engineers | After pre-seed | Compare India-based and UAE-based cost in Inputs |
| Compliance and security (part-time) | Before ISO audit | Contract |

### Fixed and one-off

| Line | When | Type |
|---|---|---|
| Company formation and annual licence, per country | Months 1–3; UAE before pilot | One-off + annual |
| Legal: privacy notice and terms review | Gate A | One-off |
| Legal: UAE regulatory opinion | Gate B | One-off |
| Contracts (pilot agreement, data agreement) | Gate B | One-off |
| Penetration test | Gate B, then yearly | Recurring |
| ISO 27001 preparation and audit | Gate C | One-off + yearly surveillance |
| Insurance (professional indemnity, cyber) | Pilot | Annual |
| App store accounts, domain, email, tools | Now | Small, recurring |
| Travel and events | Discovery and sales | Variable |
| Accounting and company secretarial | From incorporation | Monthly |
| ABDM and other certification audits | Phase 5 | One-off |

## 5. Unit economics

### Definitions

| Metric | Formula |
|---|---|
| Revenue per activated member per month | Platform revenue ÷ activated members |
| Gross margin | (Revenue − variable costs) ÷ revenue |
| Partner acquisition cost | Sales and marketing spend, including the share of founder and advisor time, legal and travel, in the period ÷ partners signed in the period |
| Implementation margin | Implementation fee − cost of set-up hours |
| Payback period | Acquisition cost ÷ monthly gross profit from that partner at steady state, plus the months of ramp |
| Partner lifetime value | Monthly gross profit × expected lifetime in months |
| Net revenue retention | This year's revenue from last year's partners ÷ last year's revenue from them |
| Burn multiple | Net cash burned ÷ net new annual recurring revenue |
| Runway | Cash ÷ average monthly net burn |

### Worked example (placeholders only)

One UAE payer partner at steady state:

| Line | Base case | Slow case |
|---|---|---|
| Eligible diabetic members | 10,000 | 10,000 |
| Activation rate | 30% | 15% |
| Activated members | 3,000 | 1,500 |
| Fee per activated member per month | USD 6.00 | USD 4.00 |
| Monthly platform revenue | USD 18,000 | USD 6,000 |
| Annual platform revenue | USD 216,000 | USD 72,000 |
| Variable cost per member per month | USD 0.75 | USD 0.75 |
| Gross margin | 87.5% | 81.3% |
| Monthly gross profit | USD 15,750 | USD 4,875 |
| Acquisition cost for this partner | USD 30,000 | USD 30,000 |
| Payback at steady state | 1.9 months | 6.2 months |

Read this with care:
- Payback looks short because it ignores the **9–18 month sales cycle** and the **4-month activation ramp** before steady state. The Cash tab is what shows the real strain: you fund the team for a year or more before a partner pays.
- The result is driven almost entirely by **activation rate, price and eligible members**. Halving activation and cutting price by a third reduces revenue by two thirds. Those are the inputs to validate first.
- A clinic-chain partner in India is likely an order of magnitude smaller. Model it as evidence and reference value, not as a profit centre.

### Sensitivities to build into the Scenarios tab

| Input | Slow | Base | Fast |
|---|---|---|---|
| Activation rate | 15% | 30% | 45% |
| Fee per member per month (UAE payer) | USD 4 | USD 6 | USD 9 |
| Sales cycle, first meeting to go-live | 15 months | 10 months | 6 months |
| Pilot-to-contract conversion | 33% | 60% | 80% |
| Partners signed per year after the first | 1 | 3 | 5 |
| Annual partner churn | 25% | 10% | 5% |

## 6. Cash path to the first pilot with no money

The model's first job is to show you can reach a signed pilot without spending cash you don't have.

| Phase | Unavoidable spend | Covered by |
|---|---|---|
| Now to Gate A (Mar 2027) | Company formation, app store accounts, domain, small SMS costs, legal review of privacy notice | Incubator licence and legal hours, cloud credits, university support, personal funds for small items **[Verify]** what each programme covers |
| Beta (Apr–Jun 2027) | Messaging, freelance design | Grants, prizes, cloud credits |
| R2 build to Gate B (Jul–Aug 2027) | UAE entity, regulatory opinion, penetration test, contracts | Pilot fee (first half at signature), grant, or a small pre-seed |
| Pilot (Sep 2027–Feb 2028) | Hosting, messaging, insurance, first hire | Pilot fee (second half), pre-seed |

- [ ] Get a written quote for each Gate B item before negotiating the pilot fee, so the fee at signature covers them.
- [ ] List every grant, competition and credit programme you qualify for, with deadlines, in the Inputs tab. **[Verify]** eligibility for student teams.
- [ ] Rule: no recurring cost is added until a funding source for six months of it is in the bank.

## 7. Fundraising milestones

Round sizes and terms below are rough placeholders. Check current norms with your incubator and two or three founders who raised recently in each market.

| Stage | When | What you must have proved | Typical sources | Use of funds |
|---|---|---|---|---|
| **Non-dilutive** | Now – mid 2027 | A credible team, a clear problem, a working demo | University and government grants, competitions, incubator stipends, cloud credits | Entity, legal basics, beta costs |
| **Pre-seed** | Mid 2027, at or just after pilot signature | (1) Discovery evidence: the problem and budget exist. (2) Working product: extraction at the launch gate. (3) Beta retention near target. (4) A signed, paid pilot. (5) Clinical advisor and compliance plan. | Angels (doctors, insurance and health-tech executives), incubator funds, early-stage health-tech investors | 12–18 months of runway: founders full-time, commercial lead, one engineer, Gate B and ISO costs |
| **Seed** | Mid 2028, after the outcome report | (1) Pilot outcomes versus comparison group. (2) Pilot converted to an annual contract. (3) Customer #2 signed or at contract stage. (4) Implementation repeatable in weeks. (5) Unit economics from real data. (6) ISO 27001 achieved or scheduled. | Regional and health-focused venture funds | Team of 8–12, second market at scale, more conditions, exchange integrations |
| **Series A** | 2029+ | Several payer contracts renewing, net revenue retention above 100%, a second country live | Venture funds | Regional expansion |

### Round sizing method

Size each round from the model, not from a headline:

1. Take monthly net burn from the Cash tab for the plan the round funds.
2. Multiply by 18 months (time to hit the next milestones, plus 6 months to raise again).
3. Add one-off costs in that period.
4. Add 20% contingency.

### Hygiene before any raise

- [ ] Founders' agreement signed: equity split, four-year vesting with a one-year cliff, roles, what happens if one leaves
- [ ] All code and content assigned to the company in writing, including anything written before incorporation
- [ ] Check the university's policy on intellectual property created by students **[Verify]**
- [ ] Advisor agreements with vesting
- [ ] An option pool planned for early hires
- [ ] Entity structure that investors in your target market can invest in; ask the incubator and a lawyer before incorporating **[Verify]**
- [ ] A simple cap table kept up to date
- [ ] Clean books from day one

## 8. Metrics to report monthly

| Group | Metrics |
|---|---|
| Growth | Partners live; eligible members; activated members; monthly recurring revenue |
| Product | Activation rate; 30- and 90-day retention; uploads per member; care gaps closed |
| Efficiency | Gross margin; variable cost per member; implementation time per partner |
| Sales | Pipeline by stage; sales cycle length; pilot-to-contract conversion |
| Cash | Net burn; cash; runway in months |

## 9. Building it

- [ ] Build the workbook in a shared spreadsheet so both founders edit one copy; keep a dated export in the repository under `docs/finance/`.
- [ ] Start with tabs 1, 2, 3, 4 and 8. Add the rest when there is real data to put in them.
- [ ] After discovery, replace placeholders with interview figures and mark each input's confidence.
- [ ] Re-run the scenarios before every pricing conversation and every fundraising conversation.
