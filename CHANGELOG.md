# Changelog

All notable changes to Vael are recorded here. Format follows
[Keep a Changelog](https://keepachangelog.com/). The library is **pre-1.0 and
unpublished** (`package.json` is `private: true`, consumed from source, no npm
release and no git tags), so there are no versioned releases — entries below are
**dated development milestones** reconstructed from the git history and the build
sessions behind them, newest first.

Per-component history also lives in each component's Storybook **Docs** tab
(status label) — see Docs/Component Status. For the pre-repo origin story
(the Fermie build → the Vael reskin), see [`docs/history-fermie-to-vael.md`](docs/history-fermie-to-vael.md).

## 2026-10-07 — Public portfolio presentation and documentation

### Changed
- Reworked the root README into a reviewer-facing entry point: project ownership, self-directed scope, system architecture, and direct links to [Figma](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System), [Storybook](https://catherinebhicks.github.io/vael-design-system/), and the [case study](case-study/README.md).
- Added a case-study index that separates the master narrative, shorter reading cuts, focused essays, and supporting presentation specifications.
- Updated the documentation entry points and governance/history references to reflect the repository's public status. Removed stale private-repository instructions and local-machine references from selected public-facing documents.
- Clarified the boundary between Vael as a self-directed public project and proprietary production work that informed its design thinking.

### Why it matters
A design system is evaluated through its decision-making and adoption model as much as through its component catalog. The public entry points now make the token architecture, Figma-to-code workflow, accessibility approach, governance, and complex-product patterns easier to inspect.

### Scope
Documentation and presentation changes only; no component API, token, or package release is implied.

## Design decisions behind the July 2026 milestones

The following notes explain the rationale for the dated changes below. They are retrospective context, **not additional releases or independently verified outcomes**.

### Token and foundation architecture
- **Semantic tokens over one-off values.** The design-system architecture separates reusable scales from role-based values, allowing themes and components to evolve without requiring local overrides throughout a product.
- **Deliberate constraints.** An eight-step spacing scale, defined typography, state/focus tokens, and motion conventions reduce design drift and make component decisions easier to repeat.
- **Light and dark modes as system concerns.** Theme variants and semantic color roles make appearance a foundation-level decision rather than a screen-by-screen redesign.

### Component coverage and complex workflows
- **Coverage is not the same as maturity.** The July expansion filled functional gaps across inputs, feedback, navigation, data display, operational interfaces, and presentation surfaces. Component-status documentation remains important for distinguishing presence in the catalog from production readiness.
- **Data visualization needs more than one abstraction.** The micro/standard/advanced tiers provide different levels of complexity and dependency weight; the chart-selection guidance helps designers choose intentionally.
- **Enterprise states matter.** Patterns such as stale-data indicators, live values, inline editing, command bars, and dense grids address operational workflows that a marketing-oriented component kit may overlook.

### Design ↔ implementation workflow
- **Figma and Storybook serve different jobs.** Figma exposes foundations, component structure, and design decisions; Storybook exposes implementation behavior and usage guidance. Component links and the cross-surface audit help reviewers trace between them.
- **Documentation travels with components.** Co-located guidance on states, usage, accessibility, and implementation makes the system easier to maintain than a disconnected visual inventory.

### Accessibility and verification
- **Accessibility is both design guidance and testable behavior.** The July work combined usage guidance, hand-review, Storybook accessibility tooling, and fixes to concrete demo/component issues. This records the approach; it does not claim universal certification or that every future change is automatically compliant.
- **Build reliability is part of system usability.** Storybook build-memory adjustments, CSS linting, and CI accessibility checks support repeatable review.

### Governance and reuse
- **Extend rather than fork.** When a downstream surface exposes a missing pattern, the intended response is to improve Vael instead of inventing a product-specific design language.
- **History should explain tradeoffs.** See [the governance guide](docs/consuming-vael.md), [the origin/transition record](docs/history-fermie-to-vael.md), and [the case study](case-study/README.md) for the reasoning behind system decisions.

## 2026-07-17 — One Vael package · About section · cross-surface audit

### Added
- **`about/` story site** — folded in from the standalone `catherinebhicks/vael-case-study`
  repo (now archived) so the whole package lives in one repo; the "AI-as-build-method"
  walkthrough that links out to Storybook, Chromatic, and Figma.
- **`docs/` front door** — `README.md` (index), `history-fermie-to-vael.md` (the
  Fermie→Vael build history, sourced from the recovered FermieDS ADRs),
  `downstream.md` (where Vael is consumed), and `consuming-vael.md` (the
  "extend Vael, don't fork it" governance rule merged from the AFD website work).
- **`slide-library/`** — moved in from the standalone `vael-slide-library` repo,
  including the full **92-slide deck** at `slide-library/deck/Vael-Slide-Library.pptx`.
- **Marketing components** — `Footer`, and `CaseStudyCard` / `PostCard` / `ServiceCard`
  (`src/components/WorkCards/`), each with a Storybook story + Guidelines MDX.
- **Figma `RadarChart` page** — radar/spider glyph + full docs panel, giving the
  RadarChart component a Figma home to match its Storybook story.
- **Figma file Cover** — a title-slide layout (blueprint grid, mono wordmark, meta
  footer) that also serves as the file thumbnail.
- **Case-study narrative extension** — extended the narrative (now the About section)
  with a **third movement** ("the method became how I run it") plus **four standalone
  deep-dive pieces** (design↔code loop, governance rulebook, taste/craft,
  built-to-be-picked-up). Split `case-study/` into `narrative/` (the story) +
  `landing/` (the site build). Facts refreshed to **27 → 44 → 103 components,
  226 stories / 251 docs**, 105 Figma pages.

### Changed
- **The repo is now the single Vael package** — code + tokens + fonts + docs + the
  story site + the slide library + the case-study narrative, all in one place.
- **Figma library restructured to one-page-per-component** (`Category / Component`),
  each with a co-located doc panel (props, do/don't, a11y, Storybook link) + a
  Dev-Mode description. Cross-surface audit cleanups: renamed 4 straggler pages into
  the convention (`Inputs / Button`, `Inputs / Selection Controls`, `Inputs / Text
  Field`, `Foundations / Icons`) and **promoted `PullQuote` + `SlideSection` from
  frame reps to real component nodes**.

### Fixed
- **Accessibility sweep** — accessible-usage stories, doc notes, and real demo fixes
  (aria-labels on isolated demos), with axe gating in CI.

### Verified
- Cross-surface audit: GitHub, GitHub Pages, Storybook (226 stories / 251 docs),
  Chromatic, and Figma all green and in alignment; no orphan components in either
  direction.

## 2026-07-16 — The big build (library expansion to full coverage)

### Added
- **3-tier data-viz system** — Micro (zero-dep SVG: Sparkline, StatBlock,
  SegmentMeter, MeterRow, WaffleChart, GaugeStat), Standard (`@mui/x-charts`),
  Advanced (Highcharts) + RadarChart; Patterns/Choosing a Chart guide.
- **Marketing/portfolio components (Tier D, 16)** — HeroBanner, CtaBar, PreviewCard,
  IconListItem, PersonaCard, Testimonial, LogoWall, QRBlock, TagCloud, ImageSlot,
  Comparison, ProcessDiagram, AnnotatedScreen, Carousel, SpotlightTour, Sitemap
  (+ autodocs stories).
- **Tier A components** — BottomNavigation, SplitButton, Infotext, Tag, EmptyState,
  Descriptions, Callout, SidePanel, HorizontalTimeline, NotificationCenter.
- **Operational batch** — InlineEdit, CodeBlock, LiveValue, StaleDataIndicator,
  AlarmBadge, CommandBar, DensityProvider, PrintPage.
- **Wishlist components** — Divider, Link, Popover (#14/#15/#16); Rating, Mark,
  CopyButton (#26/#44/#46); SegmentedControl, StatusBadge (#49/#50).
- **Fermie parity** — SpeedDial, ImageList, TreeView, Date/Time Pickers,
  CircularProgress; first-class controlled Menu story (anchorEl pattern, #23).
- **Foundation tokens** — border, focus-ring, mono/code type, z-index, state-layer,
  surface, shape scale, reduced-motion (`vael/foundation-tokens.ts`, #67–74).
- **Bundled fonts in-repo** — `fonts/` with IBM Plex Sans/Mono + FontAwesome 7 Free
  (+ licenses) for plug-and-play install/handoff; a full FA7 Free SVG glyph set,
  a Vael Icons generator, and a Figma icon build emitter targeting the DS Icons page.
- **Tooling** — stylelint (`lint:css`), Storybook a11y test-runner (axe) + CI;
  `@storybook/addon-designs` embeds linking stories to their Figma frames.
- **Docs** — 56 new Guidelines MDX pages documenting the previously-undocumented
  components; Design Tokens, Browser Support, Data Formatting, Accessibility,
  Component Status, Error Messages, Token Usage, Motion Principles.

### Fixed
- Genuine component a11y defects surfaced by the axe audit.
- `build-storybook` OOM — raised the Node heap to 4 GB.

## 2026-07-13

### Added
- GapAnalysis: Marketing & website-surfaces section (AFD site coverage) — the pass
  that exposed the presentation/case-study axis as a blind spot.

## 2026-07-03 — Repo seed

### Added
- Initial Storybook + component library (merge of `storybook-sections`) — the
  reskinned, anonymized MUI v7 library in the Blueprint / IBM Plex Mono aesthetic
  that this repo starts from. Everything above builds on this foundation.

---

## Background (before this repo)

Vael did not start here. It began as a production design system for a bioscience
startup (the "Fermie" build), was carried forward after being shelved, and was
rebuilt in the open as this package. That arc — MUI as the base (ADR001), two-tier
tokens (ADR004), 8-step spacing (ADR002), WCAG 2.1 AA (ADR011), and what was
deliberately left undocumented — is written up in
[`docs/history-fermie-to-vael.md`](docs/history-fermie-to-vael.md), with the full
narrative in [`case-study/`](case-study/) and [`about/`](about/).

## Conventions
- One entry per user-facing change, grouped Added / Changed / Deprecated / Removed / Fixed.
- Reference the GitHub issue (`#NN`) where relevant.
- Dated milestones stand in for releases while the package is pre-1.0 and unpublished;
  when it ships a version, roll the newest date into a `[x.y.z]` heading.
