# Deliverable 5: Integration Plan

_Version 1, 2026-11-19. Connectors for the architecture in [06-architecture.md](06-architecture.md)._
_Onboarding rules for exchanges, identity providers and messaging change often. None were checked against current official pages; every **[Verify]** needs a source before work starts._

## 1. Summary

| # | Connector | Purpose | Release | Depends on a third party? |
|---|---|---|---|---|
| 1 | Patient upload and extraction | Records from any provider | R1 | No |
| 2 | Push notifications and app stores | Reach the patient | R1 | Developer accounts |
| 3 | SMS OTP | Login | R1 | SMS provider, sender registration |
| 4 | Member (eligibility) file | Enrol and match partner members | R2 | Partner |
| 5 | Claims and dispensing file | PDC, gap closure, comparison group | R2 | Partner |
| 6 | Clinic EMR export | Same job as 5 when the pilot partner is a clinic | R2 | Partner and possibly its EMR vendor |
| 7 | WhatsApp and SMS outreach | Invitations and reminders | R2 | Meta business verification, sender rules |
| 8 | Booking and refill handoff | Deep links or call-back request | R2 | Partner provides links or a contact |
| 9 | Console single sign-on | Partner staff login | After pilot | Partner IT |
| 10 | National identity (UAE Pass, ABHA) | Stronger identity, less typing | After pilot | Government onboarding |
| 11 | Lab result feeds | Verified results without upload | After pilot | Lab chains |
| 12 | Health information exchanges | Verified records across providers | 12+ months | Regulator approval |
| 13 | Booking and pharmacy APIs | Real transactions | After first contract | Partners |
| 14 | Devices and health platforms | Home readings | Phase 2 | Platform SDKs |

**Order of work:** 1–3 need nobody's permission, so they come first. 4–8 are built against our own file specification before a partner exists, then adapted. 10 and 12 have long approval queues, so the paperwork starts early even though the build is late.

## 2. Prerequisite: a legal entity

Almost every external account below requires a registered company, not an individual.

| Needed for | Requirement |
|---|---|
| Apple developer account (organisation) | Registered company and a D-U-N-S number **[Verify]** |
| Google Play, health app category | Organisation account and a health-apps declaration **[Verify]** |
| SMS sender registration | Registered business in that country **[Verify]** |
| WhatsApp Business Platform | Meta business verification with company documents |
| Cloud startup credits, incubators | Usually a registered company **[Verify]** |
| Exchange and identity onboarding | Registered entity, often locally licensed |
| Partner contracts and data agreements | A company to sign |

- [ ] Decide where to incorporate first. **Recommendation:** incorporate where the incubator you join requires, since many provide a free or subsidised licence. India is the cheaper default for the R1 beta; a UAE free-zone entity can follow when a UAE pilot is in sight. **[Verify]** with the incubator and a lawyer; structure affects fundraising later.
- [ ] Until then, R1 testing can run through TestFlight and Play internal testing under a personal account, with push only.

## 3. Connector details

### 1. Patient upload and extraction (R1)
| | |
|---|---|
| **Route** | In-app camera, gallery, PDF. Pipeline as in architecture section 4. |
| **Dependencies** | In-region OCR and LLM access; LOINC licence (free registration **[Verify]**); labelled test set of real reports. |
| **Work** | Schema and validators; synonym table for the diabetes marker set first (about 15 tests, each with 5–20 name variants); evaluation harness. |
| **Risk** | Handwritten or low-quality photos. Mitigation: quality check at capture, clear "retake" prompt, manual entry fallback. |

### 2. Push notifications and app stores (R1)
| | |
|---|---|
| **Route** | Firebase Cloud Messaging for Android, Apple Push Notification service for iOS, via Expo. |
| **Dependencies** | Developer accounts; privacy policy and data-safety forms; health-app review rules. |
| **Risk** | Store review delays for health apps. Mitigation: submit an early build to internal testing tracks; keep claims in the store listing modest ("organise and track", not "manage your diabetes"). |

### 3. SMS OTP (R1)
| | |
|---|---|
| **Route** | An SMS provider with local routes in each country, behind the `MessageChannel` interface. |
| **Dependencies** | Sender ID and message template registration. India requires registration of the business and each template with the telecom operators' system; the UAE requires sender ID approval. **[Verify]** current process and lead time for both. |
| **Risk** | Registration takes weeks and needs the legal entity. Mitigation: start on incorporation day; use email OTP for internal testers until approved. |

