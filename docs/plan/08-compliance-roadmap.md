# Deliverable 6: Compliance Roadmap

_Version 1, 2026-11-19._

> **This is a planning map, not legal advice.** It was written from general knowledge without checking current legal texts. Laws, implementing rules and regulator policies in both countries have been changing. Every item marked **[Verify]** must be confirmed by a qualified lawyer in that jurisdiction before you rely on it, and nothing here should be quoted to a partner or regulator as fact.

## 1. Our legal roles

The platform plays two roles at once, and the obligations differ.

| Data | Our role | Who decides how it's used |
|---|---|---|
| Member and claims files a partner sends us | Processor (acting for the partner) | The partner, under a data processing agreement |
| Records a patient uploads or enters | Controller (India: data fiduciary) | Us, under the patient's consent |
| Gap status and aggregates shown to a partner | Controller sharing with a third party, by consent | The patient's consent decides |

**[Verify]** this split with a lawyer in each market; contracts and the privacy notice must match it.

## 2. Regulatory map

### UAE

| Area | Instrument | Why it matters to us | Status |
|---|---|---|---|
| Health data and localisation | Federal Law No. 2 of 2019 on ICT in health fields, and its implementing decisions | Health data to be stored and processed in the UAE, with listed exceptions; consent and retention rules | **[Verify]** current exceptions, retention periods, and whether patient-uploaded data in a non-provider app is in scope |
| Personal data | Federal Decree-Law No. 45 of 2021 (PDPL) | General privacy duties; how it interacts with health-sector law | **[Verify]** status of executive regulations and health carve-outs |
| Free-zone data law | ADGM and DIFC data protection regulations | Apply if we incorporate in those zones (Hub71 companies sit in ADGM) | **[Verify]** once the entity location is chosen |
| Abu Dhabi health security | ADHICS (DoH) | Security standard for entities handling Abu Dhabi health information; partners will ask for it | **[Verify]** whether it binds a vendor directly or through the partner, and what evidence is expected before go-live |
| Dubai health data | DHA health data and information security policies; NABIDH policies | Dubai equivalent | **[Verify]** |
| Digital health licensing | DoH and DHA rules on telehealth and digital health platforms | Whether a non-clinical engagement app needs a licence or approval | **[Verify]**; key question for the regulatory opinion |
| Medical device status | Federal medical-device regulation; emirate policies on AI in healthcare | Whether nudges, explanations or extraction make us a regulated device | **[Verify]**; position paper needed (section 4) |
| Health advertising | Federal and emirate rules on health advertisements | Store listing, website and outreach wording may need approval | **[Verify]** |
| Insurance | Rules governing insurers' use and sharing of member health data | Limits what a payer partner can send us and receive back | **[Verify]**; supports the data firewall |
| Pharmacy | Licensed-pharmacy and prescription rules | Only relevant when refills become real orders | Parked until then |

### India

| Area | Instrument | Why it matters to us | Status |
|---|---|---|---|
| Personal data | Digital Personal Data Protection Act 2023 and its rules | Consent, notice, purpose limitation, breach notification, rights, children's data, cross-border transfer | **[Verify]** which provisions are in force and their dates |
| Existing rules | IT Act and its rules on sensitive personal data | Apply until fully replaced | **[Verify]** |
| Incident reporting | CERT-In directions | Short deadline to report security incidents; log retention | **[Verify]** current deadlines |
| Digital health programme | ABDM policies, including its health data management policy | Bind us once we integrate with ABDM | Applies from sandbox to production |
| Medical device status | Medical Devices Rules and regulator guidance on software | Same question as in the UAE | **[Verify]**; same position paper |
| Telemedicine | Telemedicine Practice Guidelines | Not in scope while we offer no consultations | Revisit in phase 2 |
| Insurance | Insurance regulator's rules on outsourcing and policyholder data | If the partner is an insurer or TPA | **[Verify]** |
| Messaging | Telecom rules on commercial SMS | Sender and template registration | See integration plan |
| E-pharmacy | Drug law as applied to online sale | Only when refills become orders | Parked |

**Data location in India:** general law may allow transfers abroad **[Verify]**, but we keep Indian data in the Indian cell anyway. One rule for every market is simpler to explain and to audit.

## 3. Roadmap by gate

