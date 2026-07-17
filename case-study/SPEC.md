# Spec — Vael case-study landing page

## Context

Catherine has a finished written walkthrough (three cuts + two diagrams) about building the **Vael** design system with AI — and, after it was shelved, carrying it forward and rebuilding it in the open (now this repo, `~/dev/vael-design-system`). She wants to elevate it into a **polished Vercel landing page** that shines — a portfolio-grade, showpiece-quality case study.

**Why:** it's an AI-forward portfolio piece during an active job search, and the page's craft is itself proof of design ability.

**Spine (drives structure):** AI collapses the cost of production → so judgment and ownership become the whole job → and the rescue proves it. Two chapters — *built for a startup* (production) → *shelved* → *carried forward solo* (rebuilt in the open). Every beat serves the spine and hands off to the next.

**Audience priority (drives every trade-off):**
1. **Hiring / clients** — skimming evaluators deciding in ~30s. Fast proof, scannable, credibility-forward.
2. **Showpiece** — the page's visual craft is the artifact; polish is the quality bar that wins #1.
3. **Peers / community** — depth for deep readers; the full depth lives on Medium, not here.

→ Design for the skimming evaluator, hold showpiece polish throughout, layer depth optionally.

**Anonymization (strict, non-negotiable):** never name the company — "a bioscience startup." Never the internal project name — always **Vael**. All code snippets scrubbed.

## Scope

A single, scroll-driven marketing-style case-study page. Not a multi-page site. Not a CMS. One route (`/`), static, fast.

## Tech

