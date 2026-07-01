# Vael case-study landing page — design

A polished Next.js case-study/landing page telling the story of building the **Vael** design system with AI — and, after it was shelved, carrying it forward and rebuilding it in the open. This folder holds the *plan and source material*; the site itself is built later, against the clean Vael library in this repo.

## What's here
- `writing/` — the walkthrough in three lengths (`deep-dive.md` master, `medium.md`, `short.md`) + a `README.md` with the shared facts list
- `visuals/` — two diagrams (build-loop, token→generated-theme→docs pipeline) in SVG (web) + PNG (Medium)
- `SPEC.md` — the page spec
- `copy-deck.md` — the locked page copy (voice-approved), rendered as beats on the spine
- `NARRATIVE-SPEC.md` — the governing narrative decisions (two-phase framing + spine)
- `_original-backup/` — pristine pre-rewrite originals, kept for merge/reference
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

## Visual identity — expressive & energetic
- Palette: warm cream `#FBFAF8` · Vael blue `#1976d2` · coral `#FF6A4D`; near-black `#0E1116` for dark interludes; bold full-bleed color-blocking.
- Type: **Fraunces** display · **Inter** body · **JetBrains Mono** code.
- Texture: ~4% film grain on color blocks. Motion: playful-but-purposeful spring; reduced-motion safe.
- Color rhythm: bold moments across the beats (the two "leverage" rungs go dark; a coral callout; a full-bleed blue block on the judgment beat).
- Brand-mark: coral/blue token-square glyph + "Vael" in Fraunces with a coral accent on the final "l"; glyph doubles as favicon.

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
7. **Rebuilt in the open** (coral → live) — the rescue as proof: 27→44, Highcharts/dashboard/forms, traded the generator for **Storybook**; live **component + code** demos from the real Vael library and/or the deployed Storybook.
8. **Close + disclosure + footer** — two-chapter close; two-phase AI-disclosure note; subtle contact footer.

(The old separate "tokens / pipeline / tooling" beats are merged into beat 4 as one escalating movement so the page reads as a story, not a checklist.)

## Nav & chrome
Thin sticky nav: "Catherine Hicks" (left) · Contact (right) · coral scroll-progress line. Dark "dev-tool" OG share card (1200×630): "Vael" + tagline on dark + blue glow.

## Copy
Voice locked — first-person, wry, confident, no corporate gloss. Full deck in `copy-deck.md`; shared facts in `writing/README.md`. Timeframe = a six-week Shape Up cycle, then expanded. Impact = output-focused (27→44 / 80+ / 17 / 145), no invented metrics.

## Note (current reality)
Vael is now a real, clean, deployable library in this repo (44 components on MUI v7 + MUI X + Highcharts) with a Storybook (Chromatic CI configured; needs token). So **beat 7's proof uses the actual components and the deployed Storybook** — the strongest possible evidence the system is real, and the payoff the rescue chapter is built on. **Pre-publish dependency:** the page's "open it right now" claim needs the static Storybook live at a public URL first (in progress).
