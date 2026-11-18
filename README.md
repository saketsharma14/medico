# Medico

White-label chronic-care platform: one timeline for a patient's scattered records, reminders for tests and prescribed medication, and outcome reporting for the organisation that pays. First condition: type 2 diabetes.

- Plan: [`docs/plan/`](docs/plan/) (start with its README)
- Team board: [`docs/team/`](docs/team/) — goals, to-do list, updates log, decisions

## Getting started

Requires Node 22 or later and pnpm 10.

```bash
git clone https://github.com/saketsharma14/medico.git
cd medico
pnpm install
pnpm check        # lint, type-check and tests
pnpm dev          # API on http://localhost:3000 (try /health)
```

Local PostgreSQL and Redis (needs Docker; not required for the checks above):

```bash
pnpm services:up
```

Open the folder in Claude Code and it reads `CLAUDE.md` and pulls the latest code at session start.

## Layout

| Path | What | Status |
|---|---|---|
| `apps/api` | NestJS API (modular monolith) | Skeleton with a health endpoint |
| `apps/mobile` | Patient app (React Native, Expo) | Not started (Sprint 3) |
| `packages/extraction` | Lab-report extraction: schema, test-name and unit normalisation, safety checks | Core logic and tests; no OCR or model calls yet |
| `infra` | Infrastructure as code | Not started |
| `docs` | Plan, team board, discovery notes | |

## Rules that are easy to break

- **No real patient data in this repository**, in issues, or in tests. Use synthetic data. `samples/` is git-ignored for local report files.
- **No health values or identifiers in logs.** `console` is banned by the linter; use the logger.
- The marker catalogue in `packages/extraction/src/markers.ts` (codes, conversions, bounds) is **not clinically reviewed**. It must be signed off before any real patient uses the product.
