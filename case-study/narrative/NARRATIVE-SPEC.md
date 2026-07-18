# Narrative spec — Vael case study (two-phase, spine-driven)

The governing decisions for the Vael case-study narrative. Supersedes the earlier single-phase
reconciliation spec. Everything in `../landing/copy-deck.md`, the prose cuts (`deep-dive.md`, `medium.md`,
`short.md`), `../landing/DESIGN.md`, and `../landing/SPEC.md` inherits from this.

Status: narrative pass complete (deep-dive master + medium + short + copy-deck beats + DESIGN/SPEC +
README all rewritten). Landing page itself = separate build, later. Not launching yet.

## The spine (the whole piece serves this)

> AI collapses the cost of production → so judgment and ownership become the whole job → and the
> rescue proves it.

A story told in **movements**, not a parts tour: setup → reframe → one rising "where the leverage
lived" movement → the judgment turn → shelved (the turn) → rebuilt in the open (the rescue = proof)
→ landing. Each beat hands off to the next.

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
| Component numbers | **27 → 44**, stated explicitly across both phases |
| Timeline | A six-week Shape Up cycle, then expanded over additional time for the transition to Vael |
| Token counts | Qualitative + one concrete detail ("eight spacing steps, not forty"); no 11/13/24 |
| Doc pages | "80+" (current, Storybook) |
| Pipeline + `build.py` | Real phase-1 production work, told **past tense**; reskin deliberately re-authored the theme by hand + moved docs to Storybook — say so |
| A11y | Hand-audited each component vs WCAG, then verified with the Storybook a11y addon (which caught extras she fixed) |
| Pitches/tickets | 17 / 145, framed as the **handoff** that got shelved before the eng cycle ran |
| Decision record | Real (authored in the pitches / Notion / the original system's rendered docs) — claim stands |
| Live proof | Beat "Rebuilt in the open" points to the real library + Storybook; **pre-publish dependency:** deploy the static Storybook to a public URL before the page ships |

## Fact-correction reference

| Old draft | Corrected |
|---|---|
| 27 components | 27 → 44 |
| MUI + MUI X + AG Grid + React Flow | MUI v7 + MUI X (core) + Highcharts (charts); AG Grid optional; dnd-kit / React Flow |
| 75 doc pages | ~80 (Storybook now; generated static site originally) |
| 11 color / 13 type / 8 spacing / 24 elevation | W3C token foundation, qualitative; "8 spacing steps, not forty" |
| v0.75 (release) | Avoid as a release version (package.json 0.1.0); "v.75.0" was the Supernova token version |
| generated theme / `build.py` (present tense) | Phase-1 production work, past tense; public reskin uses a hand-authored theme + Storybook |
| a11y "status of every component" | Hand-audited + addon-verified |

## Constraints (non-negotiable)

- **Anonymization:** never the company ("a bioscience startup"); never the internal name ("Vael");
  snippets scrubbed. Run the `README.md` checklist before publishing.
- **No invented metrics** — output-focused, verified numbers only.
- **Voice:** first-person, wry, confident, no corporate gloss.
- **Show edits inline;** originals preserved under `_original-backup/`.

## Files (all rewritten this pass)

- `../landing/copy-deck.md` — 8 beats on the spine (priority; landing-page copy)
- `deep-dive.md` — the flowing master
- `medium.md`, `short.md` — cuts of the master
- `README.md` — shared facts list
- `../landing/DESIGN.md`, `../landing/SPEC.md` — landing-page design/spec aligned to the spine
- `_original-backup/` — pristine pre-rewrite originals

## Out of scope (now)

- Building/deploying the landing page (separate chat / later).
- Updating the reskinned repo's a11y matrix to reflect the original audits (a repo task, not narrative).
- Medium publishing, portfolio-repo integration, custom domain, new visuals.
