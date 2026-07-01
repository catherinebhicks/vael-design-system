# Spec — Vael case-study landing page

## Context

Catherine has a finished written walkthrough (3 cuts + 2 diagrams) about building the **Vael** design system with AI as a build method (`~/Desktop/vael-ai-build/`). She wants to elevate it into a **polished Vercel landing page** that shines — a portfolio-grade, showpiece-quality case study.

**Why:** it's an AI-forward portfolio piece during an active job search, and the page's craft is itself proof of design ability.

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
- **Framer Motion** for scroll reveals, the stat counters, and the signature pipeline animation.
- Standalone **private** repo (Catherine's default). Build + preview **locally first**; do **not** push or deploy without explicit approval (standing rule).
- Project lives at `~/Desktop/vael-ai-build/site/`.
- Static export-friendly: no server data, no DB, no auth. All content is in-repo.

## Content basis

Page copy is a **tightened cut of `medium.md`** (showpiece > peers → tight, visual, not a long read). Full depth links out to the eventual Medium post. Real facts reused verbatim: 27 components · 75 doc pages · 17 Shape Up pitches · 145 tickets · v0.75; foundation tokens 11 color / 13 type / 8 spacing / 24 elevation; W3C design-tokens format; Figma → Supernova → token JSON → generated MUI theme; stack MUI + MUI X + AG Grid + React Flow.

## Visual system

- **Accent:** Vael blue `#1976d2` (+ `#1565c0` dark, `#42a5f5` light) — the real primary tokens.
- **Aesthetic = three styles as a rhythm, not a blend:**
  - *Editorial* = the narrative spine (large headings, generous whitespace, pull quotes).
  - *Design-system furniture* = recurring UI (token swatches, component cards, stat counters, the blue accent).
  - *Dark "engine-room" interludes* = the two technical sections (tokens, pipeline) flip to a dark canvas + monospace; the contrast marks them as the technical heart.
- **Type:** one clean sans for UI/body (e.g. Inter), optional tasteful display face for headlines; monospace (e.g. JetBrains Mono / ui-monospace) for code.
- Fully responsive; reduced-motion respected (`prefers-reduced-motion` disables the scroll animations).

## Imagery (built-from-data, no fabricated screenshots)

- **Now (from existing system):** live token **swatch grid** from real values; styled **code-snippet cards** (`theme.ts` header, token JSON, `build.py` — all anonymized); the **two diagrams** (`visuals/01-build-loop`, `visuals/02-token-pipeline`) re-rendered as crisp inline SVG/React so they animate; **component-name grid** of the real 27 components; animated **stat counters**.
- **Signature moment:** the **token → component → docs pipeline** assembles on scroll (dark section).
- **Later (enhancement slot):** a reserved, clearly-marked section for real component **showcases** built once the system is refreshed for publishing. Page must look complete without it.

## Page structure (8 beats)

| # | Beat | Style | Key elements |
|---|------|-------|-------------|
| 1 | **Hero** | light editorial | Title, one-line thesis, credibility line (*solo designer · ~few weeks · production design system*), 3 animated stat counters (27/75/17) |
| 2 | **The gap** | editorial | Problem framing; pull quote "What it had was me." |
| 3 | **AI as the method** | ds furniture | `01-build-loop` diagram full-bleed; the designer↔Claude division of labor |
| 4 | **The tokens** | 🌑 dark | Live swatch grid from real tokens + code card; W3C-format point |
| 5 | **The pipeline** | 🌑 dark (signature) | `02-token-pipeline` assembles on scroll; Figma→Supernova→theme |
| 6 | **The infrastructure win** | light editorial | `build.py` beat; "AI built my tooling, not just my components" |
| 7 | **Where I stayed in control** | ds cards | 4 credibility cards: taste · accessibility · governance · the "why" |
| 8 | **Close + footer** | editorial | Final stats; one clean closing line; **subtle contact footer** (name + one line + contact link). Reserved enhancement slot above footer. |

## Component architecture

Small, single-purpose components under `components/`:
- `Hero.tsx`, `StatCounter.tsx` (animated count-up, reduced-motion safe)
- `Section.tsx` (light/dark variant wrapper, handles rhythm + scroll-reveal)
- `PullQuote.tsx`
- `BuildLoopDiagram.tsx`, `PipelineDiagram.tsx` (inline SVG/React so they animate)
- `TokenSwatchGrid.tsx` (data-driven from `data/tokens.ts`)
- `CodeCard.tsx` (syntax-styled, copy-safe, anonymized snippets from `data/snippets.ts`)
- `ComponentGrid.tsx` (the 27 names from `data/components.ts`)
- `ControlCard.tsx` (the four pillars)
- `ContactFooter.tsx`
- `EnhancementSlot.tsx` (placeholder section, visually intentional)

Content + data separated from presentation:
- `data/copy.ts` — section headings/body (from tightened `medium.md`)
- `data/tokens.ts`, `data/components.ts`, `data/snippets.ts`, `data/stats.ts`

## Out of scope (now)
- Real component-UI showcases (await system refresh → enhancement slot).
- Medium publishing, portfolio-repo integration, custom domain.
- Analytics, contact form backend (footer link is `mailto:` / portfolio link).

## Verification
- `npm run build` succeeds; `npm run dev` renders all 8 beats with no console errors.
- Responsive at 375 / 768 / 1280 px; `prefers-reduced-motion` disables animations cleanly.
- Anonymization scan passes (no company name; no internal name; snippets scrubbed).
- Visual QA via local preview screenshots before any deploy.
- **Gate:** Catherine reviews local preview; explicit approval required before push/deploy.