Each gate is a list of things that must be true before the next step. Nothing past a gate starts until its list is complete.

### Gate A — before any real patient data (R1 beta, India). Target: March 2027 **[Assumption]**

- [ ] Company registered (integration plan section 2)
- [ ] Privacy notice and terms of use in plain language, in each interface language, reviewed by a lawyer
- [ ] Consent flow matches the notice; consent records stored with version and timestamp
- [ ] Data inventory: every field collected, why, where stored, how long kept
- [ ] Retention and deletion rules implemented, including account deletion
- [ ] Security baseline in place (architecture section 6); internal security review done
- [ ] Incident response plan with named owner, including regulator and user notification steps
- [ ] Grievance or privacy contact published **[Verify]** what Indian law requires
- [ ] Clinical safety: advisor appointed as clinical safety officer; care-gap rules and every patient-facing template signed off in writing; hazard log started
- [ ] Device-status position paper drafted (section 4)
- [ ] Extraction launch gate passed (PRD M4)
- [ ] Beta participant agreement making clear it is a test product and not medical advice
- [ ] Decision on whether beta results will be published; if yes, ethics review arranged first **[Verify]**

### Gate B — before a UAE pilot with real member data. Target: before pilot go-live, about August 2027 **[Assumption]**

- [ ] UAE legal entity in place
- [ ] **Written regulatory opinion** from a UAE health-regulatory lawyer covering: licence or approval needed, device status, localisation scope, insurer data-sharing limits, WhatsApp use, health advertising
- [ ] UAE cell live in an in-country region; in-region OCR and LLM confirmed or self-hosted
- [ ] ADHICS (or DHA equivalent) gap assessment done; gaps closed or accepted in writing by the partner
- [ ] Data processing agreement and pilot contract signed, stating roles, the data firewall, breach duties, sub-processors and what happens to data at the end
- [ ] Sub-processor list (cloud, messaging, LLM) with location of each
- [ ] External penetration test completed; high-severity findings fixed
- [ ] Partner's security questionnaire answered
- [ ] Arabic privacy notice and consent text reviewed by a native-speaking lawyer
- [ ] Data protection officer named (can be part-time or external) **[Verify]** whether mandatory
- [ ] Privacy impact assessment written for the pilot
- [ ] If the pilot compares an intervention group with a comparison group and results will be published: ethics or research approval route confirmed **[Verify]**
- [ ] Professional indemnity and cyber insurance quoted; bought if the partner requires it

_If the first pilot is in India instead, Gate B is the same list with Indian law substituted and without ADHICS._

### Gate C — before customer #2. Target: about 6 months after the first pilot starts

- [ ] ISO 27001 certification achieved or audit scheduled, with a statement of applicability
- [ ] Second penetration test; fixes verified
- [ ] Vendor risk reviews for all sub-processors
- [ ] Business continuity and restore test evidence
- [ ] Standard contract pack (master agreement, data processing agreement, service levels, security schedule) so each new partner isn't a fresh negotiation

### Gate D — before exchange or national-identity integration (12+ months)

- [ ] ABDM: sandbox milestones complete; functional and security certification passed **[Verify]** steps
- [ ] UAE exchanges and UAE Pass: route confirmed by the regulatory opinion; applications filed
- [ ] ISO 27701 (privacy extension) considered if partners ask for it

### Gate E — before any feature that crosses the clinical safety line

Drug-interaction alerts, risk scores shown to patients, generated explanations, teleconsultation and real pharmacy orders each need a fresh device-status and licensing review before design starts.

## 4. Keeping the MVP outside medical-device regulation

The brief asserts this; here is how to make it defensible.

| Feature | Why it should be low-risk | What would change that |
|---|---|---|
| Storing and displaying records | Record-keeping, no interpretation | Altering or filtering clinical data in a way that drives decisions |
| Trend charts with lab reference ranges | Displays what the lab printed | Our own thresholds or risk labels |
| Template explanations | General education, clinician-approved, same for everyone with that pattern | Personalised interpretation or generated text |
| Care-gap nudges | Reminders of published guideline intervals, with source and "discuss with your doctor" | Telling a patient what their result means for treatment |
| Medication reminders | Timer for what a clinician prescribed | Dose suggestions or missed-dose advice |
| Extraction | Transcription, confirmed by the patient, labelled unverified | Being relied on by clinicians as a verified source |

