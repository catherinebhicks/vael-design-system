# Narrative spec — Vael case study (two-phase, spine-driven)

The governing decisions for the Vael case-study narrative. Supersedes the earlier single-phase
reconciliation spec. Everything in `../landing/copy-deck.md`, the prose cuts (`deep-dive.md`, `medium.md`,
`short.md`), `../landing/DESIGN.md`, and `../landing/SPEC.md` inherits from this.

Status: first narrative pass complete (deep-dive master + medium + short + copy-deck beats +
DESIGN/SPEC + README). **Second-life extension in progress (2026-07-17):** adding Movement 3 + four
satellite pieces + the phase-2 facts; `case-study/` now split into `narrative/` (the story) +
`landing/` (the site build). Landing page itself = separate build, later. Not launching yet.

## The spine (the whole piece serves this)

> AI collapses the cost of production → so judgment and ownership become the whole job → and the
> rescue proves it.

A story told in **movements**, not a parts tour: setup → reframe → one rising "where the leverage
lived" movement → the judgment turn → shelved (the turn) → rebuilt in the open (the rescue = proof)
→ **the method became how I run it (Movement 3)** → landing. Each beat hands off to the next.

**Movement 3 thesis (the hub the four satellite pieces reinforce):**

> The rescue proved the **system** was real. What came next proved the **method** was — the same
> human-in-the-loop pairing that built the components turned out to run the entire practice around
> them: the design tool, the craft, the upkeep, and the door I left open for whoever picks it up
> next. It stopped being *"how I built a design system with AI"* and became *"how I run one."*

**The four beats inside Movement 3** (one paragraph each in the deep-dive; each hands off to its
standalone piece under `pieces/`):

1. **Design and code stopped being two jobs** — Vael brought into Figma with AI, code↔design kept
   in lockstep via a gated round-trip. → `pieces/01-design-and-code.md`
2. **Governance I could actually hold** — a real rulebook (a strong, designed discipline — *not*
   "lightweight because solo"); the hard part solo is *enforcing* without drift, which is the pair's
   job. → `pieces/02-the-rulebook.md`
3. **The taste compounded** — 27 → 44 → 103, but the move was discipline (Blueprint, single
   typeface), not just growth. → `pieces/03-taste-compounded.md`
4. **Built to be picked up** — shown → portable → teachable. → `pieces/04-built-to-be-picked-up.md`

**Format split (deliberate):** the landing page renders the spine as **beats with momentum**
(scannable, the format a site wants); the prose cuts render it as the **flowing narrative** (where
full cohesion lives). One spine, two expressions.

## Origin framing (canonical anchor)

> It began as a design system for a bioscience startup — built with AI as my pair, to production
> standards, in a six-week Shape Up cycle. When priorities shifted and it was shelved, I didn't want
> good work to die in a backlog. So I carried it forward on my own: rebuilt it clean, in the open,
> and took it further.

**Two chapters:** *built for a startup* (production, taken to a scoped handoff) → *shelved* →
*carried forward solo* (rebuilt in the open as a live, documented library).

**Motive correction (the key fix):** phase 2 is NOT "an experiment in how far AI can go" — that
question was already answered in phase 1. Phase 2's real motive is **rescue + initiative**: good
work got shelved and she refused to let it die, so she rebuilt it in the open. The AI-as-method
thesis lives in phase 1; the range/initiative story lives in phase 2.

## Decision ledger (this session)

