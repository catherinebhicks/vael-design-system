# Vael case-study landing page — design

A polished Next.js case-study/landing page telling the story of building the **Vael** design system with AI as a build method. This folder holds the *plan and source material*; the site itself is built later, against the clean Vael library in this repo.

## What's here
- `writing/` — the walkthrough in three lengths (`deep-dive.md` master, `medium.md`, `short.md`) + a usage `README.md`
- `visuals/` — two diagrams (build-loop, token→component→docs pipeline) in SVG (web) + PNG (Medium)
- `SPEC.md` — the page spec
- `copy-deck.md` — the locked page copy (voice-approved)
- `DESIGN.md` — this file

## Origin framing (the anchor sentence)
> Built to production standards for a bioscience startup. When priorities shifted and the project was shelved, I carried it forward on my own — as an exploration of how far AI could take design-system work.

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
- Color rhythm: 4 bold moments across the beats (2 dark interludes, a coral callout, a full-bleed blue block).
- Brand-mark: coral/blue token-square glyph + "Vael" in Fraunces with a coral accent on the final "l"; glyph doubles as favicon.

## Signature hero — "code becomes design"
1. Code reveals **line by line** (theme tokens, then a `<Button>` JSX).
2. The code **morphs** into the rendered elements (hex → swatch, JSX → the live button).
3. **Annotations** appear ("design token," "themed component"). Reduced-motion = resolved end-state.
Headline (name-forward): **"Vael" / "A design system, built with AI in the loop."** Subhead: "27 components · 75 doc pages · one designer · a six-week cycle."

## Beats (8)
1. **Hero** (light) — the signature animation + stat counters (27/75/17).
2. **The gap** — the shelved-project origin; pull quote "What it had was me."
3. **How I worked with Claude** — horizontal stepper: **primitive → component → infrastructure** (token JSON → a component → `build.py`), landing "AI didn't just write my components — it built the machine that documents them."
4. **Tokens** (🌑 dark) — swatch grid + code card; W3C format point.
5. **Pipeline** (🌑 dark) — Figma → Supernova → theme, animated.
6. **The part I didn't expect** (coral callout) — "AI built my tooling."
7. **What AI couldn't do** (full-bleed blue, white cards) — taste · accessibility · governance · the "why."
8. **The system, in code** — live **component + code** demos from the real Vael library (Button w/ variant toggles, a form group, a data card, a themed chart, Alert+Chip); or embed/link the **deployed Storybook**.
9. **Close + disclosure + footer** — final stats; AI-disclosure note (system only); subtle contact footer.

## Nav & chrome
Thin sticky nav: "Catherine Hicks" (left) · Contact (right) · coral scroll-progress line. Dark "dev-tool" OG share card (1200×630): "Vael" + tagline on dark + blue glow.

## Copy
Voice locked — first-person, wry, confident, no corporate gloss. Full deck in `copy-deck.md`. Timeframe = a six-week Shape Up cycle. Impact = output-focused (27/75/17), no invented metrics.

## Note (updated post-migration)
Vael is now a real, clean, deployable library in this repo (+ a live Storybook via Chromatic). So beat 8's showcase can use the **actual components and the deployed Storybook** rather than mockups — the strongest possible proof the system is real.
