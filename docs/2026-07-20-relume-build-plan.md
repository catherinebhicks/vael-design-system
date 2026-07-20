# Vael Product Build Plan — All Tiers (code-first)

## Context

Vael is being productized into a **modular, sellable design-system** — Figma UI kit + React/MUI
code library + starter templates + full codebase + editing docs, sold à la carte and bundled —
aimed **primarily at a designer building a standout portfolio**, broad enough for any
designer/freelancer (incl. Catherine's own client work), with **skinnability first-class**.

The **Build Catalog** (`docs/2026-07-20-relume-build-catalog.md`, from the full variant-level
Relume audit) is the *what*. This is the *how*: build the **46 catalog components** (38 sections +
8 page templates, folding **121** curated Relume variants into prop-driven components) plus the
missing **foundations**, across all tiers.

**Everything Vael already ships is kept** — this only ADDS. **Sequencing decision (Catherine):
code-first across all tiers** — build all section CODE + Storybook first (fastest to a library
usable on real work); Figma parity, docs MDX, and packaging follow as their own track-phases.

## Ground truth (from codebase exploration)

- **Section component template** (copy this): `src/components/<Name>/<Name>.tsx` (props interface +
  fn + `export default`, no separate types file) + one-line `index.ts`. Slots are `React.ReactNode`
  props; variants are string-literal unions defaulted in the destructure; the **sx-merge idiom** is
  `sx={[ {…base…}, ...(Array.isArray(sx) ? sx : [sx]) ]}` (sx always last). Tokens via MUI theme —
  `'text.secondary'`, `'primary.main'`, `bgcolor:'background.paper'`, callbacks `(t)=>t.palette…`,
  fonts `(t)=>t.typography.h1.fontFamily`. Responsive = MUI breakpoint objects (`py:{xs,md}`).
  Reference: `src/components/{HeroBanner,CtaBar,Testimonial,WorkCards}`.
- **Missing foundations (blockers):** NO shared `Section`/`Container` primitive (`src/components/Layout`
  is just a MUI re-export); NO image-scrim or emphasis/branded-surface tokens; the 5 atoms
  **PageHeader #118, CardGrid #119, FeaturedPost #120, FeatureCard #121, BrandLogo** are specs only
  (no code) — see `start-here.md:40,49,53-58`.
- **Story/docs:** flat `stories/<Name>.stories.tsx`, title `Marketing/<Name>`, render-based +
  `tags:['autodocs']` + `design:{type:'figma',url:…}` param; register via `export * from` in
  `src/index.ts`. Guidelines MDX at `stories/Components/<Name>.mdx` (Button.mdx = ~180-line template).
- **Verify:** `npm run typecheck` → `npm run build-storybook` → `npm run a11y:audit`; **always ask
  before push** (push to `main` auto-deploys Pages + Chromatic + a11y CI).
- **Governance (`docs/consuming-vael.md`, `stories/GettingStarted/GapAnalysis.mdx`):** extend-don't-fork;
  every new component logged in GapAnalysis + a GitHub issue (milestones M1–M13) + Linear. Parity =
  present in BOTH code AND Figma (code-first means parity lags until Phase 5).
- **Packaging:** single barrel package, `private:true`, no à-la-carte subpath exports; license
  clearance needed (FontAwesome **Free only**; reconcile Highcharts-vs-`@mui/x-charts` docs; MUI-X /
  AG-Grid commercial tiers).

---

## Phase 0 — Foundations (build FIRST; unblocks the tiers)

1. **`Section` primitive** — `src/components/Section/`. Standardizes vertical rhythm (`py:{xs:6-8,
   md:9-12}`), max-width container (~1120–1280) + horizontal padding, and a `surface` prop
   (`default | subtle | emphasis | dark`) + optional Blueprint grid. Every new section composes it →
   kills the hard-coded `py` and ad-hoc `<div style={{maxWidth…}}>` story wrappers.
2. **Surface + scrim tokens** — add to `vael/theme.ts` + `vael/design-tokens.json` (+ dark theme):
   an **emphasis/branded section surface** (light+dark) and an **image-scrim overlay gradient** token
   (for image-background heroes). Satisfies the un-tokenized gaps in `start-here.md:40,49`.
3. **The 5 atoms** (specs exist; several sections depend on them): **FeatureCard** (#121),
   **CardGrid** (#119), **FeaturedPost** (#120), **PageHeader** (#118), **BrandLogo**.
4. **One grid family, not three** — build **CardGrid as a general `ItemGrid`** (image/title/meta/link
   + `columns` + optional price/cart + optional filter/View-all) that serves Features card-grid,
   Gallery, Portfolio grid, Blog grid, **and** Product List (per the Product-List-generic decision).
   Reconcile so we don't ship parallel grids.

*Verify Phase 0 green before starting sections.*

## Phase 1 — Tier 1 section code (19 components, portfolio-critical)

`Features, Hero Headers, Portfolio Headers, Navbars, Pricing, Gallery, Long-form Content, Cookie
Consent, Product List, Blog Post Headers, CTA*, FAQ*, Testimonials*, Stats*, Portfolio Sections*,
Blog Sections*, Contact*, Page Headers*, Grid Lists*` (`*` = build-wrapper: assemble/extend existing).

Per component: folder + `<Name>.tsx` (template) + `index.ts` + `Marketing/<Name>` story +
`src/index.ts` export; **compose the Section primitive + atoms**; fold the catalog's "build these
variants" into **prop-driven variants** (e.g. Features split = one comp with `imageSide` + media
slot; Hero = HeroBanner variant family incl. bg-image via the new scrim token; CTA → extend
`CtaBar`; FAQ → compose `Accordion`; Testimonials → extend `Testimonial`; Stats → band over
`StatBlock`; Portfolio/Blog → `CardGrid`; Contact → fields + Section; Page Headers → `PageHeader`).
Exact variants + screenshots per component are in the Build Catalog doc. *Verify per batch.*

## Phase 2 — Tier 2 section code (14 components)
`Onboarding Forms, Sign-up/Log-in Pages, Banners, Links pages, Event Sections, Event Item Headers,
Application Shells*, Headers*, Blog Headers*, Team*, Timelines*, Contact Modals*, Category Filters*,
Forms*`.

## Phase 3 — Tier 3 section code (5 components)
`Careers, Product Headers, Multi-step Forms*, Event Headers*, Sign-up/Log-in Modals*`.

## Phase 4 — Starter templates (8, flagship SKUs)
`Portfolio Pages, Home Pages, About, Contact, Pricing, Blog, Blog Post, Legal`. Full-page
compositions following the existing pattern — `stories/Patterns/examples/<Name>.tsx` + a
`Patterns/<Name>` story (`layout:'fullscreen'`) + `Patterns/<Name>.mdx` — assembling the new
sections. **Portfolio + Home are the primary-buyer flagship templates.**

## Phase 5 — Figma parity (all new components) — HEAVIEST, manual
One Figma page per component (`Category/Component`) in file `4dNRm8xuERpDNfdXYjlbIn`: build
component + variants, bind light+dark **variable modes**, author the on-page doc panel, add the
node-id back into the story's `design` param, periodically re-export a dated `.fig`.
`use_figma`-driven (figma-generate-library/-design skills) + design review each time.

## Phase 6 — Docs MDX (all new components)
One `stories/Components/<Name>.mdx` per section (Button.mdx template: intro, Props table, When to
use, States/Anatomy, Accessibility) **plus an "Editing / Customizing" section** for the sellable
product.

## Phase 7 — Packaging & licensing (one-time; gates the *sellable* release)
Add **à-la-carte subpath exports** (`exports["./Section"]…` or a workspace split); decide
`private:true` → publishable; stand up a **published-token path** (kill the manual `tokens.css`
copy); **full third-party license clearance** (FontAwesome Free-only; reconcile Highcharts↔
`@mui/x-charts`; MUI-X / AG-Grid commercial tiers); define the **SKUs** (per-section, per-tier
bundle, templates, full bundle).

---

## Execution model

- **Build in batches via parallel subagents with git worktree isolation** (each agent builds one
  component in its own worktree to avoid `src/index.ts` collisions), then integrate exports + run
  verify on the merged branch. Falls back to sequential batches of ~5 if isolation churns.
  (Multi-agent already opted into.)
- **Governance routing:** each new component → a row in `GapAnalysis.mdx` + a GitHub issue (extend
  milestones M1–M13) + Linear/Todoist mirror, per extend-don't-fork. **Reuse the already-filed
  #118–121** for the atoms.
- **Branch per phase**, commit per batch, **ask before every push** (auto-deploy). Continue on the
  existing `docs/relume-section-audit` line or a fresh `feat/section-library` branch (decide at start).

## Verification

- **Per batch:** `npm run typecheck`, `npm run build-storybook`, `npm run a11y:audit` — all green.
- **Visual/skinnability:** `npm run storybook` → render each new `Marketing/*` and `Patterns/*` story;
  toggle light/dark; do a **token-swap rebrand smoke test** (change primary + surface tokens, confirm
  every new section re-skins with no hard-coded colors). This is the core product promise.
- **Chromatic** on push (ask first).
- **Code-phase done = ** component + story + `src/index.ts` export + green verify. Full **parity**
  done-ness (Figma page + MDX) completes in Phases 5–6.

## Out of scope / deferred

- The storefront, pricing page, and go-to-market (this builds the product, not the shop).
- Sticky-scroll Features variant (Layout 420 — scroll-driven JS): stretch, deferred.
- `already-covered` categories (Footers, Logos, Tables, Sidebars, Topbars, Stat Cards, etc.) — Vael
  already ships these; not rebuilt.
