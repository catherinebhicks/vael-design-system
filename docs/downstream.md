# Vael — downstream & derivative work (index only)

Vael is consumed by, or has spun off, several other projects. Those docs **stay in their own repos** (they're living docs owned there) — this file just points at them so nothing is lost. Do **not** copy them here; they'd drift.

## Design consumers

- **A Focused Design website** — the A Focused Design website project. Every AFD design decision derives from Vael (Blueprint blue `#1976d2` + IBM Plex). Vael-relevant docs:
  - `start-here.md` — heaviest Vael cross-reference.
  - `docs/2026-07-07-afd-website-design.md` — the AFD visual design built on Vael tokens.
  - `docs/2026-07-13-hubspot-architecture-decision.md` — ADR referencing the Vael design layer.
  - `docs/deck-tech-stack-spec.md` — tech-stack handoff deck spec.
  - Rule of record: AFD design comes from Vael as-is, or is logged as a Vael-extension issue first.

## Derivative artifacts

- **Vael Slide Library** — now **in this repo** at [`../slide-library/`](../slide-library/). Blueprint case-study slide layouts + a downloadable **92-slide PPTX** at `slide-library/deck/Vael-Slide-Library.pptx`. Source deck = Claude Design project "Vael Slide Library."

## Case-study sites (the "shown" surface)

- **Vael case study (walkthrough)** — narrative source in [`../case-study/`](../case-study/); the story *site* now lives in this repo at [`../about/`](../about/). The old standalone `vael-case-study` repo is **archived**, so its deploy at **vael-case-study.vercel.app** is **frozen** at its last build (no longer auto-updates) — redeploy from `about/` when the package gets its own deployment.
- **design-case-studies** (`catherinebhicks/design-case-studies`, formerly `new-vael-case-studies`) — Catherine's portfolio case studies rendered as one-page sites *built with* the Vael Blueprint look (9 studies incl. the Vael story under `/vael`). Live URL unchanged: **new-vael-case-studies.vercel.app**.
## Origin (phase-1)

- **Original production system** — private and intentionally excluded from the public Vael repository. Its anonymized design-system reasoning is summarized in [`history-fermie-to-vael.md`](history-fermie-to-vael.md).