- **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed to **Vercel**.
- **Framer Motion** for scroll reveals, the stat counters, and the signature "code becomes design" animation.
- Standalone **private** repo (Catherine's default). Build + preview **locally first**; do **not** push or deploy without explicit approval (standing rule).
- Static export-friendly: no server data, no DB, no auth. All content is in-repo. Page meets **WCAG AA**.

## Content basis

Page copy is `copy-deck.md` (beats on the spine); the full story is `writing/deep-dive.md`. Full depth links out to the eventual Medium post. Real facts (see `writing/README.md` for the canonical list):

- **27 components at the startup → 44 now** (carried forward) · **80+ doc pages** (Storybook now; a generated static site originally) · **17 Shape Up pitches · 145 tickets** · a **six-week Shape Up cycle**, then expanded.
- Tokens in the open **W3C design-tokens format** (described qualitatively — "eight spacing steps, not forty"; don't cite the old 11/13/24 counts).
- **Phase-1 (production), past tense:** Figma → Supernova → **generated** MUI theme; a **`build.py`** docs generator (~485 lines).
- **Current stack:** MUI v7 + MUI X (Data Grid) core, **Highcharts** for charts, AG Grid optional, dnd-kit / React Flow. Live **Storybook**.

## Visual system

**Blueprint / Engine-Room** — the same identity as the reskinned design system, so clicking through to the Storybook has no seam.

- **Surfaces:** blueprint bg `#e9eff7` / panels `#ffffff`,`#f4f8ff` (light); `#0a0e14` / `#111925` (dark). Ink `#141c28` / `#dce6f2`. A fine **blueprint grid** background throughout; hairline borders; small radii (7–14px). Light default with a **dark toggle** (`data-theme`).
- **Accent:** Vael blue `#1976d2` (+ `#1565c0` dark, `#42a5f5` light) — the real primary tokens — with a soft glow on live states. Coral "signal" `#b8401b` (light) / `#ff8a5b` (dark) for callouts.
- **Aesthetic = one identity, with register shifts:**
  - *Editorial* = the narrative spine (mono headings, generous whitespace, pull quotes on a coral rail).
  - *Design-system furniture* = recurring UI (token swatches, component cards, stat counters, node-dot + "stage" chrome).
  - *Dark "engine-room" register* = the two technical rungs inside "Where the leverage lived" and the OG card lean into the near-black dark canvas; the contrast marks the technical heart.
- **Type:** IBM Plex Mono (display headings, eyebrows, labels, code) · IBM Plex Sans (body/UI).
- Fully responsive; reduced-motion respected (`prefers-reduced-motion` disables the scroll animations).

## Imagery (built-from-data, no fabricated screenshots)

- **Now (from the real system):** live token **swatch grid** from real values; styled **code-snippet cards** (`theme.ts` header, token JSON, `build.py` — all anonymized); the **two diagrams** re-rendered as inline SVG/React so they animate; **component-name grid** of the real 44 components; animated **stat counters** (27→44).
- **Signature moment:** the **token → generated theme → docs** leverage assembles on scroll (dark rungs).
- **Live proof (beat 7):** faithful, interactive component demos on Vael's tokens (charts are real Highcharts) + the deployed **Storybook** (link) as the real library one click away.

## Page structure (8 beats — on the spine)

| # | Beat | Style | Key elements |
|---|------|-------|-------------|
| 1 | **Hero** | light editorial | Title, thesis line, credibility line, 3 animated stat counters (27→44 / 80+ / 1); "code becomes design" animation |
| 2 | **The gap** | editorial | Problem framing; ends on the *question* ("how much can one designer own if production cost falls away?") |
| 3 | **How I worked with Claude** | ds furniture | `01-build-loop` diagram; pair-not-autopilot; hands off to "where the leverage lived" |
| 4 | **Where the leverage lived** | 🌑 dark rungs | One rising movement: tokens → **theme generated itself** → **docs wrote themselves** (`build.py`); `02-token-pipeline` assembles on scroll; pitches/tickets as the upstream rung |
| 5 | **What AI couldn't do** | full-bleed blue, white cards | Judgment turn led by the a11y hand-audit + addon story: taste · accessibility · governance · the "why" |
| 6 | **And then it was shelved** | editorial (short, weighty) | Taken to a handoff (17 pitches / 145 tickets), then shelved before the cycle ran |
| 7 | **Rebuilt in the open** | coral → live | The rescue = proof: 27→44, Highcharts/dashboard/forms, Storybook; live component + code demos / deployed Storybook |
| 8 | **Close + footer** | editorial | Two-chapter close; two-phase AI disclosure; subtle contact footer |

## Component architecture

Small, single-purpose components under `components/`:
- `Hero.tsx`, `StatCounter.tsx` (animated count-up, reduced-motion safe)
- `Section.tsx` (light/dark variant wrapper, handles rhythm + scroll-reveal)
- `PullQuote.tsx`
- `BuildLoopDiagram.tsx`, `PipelineDiagram.tsx` (inline SVG/React so they animate)
- `LeverageSection.tsx` (the three-rung movement wrapper) with `TokenSwatchGrid.tsx` (data-driven from `data/tokens.ts`) and `CodeCard.tsx` (syntax-styled, anonymized snippets from `data/snippets.ts`)
- `ComponentGrid.tsx` (the real 44 names from `data/components.ts`)
- `ControlCard.tsx` (the judgment pillars)
- `LiveShowcase.tsx` (beat 7 — real component demos + Storybook embed/link; degrades gracefully before the URL is live)
- `ContactFooter.tsx`

Content + data separated from presentation:
- `data/copy.ts` — section headings/body (from `copy-deck.md`)
- `data/tokens.ts`, `data/components.ts`, `data/snippets.ts`, `data/stats.ts`

## Out of scope (now)
- Medium publishing, portfolio-repo integration, custom domain.
- Analytics beyond Vercel's, contact form backend (footer link is `mailto:` / portfolio link).

## Verification
- `npm run build` succeeds; `npm run dev` renders all 8 beats with no console errors.
- Responsive at 375 / 768 / 1280 px; `prefers-reduced-motion` disables animations cleanly.
- Anonymization scan passes (no company name; no internal name; snippets scrubbed).
- Visual QA via local preview screenshots before any deploy.
- ✅ **Storybook is deployed to a public URL** (https://catherinebhicks.github.io/vael-design-system/), reskinned to match this page — so beat 7's "open it right now" link is live and seamless.
- **Gate:** Catherine reviews local preview; explicit approval required before push/deploy.
