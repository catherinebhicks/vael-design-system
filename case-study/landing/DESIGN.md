# Vael case-study landing page — design

A polished Next.js case-study/landing page telling the story of building the **Vael** design system with AI — and, after it was shelved, carrying it forward and rebuilding it in the open. This folder holds the *plan and source material*; the site itself is built later, against the clean Vael library in this repo.

## What's here

`case-study/` splits into two folders: **`narrative/`** (the story, in every form) and **`landing/`** (this folder — the site-build docs).

**`../narrative/`** — the story
- `deep-dive.md` — the flowing master; `medium.md`, `short.md` — cuts of it
- `README.md` — the shared-facts list
- `NARRATIVE-SPEC.md` — the governing narrative decisions (two-phase framing + spine + Movement 3)
- `pieces/` — the four standalone satellite deep-dives
- `visuals/` — two diagrams (build-loop, token→generated-theme→docs pipeline) in SVG (web) + PNG (Medium)
- `_original-backup/` — pristine pre-rewrite originals, kept for merge/reference
- `2026-07-17-second-life-narrative-design.md` / `-plan.md` — the second-life extension design + plan

**`landing/`** — the site build (this folder)
- `SPEC.md` — the page spec
- `copy-deck.md` — the locked page copy (voice-approved), rendered as beats on the spine
- `DESIGN.md` — this file

## The spine (the whole piece serves this)
> AI collapses the cost of production → so judgment and ownership become the whole job → and the rescue proves it.

Two chapters: **built for a startup** (production, a six-week cycle, taken to a scoped handoff) → **shelved** → **carried forward on my own** (rebuilt clean and in the open as a live, documented library). Every beat serves the spine and hands off to the next — a story told in movements, not a parts tour.

## Origin framing (the anchor)
> It began as a design system for a bioscience startup — built with AI as my pair, to production standards, in a six-week Shape Up cycle. When priorities shifted and it was shelved, I didn't want good work to die in a backlog. So I carried it forward on my own: rebuilt it clean, in the open, and took it further.

Anonymized throughout: "a bioscience startup," never the company; "Vael," never the internal name.

## Audience priority
1. **Hiring / clients** — skimming evaluators; fast proof, credibility-forward.
2. **Showpiece** — the page's craft is itself the artifact.
3. **Peers** — depth lives on Medium.

## Tech
Next.js (App Router) + TypeScript + Tailwind + Framer Motion → Vercel. Vercel Analytics on. Page itself meets **WCAG AA**.

## Visual identity — Blueprint / Engine-Room
The page shares the design system's identity so there's no seam clicking through to the Storybook.
- Palette: blueprint surfaces — light bg `#e9eff7` / panels `#ffffff`,`#f4f8ff`; dark "engine room" `#0a0e14` / `#111925`. Ink `#141c28` (light) / `#dce6f2` (dark). Brand blue `#1976d2` (+ `#1565c0` / `#42a5f5`) with a soft glow on live states. Coral "signal" `#b8401b` (light) / `#ff8a5b` (dark) for callouts.
- Type: **IBM Plex Mono** for display headings, eyebrows, labels, and code · **IBM Plex Sans** for body/UI.
- Texture: a fine **blueprint grid** background (two 1px gradients, 28–44px). Motion: purposeful — the typing-in hero, the pipeline flow, scroll reveals; reduced-motion safe.
- Light default with a **dark toggle** (`data-theme`); the two "leverage" rungs and the OG card lean into the dark engine-room register.
- Signature devices: node-dot motif, mac-window "stage" chrome, hairline borders, small radii (7–14px), dark code blocks.
- Brand-mark: a node-dot glyph + "Vael" in IBM Plex Mono; dark "dev-tool" OG card.

## Signature hero — "code becomes design"
1. Code reveals **line by line** (theme tokens, then a `<Button>` JSX).
2. The code **morphs** into the rendered elements (hex → swatch, JSX → the live button).
3. **Annotations** appear ("design token," "themed component"). Reduced-motion = resolved end-state.
Headline (name-forward): **"Vael" / "A design system, built with AI in the loop."**
Subhead: **"27 → 44 components · 80+ doc pages · one designer · a six-week cycle, then carried forward."**

## Beats (8 — on the spine)
1. **Hero** (light) — signature animation + stat counters (27→44 / 80+ / 1); the two-phase opening line.
2. **The gap** (editorial) — the startup problem; ends on the *question* ("how much can one designer own if production cost falls away?").
3. **How I worked with Claude** — pair-not-autopilot reframe; hands off with "but the surprise was *where the leverage lived*."
4. **Where the leverage lived** — the rising movement, one story across three sub-panels: tokens → **theme generated itself** (🌑 dark, the production build) → **docs wrote themselves** (`build.py`). Each rung pulls further out of production. Pitches/tickets can tag on as the upstream rung.
5. **What AI couldn't do** (full-bleed blue, white cards) — the judgment turn, led by the a11y hand-audit + addon story: taste · accessibility · governance · the "why."
6. **And then it was shelved** (short, weighty) — taken to a handoff (17 pitches / 145 tickets), then shelved before the cycle ran. The turn.
7. **Rebuilt in the open** (coral → live) — the rescue as proof: 27→44, Highcharts/dashboard/forms, traded the generator for **Storybook**; **faithful, interactive component demos on Vael's tokens** (charts are real Highcharts) + the deployed Storybook as the real library one click away.
8. **Close + disclosure + footer** — two-chapter close; two-phase AI-disclosure note; subtle contact footer.

(The old separate "tokens / pipeline / tooling" beats are merged into beat 4 as one escalating movement so the page reads as a story, not a checklist.)

## Nav & chrome
Thin sticky nav: "Catherine Hicks" (left) · Contact (right) · coral scroll-progress line. Dark "dev-tool" OG share card (1200×630): "Vael" + tagline on dark + blue glow.

## Copy
Voice locked — first-person, wry, confident, no corporate gloss. Full deck in `copy-deck.md`; shared facts in `../narrative/README.md`. Timeframe = a six-week Shape Up cycle, then expanded. Impact = output-focused (27→44 / 80+ / 17 / 145), no invented metrics.

## Note (current reality)
Vael is a real, clean library in this repo (44 components on MUI v7 + MUI X + Highcharts) with a Storybook **live on GitHub Pages** (https://catherinebhicks.github.io/vael-design-system/) — reskinned to the same Blueprint identity as this page, so the click-through has no seam. Beat 7's proof = **faithful, interactive component demos on Vael's tokens** (charts are real Highcharts) plus the **deployed Storybook** as the real library one click away. The "open it right now" link is live.
