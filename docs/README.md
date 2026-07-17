# Vael — documentation home

**The single front door to everything written about the Vael design system** — from the original Fermie build through today. If a Vael doc isn't linked from here, it's either in `stories/` (the living component docs) or it shouldn't exist. Start here.

## The whole story, in order

1. **[history-fermie-to-vael.md](history-fermie-to-vael.md)** — how we got here: the phase-1 Fermie production build (what & why), the shelving, and the transition to Vael (why & how). The internal "how we got here" record. *Contains the anonymization boundary — read it first.*
2. **[../case-study/](../case-study/)** — the public-facing case study (AI-as-build-method):
   - `NARRATIVE-SPEC.md` — governing spec; the frozen, fact-checked decision ledger everything else inherits from.
   - `writing/` — the narrative in three cuts: `deep-dive.md` (master), `medium.md`, `short.md`.
   - `copy-deck.md`, `DESIGN.md`, `SPEC.md` — the case-study landing page (copy + design + spec).
   - `_original-backup/` — pre-revision drafts (provenance only; not canonical).
3. **[consuming-vael.md](consuming-vael.md)** — how downstream products extend Vael without forking it (the governance model), with the AFD website as the worked example. Design-system reasoning merged from the afd-website build.
4. **[downstream.md](downstream.md)** — what consumes or spun off Vael (AFD website, slide library, case-study sites). Index + links, not copies.

## Getting started (onboarding)

Practical, non-dev-friendly setup guides live in **[onboarding/](onboarding/)**:
- **[onboarding/using-storybook.md](onboarding/using-storybook.md)** — install & run the component catalog (and why a non-dev would).
- **[onboarding/import-into-figma.md](onboarding/import-into-figma.md)** — import the `.fig` into Figma (web + desktop) and publish it as a library.
- **[onboarding/designing-with-an-llm.md](onboarding/designing-with-an-llm.md)** — connect Figma to an LLM via MCP: ingest, design in it, and round-trip changes to code.

## What the system *is* (living reference)

- **[../README.md](../README.md)** — library overview + how to run Storybook.
- **[../CHANGELOG.md](../CHANGELOG.md)** — change history (pre-1.0).
- **[../start-here.md](../start-here.md)** — repo re-entry / current status.
- **`../about/`** — the Vael story site (from the archived `vael-case-study`); the package's About / landing section.
- **`../slide-library/`** — presentation template kit + the downloadable 92-slide deck (`slide-library/deck/Vael-Slide-Library.pptx`).
- **`../stories/`** — the canonical design documentation *of* the system (~92 MDX pages):
  - `Foundations/` — Color, Typography, Spacing, Motion, DarkMode, DataViz, Elevation, Iconography, Breakpoints.
  - `Docs/` — DesignTokens, TokenUsage, Accessibility, MotionPrinciples, ErrorMessages, DataFormatting, BrowserSupport, ComponentStatus.
  - `Patterns/` + `Components/` — per-pattern and per-component usage docs.

## Live surfaces

| Surface | URL / ID |
|---|---|
| Storybook (GitHub Pages) | https://catherinebhicks.github.io/vael-design-system/ |
| Chromatic | appId `6a46b2b4b5af28117f0804b1` |
| Figma library | file `4dNRm8xuERpDNfdXYjlbIn` |

## Open reconciliation

- **Component count drift:** case-study narrative says "44"; repo is now ~103. Resolve before the case study publishes (see `history-fermie-to-vael.md` → Current state).
- **Flesh-out flags** in `history-fermie-to-vael.md`: why Supernova specifically, why MUI as the base, why Shape Up — reasoning not recorded; fill in if the case study goes deeper.