### 4. Member file (R2)
| | |
|---|---|
| **Route** | CSV through console upload or SFTP, to our specification (section 4). |
| **Dependencies** | Signed data agreement with the partner; a named contact in the partner's data team. |
| **Matching** | Exact match on member ID; the member confirms date of birth in the app. National ID is used only if the partner supplies it and the law allows. Mismatches go to a review queue in the console. |

### 5. Claims and dispensing file (R2)
| | |
|---|---|
| **Route** | Monthly or weekly CSV by SFTP to our specification, plus 12–24 months of history at pilot start for the baseline and comparison group. API later. |
| **What partners have** | In the UAE, claims pass through regulator-run exchanges in standard electronic formats, so insurers and TPAs hold structured data with diagnosis, activity and drug codes. **[Verify]** the current formats and code sets for Abu Dhabi and Dubai, and ask in discovery (script question 13) what they can export. In India, claims are mostly inpatient and less standardised; outpatient pharmacy data is often missing **[Verify]**, so PDC may need pharmacy-partner dispensing data there. |
| **Dependencies** | Data agreement; partner's security review; a mapping from the partner's codes to ours. |
| **Work** | Canonical format and validator first; then one adapter per partner format, written as configuration where possible. |
| **Risk** | The partner's IT queue. Mitigation: accept whatever they can already export and write the adapter ourselves; never ask them to build to our format. |

### 6. Clinic EMR export (R2, if the first partner is a clinic)
| | |
|---|---|
| **Route** | Scheduled export from the clinic's EMR: CSV, or HL7 v2 / FHIR if the vendor supports it. |
| **Dependencies** | Clinic's agreement, and sometimes the EMR vendor's cooperation and fee. |
| **Data** | Patient list with diagnosis, visits, prescriptions, lab orders and results. Results from the clinic's own lab are stored as provider-sourced (verified). |
| **Risk** | Vendor refuses or charges. Mitigation: ask in discovery which EMRs are common and prefer partners on systems with a documented export. |

### 7. WhatsApp and SMS outreach (R2)
| | |
|---|---|
| **Route** | WhatsApp Business Platform through a provider; pre-approved message templates; SMS fallback. |
| **Dependencies** | Meta business verification; template approval; member opt-in recorded by the partner or at onboarding. |
| **Rules** | No health details in the message body; generic prompt plus deep link. **[Verify]** WhatsApp's policy on health-related messaging and the data-residency position with a lawyer before UAE use. |
| **Risk** | Templates rejected or account restricted. Mitigation: keep copy generic; SMS as fallback. |

### 8. Booking and refill handoff (R2)
| | |
|---|---|
| **Route** | Per-tenant configuration: a link to the partner's booking page, a phone number, or a call-back request that lands in the care manager's worklist. |
| **Dependencies** | Partner supplies the links and contact. |
| **Why not APIs yet** | Each provider's booking API is its own project; the handoff proves demand first by counting taps. |

### 9. Console single sign-on (after pilot)
OIDC or SAML to the partner's identity provider. Built when a partner's security team requires it.

### 10. National identity (after pilot; apply early)
| | UAE Pass | ABHA (India) |
|---|---|---|
| **What** | National digital identity login | Health account number under India's national digital health programme |
| **Route** | Service-provider onboarding with the responsible authority **[Verify]** eligibility for private companies and requirements | Through ABDM sandbox, then certification (see 12) |
| **Start paperwork** | When a UAE entity exists | Sandbox registration as soon as the India entity exists |

### 11. Lab result feeds (after pilot)
| | |
|---|---|
| **Route** | Partner API or HL7 v2 result messages from lab chains; in the interim, labs email PDF reports into a per-patient address that feeds the extraction pipeline. |
| **Dependencies** | Commercial agreement with each lab; patient consent per lab. |
| **Value** | Results arrive verified and without patient effort, which raises data quality for payer reports. |

### 12. Health information exchanges (12+ months; start approvals early)

| Exchange | Region | Likely route | Status for us |
|---|---|---|---|
| **ABDM** | India | Open sandbox; integrate as a health information user and personal health record app; pass functional and security certification before production. | Most accessible. Start sandbox work after R1. **[Verify]** current milestones, certification steps and audit cost. |
| **Malaffi** | Abu Dhabi | Built for licensed healthcare facilities and payers. A third-party app likely needs regulator approval or must work through a licensed partner. | **[Verify]** whether a route exists for a patient-facing third-party app. Ask DoH's innovation channel during discovery. |
| **NABIDH** | Dubai | Licensed facilities connect through certified EMR systems. | **[Verify]** as above with DHA. |
| **Riayati** | Northern Emirates | Federal ministry platform. | **[Verify]**; lowest priority. |
| **NPHIES** | Saudi Arabia | National insurance and health exchange platform. | Only relevant on GCC expansion. |

