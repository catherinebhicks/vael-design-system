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

### Changed
- **The repo is now the single Vael package** — code + tokens + fonts + docs + the
  story site + the slide library + the case-study narrative, all in one place.
- **Local folder renamed** `~/dev/vael-ref` → `~/dev/vael-design-system` to match the
  GitHub repo name.
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
