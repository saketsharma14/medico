# Medico — Team Instructions for Claude

This file is read automatically by Claude Code at the start of every session.
Two developers work on this repo, each with their own Claude. These rules apply to both.

## 1. Always start from the latest code
- At the start of every session (and before starting any new task), run:
  `git pull --rebase origin main`
  A SessionStart hook in `.claude/settings.json` also does a fetch + fast-forward pull automatically; if it reports a problem (local changes, diverged branch), resolve it before working.
- Before every push, pull again (`git pull --rebase origin main`) so you never overwrite your teammate's work.

## 2. Read the team board before working
Before doing any task, read these files so you know the current state:
- `docs/team/GOALS.md` — what we are building and the current milestones
- `docs/team/TODO.md` — the shared task list (who is doing what)
- `docs/team/UPDATES.md` — log of what each person has done recently
- `docs/team/DECISIONS.md` — technical decisions already agreed on (don't re-litigate these)

### Project plan
The business and product plan lives in `docs/plan/`. Read these before giving product, architecture or strategy advice:
- `00-brief.md` — founding brief, including the advisor role Claude should take and the formatting rules ([Assumption] / [Verify] tags)
- `01-brief-review.md` — amendments that override the brief
- `02-founder-inputs.md` — team, budget, markets, contacts
- `03-...` onward — planning deliverables, produced one at a time with founder go-ahead between each

## 3. Keep the team board updated
Whenever you finish (or start) meaningful work:
- `TODO.md`: move tasks between sections, put the owner's name on what you are working on, mark done items `[x]`.
- `UPDATES.md`: add a new entry at the **top** with date, author, and a short summary of what changed.
- `GOALS.md`: update only if goals/milestones actually changed.
- `DECISIONS.md`: add an entry when a technical choice is made (stack, library, structure, API shape...).
Commit these doc changes together with the code they describe.

## 4. Commits and pushes — NO Claude mentions
- Never mention Claude, Claude Code, Anthropic or AI in commit messages, PR titles/descriptions, or code comments.
- Never add `Co-Authored-By: Claude ...` lines or "Generated with Claude Code" footers.
- (Attribution is also disabled in `.claude/settings.json`.)
- Write normal, descriptive commit messages, e.g. `Add patient search endpoint`.

## 5. Working together without conflicts
- Default branch is `main`. For larger features, use a branch `<name>/<feature>` and open a PR; small changes can go straight to `main` after pulling.
- Claim a task in `TODO.md` (and push that change) before starting it, so both people don't do the same thing.
- If a pull causes a merge conflict in the `docs/team/` files, keep both people's entries.

## Team
- Saket (GitHub: saketsharma14)
- Friend — add your name and GitHub username here on your first session