| Topic | Decision |
|---|---|
| Origin | Two-phase blend, credibility-first; shelving is the turn, rescue is the proof |
| Phase-2 motive | Rescue/initiative — **not** an AI experiment |
| Component numbers | **27 → 44 → 103** (startup → rescue → now), across all three phases |
| Timeline | A six-week Shape Up cycle, then expanded over additional time for the transition to Vael |
| Token counts | Qualitative + one concrete detail ("eight spacing steps, not forty"); no 11/13/24 |
| Doc pages | **226 Storybook stories / 251 docs** (current); was "80+" pre-Movement-3 |
| Pipeline + `build.py` | Real phase-1 production work, told **past tense**; reskin deliberately re-authored the theme by hand + moved docs to Storybook — say so |
| A11y | Hand-audited each component vs WCAG, then verified with the Storybook a11y addon (which caught extras she fixed) |
| Pitches/tickets | 17 / 145, framed as the **handoff** that got shelved before the eng cycle ran |
| Decision record | Real (authored in the pitches / Notion / the original system's rendered docs) — claim stands |
| Live proof | Beat "Rebuilt in the open" points to the real library + Storybook; **pre-publish dependency:** deploy the static Storybook to a public URL before the page ships |

### Movement 3 additions (second-life extension, 2026-07-17)

| Topic | Decision |
|---|---|
| Component arc | **27 → 44 → 103** (startup → rebuild → today); the growth is the setup, discipline is the point |
| Storybook footprint | **226 stories / 251 docs** (built manifest) — replaces the old "80+ docs" |
| Movement-3 hub | The method became an **operating model**, not a project trick: it runs the design tool, the craft, the upkeep, and the handoff — "how I run one," not "how I built one" |
| The four facets (spokes) | (1) design↔code loop; (2) governance rulebook; (3) taste/maturity; (4) built-to-be-picked-up — each a standalone piece under `pieces/` |
| Governance dimensions | Seven, designed as one coherent discipline: **accessibility** (WCAG 2.1 AA conformance statement, hand-audit *then* a11y addon, per-component intentions, axe/jest-axe CI scoped) · **tokens** (W3C single source of truth, `--ds-*`, no-raw-hex) · **contribution & extension** (`consuming-vael`: extend-or-log-an-issue, **never fork**; AFD as the worked example) · **guidelines** (DO/DON'T/props/a11y per component) · **maturity & versioning** (`ComponentStatus` labels, migration templates, "page is canonical, the system conforms") · **decision records** (pitches/ADRs) · **verification** |
| Verification discipline | "How I keep the pair honest" — typecheck/Storybook/Chromatic/a11y green gates + computed-style & screenshot audits; named governance dimension (piece 2), the gate in the round-trip (piece 1), a coda lesson |
| Recursive proof | This About page + the slide library + the portfolio are built *with* Vael (piece 4 + coda) |
| Runs a real practice | Vael is load-bearing, not a demo — the AFD site + courses run on it, extended via the logged-extension rule (piece 4 + coda) |
| Figma/MCP round-trip | Vael brought into Figma with AI (file `4dNRm8xuERpDNfdXYjlbIn`, **105 pages**, per-component doc panels mirroring Storybook, real components); read a Figma node → agent edits `src/components` + `vael/` tokens + the story → **verifies** → human review + commit, over Figma MCP (piece 1) |
| Backlog-as-governance | Even the backlog is run this way — the live 3-tracker reconciliation + implementation-ready epics + agent orchestration (piece 2) |
| Honesty framing | Lead with what's enforced today (WCAG statement, `consuming-vael`, Guidelines, token format, decision records); frame CI/lint/contribution-template items as **scoped tickets** — never claim a dimension is automated when it isn't |

## Fact-correction reference

| Old draft | Corrected |
|---|---|
| 27 components | 27 → 44 → 103 (startup → rebuild → today) |
| MUI + MUI X + AG Grid + React Flow | MUI v7 + MUI X (core) + Highcharts (charts); AG Grid optional; dnd-kit / React Flow |
| 75 / ~80 doc pages | **226 stories / 251 docs (Storybook)** — built manifest, verified |
| 11 color / 13 type / 8 spacing / 24 elevation | W3C token foundation, qualitative; "8 spacing steps, not forty" |
| v0.75 (release) | Avoid as a release version (package.json 0.1.0); "v.75.0" was the Supernova token version |
| generated theme / `build.py` (present tense) | Phase-1 production work, past tense; public reskin uses a hand-authored theme + Storybook |
| a11y "status of every component" | Hand-audited + addon-verified |

## Constraints (non-negotiable)

- **Anonymization (two-phase):**
  - **Phase 1** (origin/startup) = anonymized: "a bioscience startup," never the company/product/people;
    snippets scrubbed. Run the `README.md` checklist before publishing.
  - **Phase 2+** (the second life) = **public and specific**: name Claude, Figma, MCP, Storybook,
    Chromatic, the real repo. **Vael is the public name** — the old "never the name Vael" rule is
    retired for phase-2 material.
- **No invented metrics** — output-focused, verified numbers only. Locked: 27 → 44 → 103; 226 stories /
  251 docs; six-week Shape Up cycle; 17 pitches / 145 tickets; "eight spacing steps, not forty."
- **Voice:** first-person, wry, confident, no corporate gloss.
- **Show edits inline;** originals preserved under `_original-backup/`.

## Files (`case-study/` = `narrative/` + `landing/`)

**`narrative/`** — the story
- `deep-dive.md` — the flowing master (+ Movement 3 + refreshed coda)
- `medium.md`, `short.md` — cuts of the master (endings refreshed for Movement 3)
- `README.md` — shared facts list
- `NARRATIVE-SPEC.md` — this file (the governing decisions)
- `pieces/` — the four satellite deep-dives: `01-design-and-code.md`, `02-the-rulebook.md`,
  `03-taste-compounded.md`, `04-built-to-be-picked-up.md`
- `visuals/` — narrative diagrams (build-loop, token pipeline)
- `_original-backup/` — pristine pre-rewrite originals
- `2026-07-17-second-life-narrative-design.md` / `-plan.md` — the extension design spec + plan

**`landing/`** — the site build (deferred)
- `copy-deck.md` — 8 beats on the spine (landing-page copy)
- `DESIGN.md`, `SPEC.md` — landing-page design/spec aligned to the spine

## Out of scope (now)

- Building/deploying the landing page (separate chat / later).
- Updating the reskinned repo's a11y matrix to reflect the original audits (a repo task, not narrative).
- Medium publishing, portfolio-repo integration, custom domain, new visuals.