**Position paper (2–3 pages, founders draft, lawyer and clinical advisor review):** intended use statement, features in and out, the reasoning above mapped to each market's device definition, and the list of triggers that would require re-assessment. Keep it versioned in the repository; partners' compliance teams will ask for it.

## 5. Clinical governance

| Element | What it is | Owner |
|---|---|---|
| Clinical safety officer | A licensed clinician accountable for clinical content | Clinical advisor |
| Hazard log | Each way the product could contribute to harm, with likelihood, severity, control and residual risk | Founders draft, officer approves |
| Content sign-off | Written approval of each rule and template version before release | Officer |
| Change control | Any change to rules, templates or extraction prompts goes through review and the evaluation harness | Founders |
| Incident process | Report, triage within 24 hours, correct, notify, record | Founders and officer |
| Periodic review | Rules checked against guideline updates at least yearly | Officer |

Seed hazards for the log: wrong value extracted and trusted; report saved to the wrong person; nudge sent for a test that isn't appropriate for this patient; missed reminder; patient delays care because the app looked reassuring; misleading translation.

## 6. Documents to produce

| Document | Needed by |
|---|---|
| Privacy notice, terms of use, beta participant agreement | Gate A |
| Data inventory and retention schedule | Gate A |
| Information security policy set (access, encryption, logging, secure development, incident response, backup, vendor management) | Gate A, expanded for C |
| Clinical safety plan and hazard log | Gate A |
| Device-status position paper | Gate A draft, Gate B final |
| Privacy impact assessment | Gate B |
| Data processing agreement template | Gate B |
| Pilot agreement template | Gate B (drafted in the go-to-market deliverable) |
| Sub-processor register | Gate B |
| ISO 27001 statement of applicability and risk register | Gate C |

## 7. Questions for the lawyer

**UAE**
1. Does a patient-facing app that stores patient-uploaded records and sends guideline-based reminders need a licence or approval from DoH, DHA or the federal ministry? Does the answer change if the contracting partner is a licensed facility or insurer?
2. Does the health-data localisation law apply to us for patient-uploaded data, and do any exceptions apply?
3. Is sending images of lab reports to an LLM hosted in a UAE cloud region compliant? What if the provider is foreign-owned?
4. Is our feature set a medical device under federal rules or emirate AI policies?
5. What may an insurer lawfully send us about members, and what may we send back? Is member consent required for each?
6. Is ADHICS binding on us directly, and what evidence is needed before go-live?
7. Can we message patients over WhatsApp if no health details are in the message?
8. Do store listings and outreach messages need health-advertising approval?
9. Which entity location (mainland, ADGM, DIFC, other free zone) best fits a health-data company that will sell to insurers and raise venture funding?
10. Is ethics or research approval needed to publish pilot outcomes?
11. Are referral fees from labs or pharmacies permitted?

**India**
1. Which data protection provisions are in force now, and what must we have in place before the beta?
2. What are our incident-reporting duties and deadlines?
3. Is our feature set a medical device under current rules?
4. What does an insurer or TPA need in order to share member data with us?
5. Does the beta need ethics review if we intend to publish results?
6. What minimum age and verification apply?

## 8. Doing this with no budget

| Need | Low-cost route | Can it wait? |
|---|---|---|
| Company registration | Incubator programmes that include a licence **[Verify]** | No |
| Privacy notice, terms, policies | Founders draft from reputable templates; lawyer reviews | Review needed before Gate A |
| Legal review in India | University legal clinic, incubator legal hours, startup-focused firms offering deferred fees **[Verify]** | Before Gate A |
| UAE regulatory opinion | Incubator legal credits, or a fixed-fee scoped opinion; ask the pilot partner's compliance team to share their view | Must be done before Gate B. This is the one item that needs real money; budget for it from the first grant or pilot fee. |
| Security policies and ISO preparation | Open-source policy templates; track controls in the repository | Start now, certify at Gate C |
| Penetration test | Incubator partner offers, or a scoped test paid from the pilot implementation fee | Before Gate B |
| Clinical safety officer | Clinical advisor on equity or advisory terms | Before Gate A |
| Data protection officer | A founder trained for the role at first, external later **[Verify]** | Before Gate B |