**Practical position:** in the UAE, do not plan the pilot around exchange access. A licensed partner (clinic or payer) that is already connected may be the realistic route to exchange data, and the regulatory opinion in the compliance roadmap should cover this.

### 13. Booking and pharmacy APIs (after first contract)
Direct integration with partner clinics' scheduling and partner pharmacies' ordering. Pharmacy fulfilment only through licensed pharmacies against valid prescriptions; commissions parked pending legal advice (review item 12).

### 14. Devices and health platforms (phase 2)
Apple HealthKit and Android Health Connect first, since they cover most connected glucometers and BP cuffs without per-device work. Readings are stored as device-sourced with their own provenance code.

## 4. Our canonical file formats (R2)

UTF-8 CSV, header row, one file per type, dates as `YYYY-MM-DD`. Partners who can't produce this send what they have and we map it.

**Member file**

| Field | Required | Notes |
|---|---|---|
| `member_id` | Yes | Partner's unique ID |
| `first_name`, `last_name` | Yes | |
| `date_of_birth` | Yes | Used for linking confirmation |
| `sex` | No | |
| `mobile` | Yes | With country code |
| `language` | No | Default from tenant |
| `plan_code` | No | For segment reports |
| `coverage_start`, `coverage_end` | Yes | Drives membership open/close |
| `programme_flag` | Yes | `diabetes` for the pilot |
| `cohort` | No | `intervention` or `comparison` |

**Claims file**

| Field | Required | Notes |
|---|---|---|
| `claim_id`, `line_id` | Yes | For de-duplication |
| `member_id` | Yes | |
| `service_date` | Yes | |
| `provider_id`, `provider_name`, `provider_type` | Yes | Clinic, hospital, lab, pharmacy |
| `encounter_type` | Yes | Outpatient, emergency, inpatient |
| `diagnosis_codes` | Yes | ICD-10, separated by `;` |
| `activity_code`, `activity_code_system` | Yes | Procedure, test or drug code and which code list |
| `quantity` | For drugs | |
| `days_supply` | For drugs | If absent, derived from quantity and a default dose table, and flagged as estimated |
| `net_amount` | No | Only if the partner wants cost reporting |

## 5. Timeline

Month 0 is November 2026. Dates assume part-time founders and are **[Assumption]** until the build roadmap.

| Month | Build | Paperwork and approvals |
|---|---|---|
| 0–1 | Upload pipeline prototype; evaluation set collection starts | Choose incubator; start incorporation; register for LOINC |
| 2–3 | Extraction to launch gate; push notifications; email OTP for testers | Developer accounts; SMS sender and template registration (India) |
| 4–5 | R1 beta live in India; canonical file formats and validators | ABDM sandbox registration; ask UAE regulators about exchange routes |
| 6–7 | Member and claims ingestion against synthetic files; PDC; projection builder | Meta business verification; WhatsApp templates; UAE entity if a pilot is in sight |
| 8–9 | Partner-specific adapter; handoff links; pilot go-live | Partner data agreement and security review; UAE SMS sender ID |
| 10–15 | Lab feed with one lab chain; ABDM integration and certification | UAE Pass application; exchange applications as advised |
| 15+ | Booking and pharmacy APIs; devices; UAE exchanges if a route exists | |

## 6. Integration risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| No legal entity when accounts are needed | High now | Incorporate in month 0–1; test tracks and email OTP meanwhile |
| Partner can't export claims in time | Medium | Accept any existing export; start with history file; pilot can begin on member file plus uploads and add claims in month 2 |
| Indian claims lack pharmacy data | High | Use pharmacy-partner dispensing or clinic prescriptions for PDC; say so in the outcome report |
| UAE exchange access not available to us | High | Don't depend on it; pursue through a licensed partner |
| WhatsApp restrictions on health messaging | Medium | Generic templates; SMS fallback |
| In-region LLM unavailable in a market | Medium | Self-hosted model in that cell |
| Each partner wants a custom integration | High | Adapters as configuration; implementation fee covers mapping; no changes to core |
