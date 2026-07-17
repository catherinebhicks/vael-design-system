# Changelog

All notable changes to Vael are recorded here. Format follows
[Keep a Changelog](https://keepachangelog.com/); the library is pre-1.0 so minor
versions may include breaking changes (noted explicitly).

Per-component history also lives in each component's Storybook **Docs** tab
(status label) — see Docs/Component Status.

## [Unreleased]

### Added
- **3-tier data-viz system** — Micro (zero-dep SVG: Sparkline, StatBlock,
  SegmentMeter, MeterRow, WaffleChart, GaugeStat), Standard (`@mui/x-charts`),
  Advanced (Highcharts) + RadarChart; Patterns/Choosing a Chart guide.
- **Marketing/portfolio components** — HeroBanner, CtaBar, PreviewCard,
  IconListItem, PersonaCard, Testimonial, LogoWall, QRBlock, TagCloud, ImageSlot,
  Comparison, ProcessDiagram, AnnotatedScreen, Carousel, SpotlightTour, Sitemap.
- **Tier A components** — BottomNavigation, SplitButton, Infotext, Tag, EmptyState,
  Descriptions, Callout, SidePanel, HorizontalTimeline, NotificationCenter.
- **Foundation tokens** — border, focus-ring, mono/code type, z-index, state-layer,
  surface, shape scale, reduced-motion (`vael/foundation-tokens.ts`).
- **Parity components** — SpeedDial, ImageList, TreeView, Date/Time Pickers,
  CircularProgress; Menu (controlled) story.
- **Tooling** — stylelint (`lint:css`), Storybook a11y test-runner (axe) + CI.
- **Docs** — Design Tokens, Browser Support, Data Formatting, Accessibility,
  Component Status, Error Messages, Token Usage, Motion Principles.

### Changed
- Highcharts chart stories regrouped under "Data Viz/Charts (Advanced · Highcharts)".

## Conventions
- One entry per user-facing change, grouped Added / Changed / Deprecated / Removed / Fixed.
- Reference the GitHub issue (`#NN`) where relevant.
- Move Unreleased → a dated version on each published tag.
