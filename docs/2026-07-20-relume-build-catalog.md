# Relume → Vael Build Catalog

**Date:** 2026-07-20
**Author:** Catherine (with Claude)
**Status:** Build roadmap — variant-level, sourced from the full Relume kit
**Supersedes:** the first-pass category audit (`2026-07-19-relume-section-audit.md`) — that was a keep/skip audit against an assumed buyer; this is a forward build catalog against the defined product below.

---

## The product this feeds

**Vael, productized** — a **modular design-system product**, sold à la carte *and* as a bundle:
Figma UI kit + React/MUI code library + starter site templates + full codebase + editing/usage docs.

- **Primary buyer:** a designer building a standout **portfolio**. Secondary: any designer/freelancer (incl. Catherine's own client work). Broad enough anyone can use it.
- **Principles:** skinnability is first-class (MUI); design↔code parity (Figma *and* code); each unit cleanly separable so it can sell alone; docs for everything.

## What this is

**Not** keep/skip of Vael — *everything Vael already ships stays*. This is the forward **build list**: what to build next, sourced from Relume, to reach that product. Every one of the 58 real Relume categories was enumerated at the variant level (via the Figma REST API) and judged against the product lens, with screenshots of the specific variants worth building.

- **build-new** — a genuine gap; build it.
- **build-wrapper** — Vael has the card/atom; build the assembled section around it.
- **already-covered** — Vael already ships it well (esp. app components — Vael's *coded* versions beat Relume's wireframes); don't rebuild.

Screenshots live in [`relume-catalog-shots/`](./relume-catalog-shots/).

## Tally

| | Count |
|---|---|
| Categories audited | **58** |
| **build-new** (gaps) | 25 |
| **build-wrapper** (section around existing card) | 21 |
| **already-covered** (Vael wins — don't rebuild) | 12 |
| Specific variants recommended to build | **121** |

**Priority tiers below** are ranked by portfolio-relevance × verdict × standalone-SKU potential.


---

## Tier 1 — Build first (portfolio-critical)

High portfolio-relevance gaps. These are what make Vael look complete *and* let a designer build a standout portfolio site. Start here.

| Category | Grp | Variants | Verdict | SKU | # to build |
|---|---|--:|---|---|--:|
| Features | Mark | 682 | build-new | strong | 5 |
| Hero Headers | Mark | 130 | build-new | strong | 4 |
| Portfolio Headers | Mark | 12 | build-new | strong | 3 |
| Navbars | Mark | 32 | build-new | strong | 3 |
| Pricing | Mark | 57 | build-new | strong | 4 |
| Gallery | Mark | 27 | build-new | strong | 3 |
| Long Form Content Sections | Mark | 32 | build-new | strong | 4 |
| Cookie Consent | Mark | 5 | build-new | strong | 2 |
| Product List Sections | Ecom | 12 | build-new | strong | 3 |
| Blog Post Headers | Mark | 5 | build-new | ok | 2 |
| CTA | Mark | 67 | build-wrapper | strong | 3 |
| FAQ | Mark | 14 | build-wrapper | strong | 2 |
| Testimonials | Mark | 67 | build-wrapper | strong | 4 |
| Stats Sections | Mark | 60 | build-wrapper | strong | 3 |
| Portfolio Sections | Mark | 23 | build-wrapper | strong | 4 |
| Blog Sections | Mark | 36 | build-wrapper | strong | 3 |
| Contact | Mark | 30 | build-wrapper | strong | 3 |
| Page Headers | Appl | 5 | build-wrapper | strong | 3 |
| Grid Lists | Appl | 10 | build-wrapper | ok | 3 |

#### Features · `Marketing` · 682 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Trivial. Pure MUI layout primitives (Box/Grid/Stack/Typography/Button) with an image/icon slot; 100% token-driven, no bespoke visuals. Rebrands for free. Only mild risk: sticky-scroll-steps needs a small scroll-driven behavior (JS), so keep that variant optional.
*Why:* Features sections are the #1 marketing block every portfolio/landing page needs; Vael has the atoms but no assembled section — the single biggest, most sellable section gap, and effortlessly skinnable.

**Build these variants:**
- **Layout 1 — Image + Text Split (single image, alternating L/R)** — The universal workhorse: 50/50 heading+body+dual-button beside one image. Alternating imageSide prop + image-vs-video slot (Layout 158/577) collapses dozens of Relume variants into one component. Highest-frequency portfolio section. · [screenshot](relume-catalog-shots/features/imagetext-single-Layout1.png)
- **Layout 629 — Feature Icon Grid (2/3/4-col icon + heading + body, light & dark)** — build-wrapper over Vael IconListItem/FeatureCard: intro heading + N-col grid of icon features. columns + divider + dark props absorb Layout 29/315 and the icon-grid family. Core 'what we offer' block. · [screenshot](relume-catalog-shots/features/s629.png)
- **Layout 240 — Feature Card Grid (2/3/4-col cards)** — build-wrapper: assembles the filed FeatureCard into the filed CardGrid. Card-per-feature with icon/heading/body/link, 2-4 columns. The most-reused portfolio 'features/services' layout after the split. · [screenshot](relume-catalog-shots/features/3col-cardgrid-Layout240.png)
- **Layout 10 — Split with Sub-feature List (image + stacked icon subheadings)** — Split hero-style section whose text column carries 2-4 icon+subheading rows (Vael IconListItem). Covers Layout 53/105 (bullet & 2-col subfeature) as props. Adds depth beyond the plain split for case-study detail sections. · [screenshot](relume-catalog-shots/features/imagetext-iconfeatures-Layout10.png)
- **Layout 524 — Bento / Mixed Feature Grid (one large card + smaller cards)** — The distinctive, portfolio-forward archetype: asymmetric bento of one feature card spanning 2 cells plus smaller cards, dark-capable. Reads as bespoke/modern — exactly what a standout-portfolio buyer reaches for. No Vael equivalent. · [screenshot](relume-catalog-shots/features/s524.png)

> *Also seen (fold in as props / defer):* Treat as prop-variants of the 5 above, not separate builds: video feature (Layout 158/577 = split with a video/play slot), layered/overlapping image cluster (Layout 472 = image slot swapped for an ImageList/collage), horizontal feature rows (Layout 682 = big image left + stacked rows right), feature+stats (Layout 25 = split composed with Vael StatBlock), centered CTA banner (Layout 35 — overlaps Vael CtaBar, already-covered). One genuinely separate archetype worth a STRETCH build: sticky-scroll steps (Layout 420, tall pinned column + advancing panels) — high-impact for portfolios but needs scroll-driven JS; ProcessDiagram/HorizontalTimeline partially cover the static case, so defer. Net: 5 canonical section components + ~4 documented props reproduce the practical span of all 682.

#### Hero Headers · `Marketing` · 130 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Trivial in MUI/Vael: heading + body + Button pair + image slot; all tokens, no custom logic. Background-image overlay variant needs an image-scrim token but that is standard.
*Why:* The #1 above-the-fold section for both landing pages and portfolio homepages; 130 variants is a flagship SKU and Vael only has one hero.

**Build these variants:**
- **Hero Header / 1 (split — text left, image right)** — The workhorse split hero every landing/portfolio home needs; Vael's single HeroBanner does not cover the side-by-side layout. · [screenshot](relume-catalog-shots/hero-headers/hero-1-split.png)
- **Hero Header / 9 (centered heading + CTA)** — Minimal centered hero — the cleanest, most-reused portfolio opener; pairs with any theme. · [screenshot](relume-catalog-shots/hero-headers/hero-9-centered.png)
- **Hero Header / 15 (split heading + copy, full-width image band below)** — Editorial hero that anchors a big project/brand image beneath the headline — strong for design portfolios. · [screenshot](relume-catalog-shots/hero-headers/hero-15-form.png)
- **Hero Header / 145 (full-bleed background image + overlay)** — Immersive image-background hero with text scrim; the dramatic option a portfolio buyer expects and Vael lacks entirely. · [screenshot](relume-catalog-shots/hero-headers/hero-145-bgimage.png)

> *Also seen (fold in as props / defer):* 130 variants — build a spanning set of ~6-8 archetypes (split L/R, centered, bg-image overlay, image-band, with logo strip, with stats). Keep them as a HeroBanner variant family rather than separate components.

#### Portfolio Headers · `Marketing` · 12 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Easy: project title + intro + tag chips + a Client/Role/Date/Website meta table + image. Meta table reuses Descriptions pattern; chips reuse Badge/Chip.
*Why:* Bullseye for the PRIMARY buyer — the project/case-study detail page header with a metadata table is the single most portfolio-specific section in the whole cluster and Vael has nothing for it.

**Build these variants:**
- **Portfolio Header / 1 (centered project title + tags)** — Clean minimal project opener; the default case-study header. · [screenshot](relume-catalog-shots/portfolio-headers/pf-1-centered.png)
- **Portfolio Header / 5 (title + intro + Client/Role/Date/Website meta table)** — The signature portfolio header — project meta table is exactly what designers need and no Vael component covers it. · [screenshot](relume-catalog-shots/portfolio-headers/pf-5-meta.png)
- **Portfolio Header / 8 (full-bleed image + overlaid title + meta table, dark)** — Immersive hero-image project header with overlaid meta; premium look for a featured project. · [screenshot](relume-catalog-shots/portfolio-headers/pf-8-dark-meta.png)

> *Also seen (fold in as props / defer):* 12 variants = title placement (centered/left) x meta-table presence x image treatment (inline/full-bleed/none) x light/dark. Ship as one ProjectHeader with a meta-table slot.

#### Navbars · `Marketing` · 32 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* High — logo slot, link list, CTA buttons, dropdown/mega-menu panels all map cleanly to MUI AppBar+Menu+Drawer; theming trivial. Risk: mega-menu + mobile drawer interaction states need real coded logic, more than a static wrapper.
*Why:* Marketing Navbar is an explicit known gap and the single most-used section on any portfolio or client site — highest-leverage build in this cluster.

**Build these variants:**
- **Navbar / 1 (simple links + dual CTA)** — The default marketing header every portfolio/site needs: logo, inline links, ghost+solid CTA, mobile hamburger. This is the KNOWN GAP baseline. · [screenshot](relume-catalog-shots/navbars/navbar-01-simple.png)
- **Navbar / 14 (dropdown + mega-menu)** — Adds a dropdown submenu and an expanding mega-menu — covers content/product sites and shows interaction depth in a portfolio. · [screenshot](relume-catalog-shots/navbars/navbar-14-megamenu.png)
- **Navbar / 23 (rich mega-menu with product cards)** — Full-width mega-menu with image/product cards and full mobile drawer — flagship navbar for e-commerce/SaaS demos; strong standalone SKU. · [screenshot](relume-catalog-shots/navbars/navbar-23-expanded.png)

> *Also seen (fold in as props / defer):* Vael's AppBar/Navigation are app-shell chrome (dashboard rails), NOT a public marketing header. Build a distinct marketing Navbar; 3 variants cover ~90% of the 32. A themeable simple→mega-menu family sells on its own and anchors every starter template.

#### Pricing · `Marketing` · 57 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Very high — pure MUI Card/Grid/Chip/Switch/List composition, zero bespoke visuals; re-themes cleanly via tokens. No risk.
*Why:* Named GAP; every SaaS/service/freelance portfolio needs a pricing section and Vael ships nothing — highest-leverage marketing build in the cluster.

**Build these variants:**
- **Pricing / 5 / (three-tier cards)** — The canonical Basic/Business/Enterprise three-column tier grid — the single most-used pricing pattern; must-have anchor variant. · [screenshot](relume-catalog-shots/pricing/three-tier-cards.png)
- **Pricing / 27 / (monthly-yearly toggle + feature matrix)** — Adds the billing-period Switch and a full feature comparison matrix across tiers — the interactive piece that shows off Vael's coded toggle + table parity. · [screenshot](relume-catalog-shots/pricing/comparison-table.png)
- **Pricing / 1 / (single plan split)** — One-plan split layout (key features left, price card right) — ideal for freelancers/one-offer portfolios where a 3-tier grid is overkill. · [screenshot](relume-catalog-shots/pricing/single-plan.png)
- **Pricing / 22 / (tiered feature matrix, no toggle)** — Dense feature-category comparison table across 3 tiers — sells as the 'enterprise pricing' SKU and reuses Vael Table primitives. · [screenshot](relume-catalog-shots/pricing/tiered-toggle.png)

> *Also seen (fold in as props / defer):* 57 variants collapse to ~4 archetypes (single-plan card, tier-card grid, feature-matrix table, toggle+matrix). Build those 4 as configurable variants rather than 57 one-offs; the price card itself is a reusable atom worth filing (PriceCard).

#### Gallery · `Marketing` · 27 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Easy — MUI ImageList (standard/quilted/masonry variants) + theme radius/gap; lightbox uses existing Dialog. No risk.
*Why:* Gallery is an explicitly known GAP and is portfolio-critical for showing visual work; the grid/masonry/lightbox variants have no Vael equivalent.

**Build these variants:**
- **Gallery / 6 (uniform image grid)** — Clean heading + uniform image grid with click-to-lightbox — the default 'show my work' gallery Vael is missing (listed gap). · [screenshot](relume-catalog-shots/gallery/gallery-6-uniform-grid.png)
- **Gallery / 22 (masonry / mixed-size grid)** — Mixed-aspect masonry — the most portfolio-flattering layout for screenshots/photography; distinct from the uniform grid. · [screenshot](relume-catalog-shots/gallery/gallery-22-masonry-grid.png)
- **Gallery / 1 (featured single / hero image)** — Full-width featured image block for a single hero visual — the simplest image section, pairs with the grids. · [screenshot](relume-catalog-shots/gallery/gallery-1-featured-single.png)

> *Also seen (fold in as props / defer):* The many carousel variants (13, 18, 25, 27, etc.) are already-covered by Vael's Carousel + Card — do NOT rebuild those. Add a lightbox (built on Vael Dialog) as the differentiating feature of the new Gallery section.

#### Long Form Content Sections · `Marketing` · 32 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Easy — prose typography, headings, blockquotes and lists all bind to the MUI theme; the TOC sidebar is a sticky nav. No risk.
*Why:* A rich-text/article body + TOC layout is exactly what the primary buyer needs to write portfolio case studies, and Vael ships only the atoms, not the assembled body.

**Build these variants:**
- **Content / 30 (full article w/ sticky TOC + share)** — The flagship long-read: sticky table-of-contents, intro, inline images, lists, conclusion, share bar — exactly a case-study writeup template. · [screenshot](relume-catalog-shots/long-form-content-sections/content-30-full-article-toc-share.png)
- **Content / 13 (centered rich-text block)** — Clean centered prose with label + large image — the reusable rich-text renderer that everything else composes from. · [screenshot](relume-catalog-shots/long-form-content-sections/content-13-centered-richtext.png)
- **Content / 27 (TOC sidebar + heading hierarchy)** — Left table-of-contents anchored to H2/H3/H4 sections — the navigable documentation/case-study layout Vael lacks. · [screenshot](relume-catalog-shots/long-form-content-sections/content-27-toc-headings.png)
- **Content / 1 (heading + two-column prose + image)** — Compact intro/overview block (heading left, prose + image right) — the 'summary' section that opens a case study. · [screenshot](relume-catalog-shots/long-form-content-sections/content-1-heading-prose-image.png)

> *Also seen (fold in as props / defer):* Best delivered as one 'Rich Text / Prose' renderer (typography styles for h2-h4, p, ul/ol, blockquote, figure/caption, code) plus a TOC wrapper and an optional media embed (video variant 21). Sells cleanly as a 'Case Study / Blog body' SKU.

#### Cookie Consent · `Marketing` · 5 variants · **build-new** · portfolio 🟢 High · SKU strong
> **Kept in Tier 1 (Catherine, 2026-07-20):** needed for the broader **non-portfolio / client-work** initiative — every deployed client site ships a consent banner. Not portfolio-differentiating, but a required, universally-reused SKU for the "useful to anyone" breadth.

*Skinnability:* High — card/bar + Dialog + Switch toggles, all MUI; re-themes cleanly. Note: it's UI only, not a real consent-management backend — document that clearly.
*Why:* Genuine gap and universally needed — every real site (including a deployed portfolio) ships a cookie banner, making this a self-contained, high-utility SKU.

**Build these variants:**
- **Cookie / 1** — Compact corner consent card (Accept / Decline / Preferences) PLUS the full 'Manage consent by category' preferences modal with per-category toggles — the complete, spec-correct pattern every deployed site needs. · [screenshot](relume-catalog-shots/cookie-consent/01-banner.png)
- **Cookie / 4** — Full-width bottom bar variant with a simpler checkbox-list preferences modal — the alternate placement; covers sites that want a bar instead of a corner card. · [screenshot](relume-catalog-shots/cookie-consent/04-bar.png)

> *Also seen (fold in as props / defer):* 5 variants = 2 placements (corner card vs full-width bar) × preferences-modal density. Build one banner (with card+bar placement prop) plus one category-preferences modal with Switch toggles. Persist choice to localStorage in the demo; label explicitly as presentation-layer, not a legal CMP.

#### Product List Sections · `Ecommerce` · 12 variants · **build-new** · portfolio 🟢 High · SKU strong
> **Kept in Tier 1 + build GENERICALLY (Catherine, 2026-07-20):** don't build this as ecommerce-only. Strip the price/cart and it's a **filterable card/thumbnail grid** — reusable as a **portfolio project list**, resource/download grid, or shop. Build the base as a generic `ItemGrid` (image/title/meta/link + `columns` + optional filter/View-all), with priced `ProductCard` + Add-to-cart + carousel as *opt-in props*. That makes one component serve the portfolio buyer AND the ecommerce case — and it overlaps `CardGrid`/Gallery, so reconcile those into one grid family when building.

*Skinnability:* Easy in Vael/MUI: builds on the existing Card atom + image + Typography + Button; price/variant are just text tokens, rating optional. No skinning risk — fully token-driven.
*Why:* Ecommerce is a first-class product group and a designer's portfolio often includes a shop case study; Vael has a generic Card but no priced ProductCard or assembled product grid/carousel section — a clean, sellable gap. **Build it generic (see note) so it doubles as a portfolio project grid.**

**Build these variants:**
- **Product / 1** — Canonical product grid: tagline+heading left, View-all top-right, 4-col responsive grid of ProductCards (image/name/variant/price) collapsing to 2-col mobile — the base ProductGrid section. · [screenshot](relume-catalog-shots/product-list-sections/product-1.png)
- **Product / 3** — Centered-heading variant with View-all at the bottom — an alternate section header layout that reuses the same ProductCard, giving buyers two composition options. · [screenshot](relume-catalog-shots/product-list-sections/product-3.png)
- **Product / 6** — Horizontal product carousel with an interactive ProductCard that includes an Add-to-cart button + arrow/dot controls — the interactive/ecommerce-active version portfolios use for a shop showcase. · [screenshot](relume-catalog-shots/product-list-sections/product-6.png)

> *Also seen (fold in as props / defer):* One ProductCard component (image, name, variant, price, optional rating + Add-to-cart) unlocks all 12 variants, which differ only in grid columns, header placement, and grid-vs-carousel. Ship as ProductCard + ProductGrid + ProductCarousel wrappers. Variants 6 and 12 are the same add-to-cart carousel family — build once.

#### Blog Post Headers · `Marketing` · 5 variants · **build-new** · portfolio 🟢 High · SKU ok
*Skinnability:* Easy: breadcrumb + title + author/avatar + date + read-time + social-share row + hero image. Reuses Avatar, Breadcrumbs; only the meta/share row is new assembly.
*Why:* The article/case-study detail header — high value because it's the top of every long-form portfolio case study and blog post, which Vael has no section for.

**Build these variants:**
- **Blog Post Header / 3 (split — title/meta left, image right)** — Compact split article header keeps the hero image beside the title; great for case-study intros. · [screenshot](relume-catalog-shots/blog-post-headers/bp-3-split.png)
- **Blog Post Header / 5 (full-bleed dark image + centered title overlay)** — Dramatic immersive article opener; the premium look for a featured case study. · [screenshot](relume-catalog-shots/blog-post-headers/bp-5-dark.png)

> *Also seen (fold in as props / defer):* Also worth building variant 1 (centered title + author row + full-width image below) as the default. All 5 share one meta/share sub-component.

#### CTA · `Marketing` · 67 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* CtaBar (compact bar only — not the full-width CTA section family)
*Skinnability:* High — heading + subtext + button row / email form / side image, all composed from Vael Button, TextField, SectionHeading. Straightforward themeable layouts; low risk.
*Why:* 67 variants of full-width CTA sections vs Vael's single compact CtaBar — a huge, high-use gap; the closing section of nearly every portfolio/landing page.

**Build these variants:**
- **CTA / 1 (centered heading + dual buttons)** — The canonical full-width closing CTA section — centered heading, supporting text, primary+secondary buttons. Vael only has the compact CtaBar; this large section is the real gap. · [screenshot](relume-catalog-shots/cta/cta-01.png)
- **CTA / 5 (heading + inline email signup)** — Centered CTA with inline email-capture form + fine print + logo row — the lead-gen workhorse for landing pages. · [screenshot](relume-catalog-shots/cta/cta-05.png)
- **CTA / 34 (split text + image CTA)** — Text-left / image-right (and inverse) CTA section — the most portfolio-friendly layout with visual weight; anchors template pages. · [screenshot](relume-catalog-shots/cta/cta-34-image.png)

> *Also seen (fold in as props / defer):* Build 3 wrapper layouts (centered-buttons, centered-email, split-image) reusing existing Vael Button/TextField/SectionHeading; the 67 collapse to these plus background/alignment props. Strong standalone SKU and template anchor.

#### FAQ · `Marketing` · 14 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* Accordion (atom only, not the assembled section)
*Skinnability:* Very high — wraps existing Vael Accordion + SectionHeading + CtaBar; token-driven, no risk.
*Why:* Named GAP: Vael has the Accordion atom but no assembled FAQ SECTION; nearly every portfolio/marketing page includes one, so the wrapper is high-value and cheap.

**Build these variants:**
- **FAQ / 1 / (accordion + contact CTA)** — Single-column accordion list with heading and a 'Still have questions? / Contact' CTA footer — the default FAQ section; wraps Vael Accordion directly. · [screenshot](relume-catalog-shots/faq/faq-1.png)
- **FAQ / 11 / (two-column static grid + contact CTA)** — Two-column grid of always-expanded Q&A cards — a distinct layout for long FAQ lists / dense portfolio process pages; not just an accordion re-skin. · [screenshot](relume-catalog-shots/faq/faq-contact.png)

> *Also seen (fold in as props / defer):* 14 variants reduce to two archetypes: accordion-list (wrap Accordion) and static two-column grid (wrap Card/Grid). Build both plus a left-heading/right-accordion split variant if cheap. Reuse SectionHeading + CtaBar for the contact footer.

#### Testimonials · `Marketing` · 67 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* Testimonial, Carousel, PullQuote (atoms/single-quote only)
*Skinnability:* High — pure MUI Typography + Grid/Card + Rating; all color/spacing tokenized. Video variant needs a light media wrapper but no MUI risk.
*Why:* Vael ships the single Testimonial card + Carousel + PullQuote atoms, but not the assembled multi-testimonial SECTIONS (grid, media grid, video, featured-quote wall) that portfolios lean on hardest.

**Build these variants:**
- **Testimonial / 12 (three-up card grid + slider)** — The workhorse social-proof section: 3 quote cards with rating/avatar/logo in a grid that collapses to a carousel — the single most-used testimonial layout and the assembled version Vael's Testimonial atom doesn't provide. · [screenshot](relume-catalog-shots/testimonials/t-grid-12.png)
- **Testimonial / 45 (image + quote grid)** — Portrait/media-led testimonial cards — visually rich, ideal for a portfolio's client-praise wall where a face sells more than text. · [screenshot](relume-catalog-shots/testimonials/t-45.png)
- **Testimonial / 52 (video testimonial, 2-up)** — Video-thumbnail testimonial layout is a differentiated, higher-value SKU no Vael atom covers; strong for case-study and agency sites. · [screenshot](relume-catalog-shots/testimonials/t-52.png)
- **Testimonial / 1 (single featured quote + logo, carousel)** — Large centered pull-quote with company logo and slider dots — the 'hero quote' band; distinct from Vael's static PullQuote because it's a full multi-item section. · [screenshot](relume-catalog-shots/testimonials/t-single-01.png)

> *Also seen (fold in as props / defer):* 67 variants; recommend building 4 assembled section layouts on top of the existing Testimonial atom rather than duplicating the atom.

#### Stats Sections · `Marketing` · 60 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* StatCard, StatBlock (atoms only)
*Skinnability:* High — Grid + Typography + optional Card border; fully tokenized. Image/video variants add a media slot but no MUI constraint.
*Why:* Vael has StatCard/StatBlock atoms but the assembled marketing stats BAND is a named gap; these wrappers turn the atom into the impact-metric sections portfolios and case studies rely on.

**Build these variants:**
- **Stats / 1 (heading + 3-up percent band)** — The canonical impact band — section heading/CTA over a row of big-number stats; explicitly a known Vael gap ('Stats band') and the metric strip every case study wants. · [screenshot](relume-catalog-shots/stats-sections/s-band-01.png)
- **Stats / 24 (stats column + image)** — Big stats paired with a supporting image — portfolio-strong for 'results' sections that need visual weight alongside the numbers. · [screenshot](relume-catalog-shots/stats-sections/s-24.png)
- **Stats / 52 (boxed stat-card row)** — Bordered stat cards in a row under a long heading — the clean, contained variant that reskins well for dashboards and B2B sites; complements the borderless band. · [screenshot](relume-catalog-shots/stats-sections/s-52.png)

> *Also seen (fold in as props / defer):* 60 variants (band, split-layout, +image, +video, boxed). A video variant (Stats/36) is a nice optional 4th but the three above cover the core.

#### Portfolio Sections · `Marketing` · 23 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* CaseStudyCard, PreviewCard, PostCard, CardGrid (filed/unbuilt)
*Skinnability:* Easy — cards are already tokenized MUI components; the wrapper only adds a responsive grid/rows layout driven by theme spacing. No risk.
*Why:* THE core deliverable for the primary buyer (designer building a portfolio); Vael has the project cards but no assembled portfolio SECTION.

**Build these variants:**
- **Portfolio / 6 (two-column project grid w/ tags)** — The workhorse portfolio grid — heading + 2-col cards with tags and 'View project'; the single most-used portfolio layout. · [screenshot](relume-catalog-shots/portfolio-sections/portfolio-6-two-col-grid.png)
- **Portfolio / 15 (alternating feature rows)** — Editorial alternating text/large-image rows — the premium 'featured case study' look that makes a portfolio feel bespoke. · [screenshot](relume-catalog-shots/portfolio-sections/portfolio-15-alternating-feature-rows.png)
- **Portfolio / 10 (masonry / varied grid)** — Masonry grid for visual-heavy portfolios; distinct layout logic not derivable from the plain grid, so worth its own wrapper. · [screenshot](relume-catalog-shots/portfolio-sections/portfolio-10-masonry-grid.png)
- **Portfolio / 1 (single-column large feature list)** — Big stacked full-width project blocks — ideal for a designer with a few flagship projects to showcase at large scale. · [screenshot](relume-catalog-shots/portfolio-sections/portfolio-1-feature-list.png)

> *Also seen (fold in as props / defer):* Dark-themed and button-heavy variants (18, 23) are skins/atom swaps of these four, not separate builds. Reuse CaseStudyCard/PreviewCard inside; ship the unbuilt CardGrid as the base layout primitive.

#### Blog Sections · `Marketing` · 36 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* PostCard, PreviewCard, FeaturedPost (filed/unbuilt), CardGrid (filed/unbuilt), SectionHeading
*Skinnability:* Very high — pure MUI Card + Grid + Typography; images/categories/meta all token- and prop-driven. No risk.
*Why:* Vael ships the post CARDS but not the assembled blog-index SECTION — the #1 marketing surface a portfolio buyer needs (writing/case-study index).

**Build these variants:**
- **Blog / 33 (3-col grid + heading + View all)** — The canonical blog index: centered SectionHeading over a 3-up PostCard grid with a View-all button — the default every portfolio/blog page reuses. · [screenshot](relume-catalog-shots/blog-sections/blog-33.png)
- **Blog / 63 (left intro + stacked featured list)** — Sticky left heading/CTA beside a vertical list of horizontal post cards — great for a compact 'Latest writing' rail on a homepage. · [screenshot](relume-catalog-shots/blog-sections/blog-63.png)
- **Blog / 36 (grid variant, alt meta layout)** — Second grid density/meta arrangement so the section flexes between magazine-style and minimal without a rebuild. · [screenshot](relume-catalog-shots/blog-sections/blog-36.png)

> *Also seen (fold in as props / defer):* 36 variants collapse to ~3-4 real layouts (grid, featured+list, split intro). Build the wrapper as a CardGrid/FeaturedPost composition so the filed-but-unbuilt atoms get delivered at the same time.

#### Contact · `Marketing` · 30 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* TextField (incl. multiline), Checkbox, Button, IconListItem — atoms exist; the assembled 'Contact us' SECTION does not
*Skinnability:* Very high — pure MUI form atoms + typography; re-themes trivially with the token set. Only risk is the optional embedded map (leave as a slot/placeholder, not a hard Google Maps dependency).
*Why:* Named Vael gap; portfolio-first buyers all need a Contact section, and Vael already ships every atom so it's a pure composition wrapper.

**Build these variants:**
- **Contact / 4** — Centered single-column 'Contact us' form (name/email/message/consent/submit) — the default section every portfolio and freelancer site needs; the highest-use wrapper. · [screenshot](relume-catalog-shots/contact/04-centered-form.png)
- **Contact / 11** — Split layout: form on the left, contact details (email/phone/office + Get Directions) on the right — the standard 'real business' contact section for client work. · [screenshot](relume-catalog-shots/contact/11-with-map.png)
- **Contact / 22** — Contact-method card row (Email / Live chat / Phone / Office) with no form — a clean 'ways to reach me' band; sells as a lightweight alternative and pairs with the form variants. · [screenshot](relume-catalog-shots/contact/22-contact-cards.png)

> *Also seen (fold in as props / defer):* 30 variants collapse to ~3 archetypes: centered form, split form+details, and details-only cards. Build those 3; the rest are cosmetic reflows. Offer the map as an image slot to avoid an external API dependency.

#### Page Headers · `Application` · 5 variants · **build-wrapper** · portfolio 🟢 High · SKU strong
*Wraps existing Vael:* PageHeader (FILED BUT UNBUILT) — atoms exist: Breadcrumbs, SectionHeading, Button, TextField, StatCard/Descriptions for meta row
*Skinnability:* High — text + Breadcrumbs + Button/TextField in a flex row; every value from theme, no bespoke styling. The banner-image variant just adds an image slot.
*Why:* Vael already filed PageHeader as a known gap; page headers are the single most-reused app section, high portfolio value and a clean standalone SKU.

**Build these variants:**
- **Page Header / 1 (breadcrumb + title + description + search + actions)** — The default app page header: breadcrumb, H1 title, supporting text, inline search and primary/secondary buttons — appears on nearly every product screen. Directly realizes Vael's unbuilt PageHeader. · [screenshot](relume-catalog-shots/page-headers/ph-1.png)
- **Page Header / 2 (with metadata row: Label / Status / Assignee / Created)** — Adds a metadata/attribute row under the title (label, status, assignee, date) — the detail/record header pattern; high reuse for CRM, project, and issue views. · [screenshot](relume-catalog-shots/page-headers/ph-2.png)
- **Page Header / 3 (banner image + header)** — Cover/banner image above the header block — the profile, portfolio-detail, and settings-hero variant; the one page-header shape that reads as portfolio-facing, not just app-utility. · [screenshot](relume-catalog-shots/page-headers/ph-3.png)

> *Also seen (fold in as props / defer):* 5 variants collapse to 3 shapes (plain, +meta row, +banner image) × responsive; the mobile stacking is already shown in every node.

#### Grid Lists · `Application` · 10 variants · **build-wrapper** · portfolio 🟢 High · SKU ok
*Wraps existing Vael:* Card, PersonaCard, CaseStudyCard, ImageList (CardGrid is filed but UNBUILT)
*Skinnability:* Easy — pure CSS grid wrapper around existing Vael cards; responsive columns via MUI Grid; fully themable
*Why:* The CARDS exist and CardGrid is already filed-unbuilt; build the responsive grid wrapper so portfolio project-grids and people-grids assemble in one component.

**Build these variants:**
- **Grid List / 4 (Latest Projects)** — Project cards (thumbnail + title + date + category + View project) in a responsive grid — this IS the portfolio project-grid a designer needs; the highest-value variant in the whole category. · [screenshot](relume-catalog-shots/grid-lists/gl-4.png)
- **Grid List / 1 (People you may know)** — Avatar + name + job title + Follow card grid — covers team/directory/people-grid; pairs with PersonaCard to give the CardGrid a second content shape. · [screenshot](relume-catalog-shots/grid-lists/gl-1.png)
- **Grid List / 6 (dense media grid)** — Tighter multi-row media/file grid — proves the wrapper handles high-density image-first layouts, useful for galleries and asset libraries. · [screenshot](relume-catalog-shots/grid-lists/gl-6.png)

> *Also seen (fold in as props / defer):* This is the concrete build that finally lands the filed CardGrid. Make it slot-agnostic (accepts any Vael card) with column-count + gap props so it doubles as portfolio grid, team grid, and product grid.


---

## Tier 2 — Build next (broad coverage)

Medium portfolio-relevance. Round out the marketing/app surface so the library feels complete for any designer/freelancer.

| Category | Grp | Variants | Verdict | SKU | # to build |
|---|---|--:|---|---|--:|
| Onboarding Forms | Appl | 17 | build-new | strong | 3 |
| Sign Up and Log In Pages | Appl | 17 | build-new | strong | 3 |
| Banners | Mark | 16 | build-new | ok | 2 |
| Links pages | Mark | 16 | build-new | ok | 2 |
| Event Sections | Mark | 37 | build-new | ok | 3 |
| Event Item Headers | Mark | 11 | build-new | ok | 2 |
| Application Shells | Appl | 16 | build-wrapper | strong | 3 |
| Headers | Mark | 27 | build-wrapper | ok | 2 |
| Blog Headers | Mark | 32 | build-wrapper | ok | 2 |
| Team | Mark | 22 | build-wrapper | ok | 3 |
| Timelines | Mark | 21 | build-wrapper | ok | 2 |
| Contact Modals | Mark | 6 | build-wrapper | ok | 1 |
| Category Filters | Ecom | 6 | build-wrapper | ok | 2 |
| Forms | Appl | 20 | build-wrapper | ok | 2 |

#### Onboarding Forms · `Application` · 17 variants · **build-new** · portfolio 🟡 Med · SKU strong
*Skinnability:* Good — composed of Stepper + fields + button-group chips, all themable; risk is the multi-screen state/flow logic, not styling
*Why:* Vael has the Stepper atom but no assembled onboarding-flow template; multi-step onboarding is core to the starter-site/template SKU and something buyers can't quickly wire themselves.

**Build these variants:**
- **Onboarding Form / 1 (single-panel stepper)** — Centered card with numbered step header, one question per screen, selectable chip options, Cancel/Next footer — the clean baseline SaaS onboarding template. · [screenshot](relume-catalog-shots/onboarding-forms/onb-1.png)
- **Onboarding Form / 6 (full 4-step flow)** — Complete Step 1→4 sequence (name/email → company → role → source) with progress checks and Get-started finish — a whole ready-to-ship onboarding wizard, high template value. · [screenshot](relume-catalog-shots/onboarding-forms/onb-6.png)
- **Onboarding Form / 10 (sidebar-progress layout)** — Left vertical-stepper + right form-panel variant — the enterprise onboarding layout; complements the centered single-panel to cover both dominant flow shapes.

> *Also seen (fold in as props / defer):* Highest-effort item in the cluster because it needs real step-state/navigation logic, but that's exactly why it sells as a template. Build the flow scaffold once (Stepper + panel + chip-group + footer) and provide 2 layout skins (centered card, sidebar progress).

#### Sign Up and Log In Pages · `Application` · 17 variants · **build-new** · portfolio 🟡 Med · SKU strong
*Skinnability:* Easy — form column + optional media/testimonial column over themable fields; trivial to rebrand
*Why:* Genuine gap: Vael has all the fields but no assembled auth page template, and auth screens are a top-selling standalone unit and a required part of the starter-site templates.

**Build these variants:**
- **Sign up / 1 (centered simple)** — Logo + centered Name/Email/Password + primary + social button — the minimal auth template every starter site needs; the default variant. · [screenshot](relume-catalog-shots/sign-up-and-log-in-pages/signup-1.png)
- **Sign up / 6 (split with testimonial)** — Two-column form + rotating testimonial/social-proof panel — the premium SaaS auth screen; strong standalone SKU and portfolio-demo piece. · [screenshot](relume-catalog-shots/sign-up-and-log-in-pages/signup-6.png)
- **Login / 1 (centered log-in)** — Matching centered log-in (email/password, remember, forgot, social) — you must ship the Login counterpart alongside Sign up for a complete auth set. · [screenshot](relume-catalog-shots/sign-up-and-log-in-pages/login-1.png)

> *Also seen (fold in as props / defer):* Ship as a small auth-template pack: centered-simple, split-with-media/testimonial, and the Login twin. Split-with-image column can reuse the same media slot pattern as the marketing hero.

#### Banners · `Marketing` · 16 variants · **build-new** · portfolio 🟡 Med · SKU ok
*Skinnability:* High — dismissible bar with heading/body/CTA/email is a thin themeable layout; maps to a Box + Vael Button/TextField. Low risk.
*Why:* Explicit known gap (Banner). Distinct from Vael's in-app Alert/Snackbar — this is a page-level marketing/announcement strip every site uses.

**Build these variants:**
- **Banner / 1 (announcement bar + email capture, dismissible)** — Top-of-page promo/announcement bar with inline email signup and close X — the classic marketing banner Vael is missing (Alert/Snackbar are in-app, not this). · [screenshot](relume-catalog-shots/banners/banner-01.png)
- **Banner / 9 (compact text + CTA cookie/promo bar)** — Minimal text + single CTA bar that doubles as a cookie/consent or promo strip; second essential shape. · [screenshot](relume-catalog-shots/banners/banner-09.png)

> *Also seen (fold in as props / defer):* 2 variants (email-capture + compact-CTA) cover the 16; mobile stacked layout confirmed. Medium not high because it's small and often optional on a portfolio.

#### Links pages · `Marketing` · 16 variants · **build-new** · portfolio 🟡 Med · SKU ok
*Skinnability:* Very high — avatar + stacked full-width link buttons + social row; pure Button/Stack, trivially rebrandable. No risk.
*Why:* A Linktree-style link-in-bio PAGE is a real deliverable for the personal-brand/portfolio buyer and Vael has no equivalent; fits the 'starter site templates' pillar of the product.

**Build these variants:**
- **Links 1 (avatar + categorized link buttons + newsletter + socials)** — The core link-in-bio template: profile header, grouped full-width link buttons, newsletter opt-in, social row — a complete sellable personal-hub page. · [screenshot](relume-catalog-shots/links-pages/links-1.png)
- **Links 11 (links + product/store grid)** — Same hub with a product/'shop my work' grid — covers the freelancer/creator who sells, widening the template's audience. · [screenshot](relume-catalog-shots/links-pages/links-11.png)

> *Also seen (fold in as props / defer):* Ship as a page TEMPLATE, not a component. 16 variants are mostly the same skeleton with/without store, media embed, or dark theme — 2 builds plus a dark skin covers the range.

#### Event Sections · `Marketing` · 37 variants · **build-new** · portfolio 🟡 Med · SKU ok
*Skinnability:* Easy — MUI Card + Chip (category/sold-out) + Button + date badge; no risk. Reuses Vael Carousel for the scrolling variants.
*Why:* Genuine gap: Vael has PostCard/Carousel but no event-specific card (date badge + location + RSVP + sold-out); broadly useful for conference/webinar/community/course sites and designer speaking sections.

**Build these variants:**
- **Event / 1 / (date-row list + filter tabs + RSVP)** — The canonical events feed: date-badge rows, Sold-out chip, category filter tabs, 'Save my spot' CTA — establishes the reusable EventCard-row atom. · [screenshot](relume-catalog-shots/event-sections/es1.png)
- **Event / 8 / (3-col event card grid)** — Image event cards with corner date badge + category + location + View event — the portfolio 'Talks & Events' grid; pairs with a View-all CTA. · [screenshot](relume-catalog-shots/event-sections/es8.png)
- **Event / 16 / (event card carousel)** — Same EventCard in a Vael Carousel with arrows/dots — covers the scrolling upcoming-events layout without new atoms. · [screenshot](relume-catalog-shots/event-sections/es16.png)

> *Also seen (fold in as props / defer):* 37 variants collapse to one EventCard atom rendered as list / card-grid / carousel + an inline-meta card variant (es26). Sold-out and category chips are token-driven states.

#### Event Item Headers · `Marketing` · 11 variants · **build-new** · portfolio 🟡 Med · SKU ok
*Skinnability:* Easy for layout; the countdown timer is a new stateful component (MUI + interval hook) but fully token-skinnable.
*Why:* Gap with a high-value new atom: Vael has no countdown timer. It's reusable well beyond events (launches, coming-soon, sale end) — worth building for the broad audience.

**Build these variants:**
- **Event Item Header / 1 / (split: title + countdown + email RSVP)** — Single-event detail hero with a live Days/Hours/Min/Secs countdown, 'X spots left' chip and email-capture RSVP — introduces a genuinely reusable Countdown atom. · [screenshot](relume-catalog-shots/event-item-headers/eih1.png)
- **Event Item Header / 5 / (full-width dark banner countdown)** — Dark image-overlay banner variant of the same countdown + inline email signup — doubles as a product launch / coming-soon header. · [screenshot](relume-catalog-shots/event-item-headers/eih5.png)

> *Also seen (fold in as props / defer):* Prioritize the Countdown timer as a separable primitive; the header layouts are thin wrappers around it plus a 'back to All events' breadcrumb (Vael Breadcrumbs).

#### Application Shells · `Application` · 16 variants · **build-wrapper** · portfolio 🟡 Med · SKU strong
*Wraps existing Vael:* AppBar, Navigation, Drawer, SidePanel, Layout (atoms only — no assembled shell)
*Skinnability:* High — pure MUI Box/Grid + AppBar/Drawer composition, all spacing/color from theme tokens; responsive collapse is the only real work, no skinning risk.
*Why:* Broad+portfolio product needs an app-side starter template counterpart to the marketing site templates; Vael has every atom but ships no assembled, responsive shell.

**Build these variants:**
- **Application Shell / 1 (topbar + page-header slot + main)** — Simplest canonical shell: sticky topbar (logo, nav, search, notifications, avatar) over a page-header slot + main content region, with a mobile drawer variant — the baseline dashboard scaffold. · [screenshot](relume-catalog-shots/application-shells/shell-1-sidebar-topbar.png)
- **Application Shell / 13 (left side-panel + main + topbar)** — Persistent left nav/side-panel beside main content with a topbar — the classic product-app layout; wires Drawer + AppBar + content that Vael only has as loose atoms. · [screenshot](relume-catalog-shots/application-shells/shell-13.png)
- **Application Shell / 5 (topbar + secondary content column + main)** — Two-column body (secondary/detail column + main) under a topbar — covers the split-pane / inbox-style dashboard, a distinct SKU from the single-column and left-nav shells. · [screenshot](relume-catalog-shots/application-shells/shell-5.png)

> *Also seen (fold in as props / defer):* 16 variants are permutations of {topbar-only \| +left nav \| +side panel \| +secondary column} × responsive. Build 3 canonical shells that compose existing Vael atoms rather than 16 near-dupes.

#### Headers · `Marketing` · 27 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* SectionHeading (atom) + PageHeader (filed, unbuilt)
*Skinnability:* Very easy: tagline + heading + body + Button pair, light/dark. This is exactly the filed PageHeader; Vael already has all the atoms.
*Why:* These are compact interior-page headers (About/Services/Contact intros) — the assembled PageHeader Vael filed but never built.

**Build these variants:**
- **Header / 44 (tagline + short heading + copy + buttons, left, light)** — The default interior-page header; realizes the filed PageHeader so every non-home page has a consistent top band. · [screenshot](relume-catalog-shots/headers/hdr-44-light.png)
- **Header / 58 (same, dark theme)** — Dark counterpart proves the skin swap and covers dark-themed interior pages; sells as one PageHeader with a mode prop. · [screenshot](relume-catalog-shots/headers/hdr-58-dark.png)

> *Also seen (fold in as props / defer):* 27 variants are mostly alignment (left/center) x theme (light/dark) x optional small image — collapse into a couple of PageHeader variants, not 27 components.

#### Blog Headers · `Marketing` · 32 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* PostCard + Tabs + CardGrid (filed) + FeaturedPost (filed)
*Skinnability:* Header band (heading + category filter Tabs) is trivial; the grid reuses PostCard. Main work is assembling the filterable listing, not new atoms.
*Why:* These are full blog/writing INDEX headers (heading + category tabs + post grid) — a listing template that assembles cards Vael already ships, relevant for designers' writing sections.

**Build these variants:**
- **Blog / 1 (heading + category filter tabs + 6-up post grid)** — The canonical blog index header/listing; wraps PostCard + Tabs and realizes filed CardGrid. · [screenshot](relume-catalog-shots/blog-headers/blog-1-featured.png)
- **Blog / 4 (heading + featured post + secondary grid)** — Featured-post-led index variant; realizes filed FeaturedPost alongside the grid for a richer writing landing. · [screenshot](relume-catalog-shots/blog-headers/blog-4-list.png)

> *Also seen (fold in as props / defer):* Only the header band (heading + filter Tabs) is genuinely new; the rest is composition of existing PostCard. Build as a BlogIndex/PostGrid wrapper.

#### Team · `Marketing` · 22 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* PersonaCard (bio card atom)
*Skinnability:* High — Grid of avatar/photo cards + social-icon row; pure MUI, trivial to rebrand.
*Why:* Vael has the PersonaCard atom but no Team SECTION; a broad product (agencies, client About pages) needs the assembled grid even if a solo designer portfolio uses it less.

**Build these variants:**
- **Team / 6 (photo-card grid, name/role/socials)** — The default 'Our team' section — 3-col photo cards with social links and a 'We're hiring' footer; the assembled grid Vael's PersonaCard atom doesn't ship. · [screenshot](relume-catalog-shots/team/team-06.png)
- **Team / 16 (large photo + bio, 2-col)** — Horizontal photo-plus-bio layout for smaller teams/founders — reads as premium 'About' content, useful for solo and boutique portfolios. · [screenshot](relume-catalog-shots/team/team-16.png)
- **Team / 1 (compact avatar grid + socials)** — Dense 4-col circular-avatar grid for larger teams; the lightweight end of the range and a distinct layout from the photo-card grid. · [screenshot](relume-catalog-shots/team/team-01.png)

> *Also seen (fold in as props / defer):* Only 22 variants; two assembled layouts (photo-card grid + large photo/bio) plus the compact avatar grid cover the category. Lower portfolio priority than Testimonials/Stats — build after those.

#### Timelines · `Marketing` · 21 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* Timeline, HorizontalTimeline, ProcessDiagram (all coded)
*Skinnability:* High — center line + node dots are borders/pseudo-elements; content blocks are standard stacks. Vertical-alternating layout needs care but no blockers.
*Why:* Vael's coded Timeline is a data/app timeline; these are narrative MARKETING timelines (Date + heading + body + dual CTA) for 'my process' / company-history sections — a distinct section-level gap.

**Build these variants:**
- **Timeline / 1 (center line, alternating content + CTAs)** — The marketing hero-timeline: intro block on the left, vertical center rail with alternating rich content and buttons — ideal for a process/roadmap story slide. · [screenshot](relume-catalog-shots/timelines/timeline-1.png)
- **Timeline / 13 (left-aligned rail, dense steps)** — Left-anchored variant for tighter 'how it works' / experience-history layouts where alternating is too wide. · [screenshot](relume-catalog-shots/timelines/timeline-13.png)

> *Also seen (fold in as props / defer):* Only build the marketing/narrative variants; do NOT rebuild the data timeline — Vael's coded Timeline/HorizontalTimeline already beat these for app use. Keep it a thin content-driven wrapper.

#### Contact Modals · `Marketing` · 6 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* Dialog + the Contact form wrapper above — this is literally Dialog wrapping Contact
*Skinnability:* Very high — it's Vael's coded Dialog with the Contact form composed inside; inherits theming from both.
*Why:* Near-free once the Contact wrapper and Dialog exist; ship as a composition example/variant rather than a separate heavy component.

**Build these variants:**
- **Contact Modal / 1** — Centered modal wrapping the standard contact form — the 'Get in touch' popover triggered from a nav/CTA; one thin wrapper covers most of the 6 variants. · [screenshot](relume-catalog-shots/contact-modals/01-modal.png)

> *Also seen (fold in as props / defer):* Low incremental cost, so worth including — but it's a bundle sweetener, not a standalone SKU. Build 1 composed variant and document trigger wiring; the other 5 are the same modal with different inner form layouts already covered by the Contact wrapper.

#### Category Filters · `Ecommerce` · 6 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* Checkbox, Radio, Slider, AdvancedSelect, TextField, TagCloud/Chip, Accordion, Drawer, Button, Switch
*Skinnability:* Fully skinnable — it is pure assembly of existing MUI/Vael form atoms; the only new work is the collapsible filter-group layout and the results toolbar, both token-driven with no theming risk.
*Why:* Vael already ships every underlying control, so this is assembly not new atoms — but the composed FilterPanel + results toolbar is a distinct, reusable section useful for ecommerce and dashboard/data case studies, so it's worth shipping as a wrapper.

**Build these variants:**
- **Category Filters / 1** — Persistent left-sidebar FilterPanel assembling every facet type (checkbox group, radio group, chip toggle groups, keyword search, select, dual sliders, switch, per-group Clear) plus a results toolbar with Sort-by and active-filter chips — the canonical faceted-filter section. · [screenshot](relume-catalog-shots/category-filters/cf-1.png)
- **Category Filters / 4** — Compact toolbar with a Filters button + Sort-by that opens the filter set in a modal/drawer with Clear-all/Apply — the mobile-and-narrow-layout pattern that pairs with the sidebar for a complete responsive filtering SKU. · [screenshot](relume-catalog-shots/category-filters/cf-4.png)

> *Also seen (fold in as props / defer):* All 6 variants are the same facet set in three shells: persistent sidebar (1,3), overlay/modal (2,4), and dropdown/drawer (5,6). Build one FilterPanel + FilterToolbar and expose display=sidebar\|drawer\|modal — covers the whole category. Lower priority than Product List Sections.

#### Forms · `Application` · 20 variants · **build-wrapper** · portfolio 🟡 Med · SKU ok
*Wraps existing Vael:* All field primitives coded (TextField, FileUpload, AdvancedSelect, etc.); no assembled FormLayout/settings-panel wrapper
*Skinnability:* Easy — layout wrapper (label placement, section dividers, sticky Cancel/Save footer) over already-themable fields
*Why:* Every field is coded but there's no assembled form SECTION (label layout, grouping, sticky action footer); a FormLayout wrapper turns primitives into shippable settings/contact forms.

**Build these variants:**
- **Form / 1 (Account settings panel)** — Full settings form: photo upload, prefixed URL field, email, textarea w/ char count, password pair, select, sticky Cancel/Save — the canonical assembled-form layout Vael lacks. · [screenshot](relume-catalog-shots/forms/form-1.png)
- **Form / 5 (two-column labeled form)** — Left-label / right-field two-column layout with section groupings — the other dominant form pattern; together they cover most SaaS settings + contact forms.

> *Also seen (fold in as props / defer):* This wrapper also feeds the known Contact-section gap. Keep it to 2 layout skeletons (stacked-labels and two-column) rather than 20 near-duplicate content variants.


---

## Tier 3 — Broaden later (niche but useful)

Lower portfolio-relevance; build once the core is done, to serve the 'useful to anyone' breadth (client work across industries).

| Category | Grp | Variants | Verdict | SKU | # to build |
|---|---|--:|---|---|--:|
| Careers | Mark | 27 | build-new | strong | 3 |
| Product Headers | Ecom | 9 | build-new | ok | 2 |
| Multi-step Forms | Mark | 46 | build-wrapper | strong | 2 |
| Event Headers | Mark | 6 | build-wrapper | ok | 2 |
| Sign Up and Log In Modals | Appl | 5 | build-wrapper | ok | 2 |

#### Careers · `Marketing` · 27 variants · **build-new** · portfolio ⚪ Low · SKU strong
*Skinnability:* Easy — MUI Card + Chip (department) + icon-meta rows (location/contract type) + Apply button; the grouped variant reuses Vael Accordion.
*Why:* Universal product need (every company site has a careers page) and strong standalone SKU; Vael has no JobCard/job-listing section. Portfolio-relevance is low for a solo designer but it's core to Catherine's client work and the 'broad enough anyone can use it' mandate.

**Build these variants:**
- **Career / 10 / (open-positions list, meta + Apply)** — The default jobs board: stacked JobCard rows with department chip, Location + Contract-Type icon-meta and Apply Now — establishes the reusable JobCard atom. · [screenshot](relume-catalog-shots/careers/c10.png)
- **Career / 23 / (2-col job card grid)** — Bordered JobCard grid — the denser, more designed presentation for companies with many roles. · [screenshot](relume-catalog-shots/careers/c23.png)
- **Career / 1 / (departments accordion with job rows)** — Roles grouped by department in collapsible sections — reuses Vael Accordion and covers the large-org careers page. · [screenshot](relume-catalog-shots/careers/c1.png)

> *Also seen (fold in as props / defer):* 27 variants reduce to one JobCard atom in three layouts (list / card-grid / departments-accordion) plus an optional filter-tab wrapper (Career / 20). Contract-type + location use icon-text meta rows.

#### Product Headers · `Ecommerce` · 9 variants · **build-new** · portfolio ⚪ Low · SKU ok
*Skinnability:* Moderate: needs an image gallery (thumbnail column/grid + main image with selection) plus price, variant selectors (reuse Radio/Select), quantity (Number), Add-to-cart Button. Gallery interaction is the only net-new logic.
*Why:* Completes the ecommerce starter-template story for the broad audience; genuine gap (image gallery + buy box) but low portfolio relevance, so build lean.

**Build these variants:**
- **Product Header / 1 (thumbnail column + main image + buy box)** — The canonical PDP header; the image-gallery + buy-box pattern Vael entirely lacks and any ecommerce template needs. · [screenshot](relume-catalog-shots/product-headers/prod-1-gallery.png)
- **Product Header / 3 (multi-image grid + buy box)** — Grid-gallery alternative for products with many images; a second gallery mode on the same component.

> *Also seen (fold in as props / defer):* Build one ProductHeader with a swappable gallery mode (thumb-column vs grid vs carousel) rather than 9 components. Reuse Number/Radio/Select for the buy box.

#### Multi-step Forms · `Marketing` · 46 variants · **build-wrapper** · portfolio ⚪ Low · SKU strong
*Wraps existing Vael:* Stepper + all form fields exist as coded atoms; the assembled wizard (stepper header + per-step body + Back/Next + validation/progress) is not shipped as one unit
*Skinnability:* High — MUI Stepper + fields; the wizard shell (step state, Back/Next, progress) is logic Vael hasn't packaged. Main effort is the state machine, not styling.
*Why:* Not portfolio-facing, but the single most reusable form-flow for onboarding/intake/checkout in app templates and Catherine's client work — a strong standalone SKU that packages Stepper logic Vael lacks.

**Build these variants:**
- **Multi Form / 10** — Horizontal-stepper wizard with a clear 4-step arc (name → needs → company → confirm) and Back/Next — the canonical intake/onboarding/quote flow for app templates and client work. · [screenshot](relume-catalog-shots/multi-step-forms/10-form.png)
- **Multi Form / 1** — Compact split variant with a supporting image panel beside the step — the 'lead-gen / book-a-call' wizard pattern; second archetype worth a distinct wrapper. · [screenshot](relume-catalog-shots/multi-step-forms/01-form.png)

> *Also seen (fold in as props / defer):* 46 variants reduce to ~2-3 shells: horizontal-stepper wizard, vertical/side-progress wizard, and split-with-image. Build the wizard shell once as a controlled component and expose step slots; that single wrapper subsumes nearly all 46. Ship a success/confirmation final step too.

#### Event Headers · `Marketing` · 6 variants · **build-wrapper** · portfolio ⚪ Low · SKU ok
*Wraps existing Vael:* PageHeader (filed, unbuilt) + EventCard (new)
*Skinnability:* Easy — assembles the new EventCard + Vael SectionHeading/filter tabs; reuses the filed PageHeader shell.
*Why:* Not a new atom — it's the events-index PageHeader assembling the EventCard from Event Sections; build as a wrapper once EventCard exists so the Events kit ships a complete landing page.

**Build these variants:**
- **Event Header / 1 / (featured event + date-tab list below)** — Events landing hero: one featured event (image + date badge + RSVP) above the filterable date-row list — the top of an events index page. · [screenshot](relume-catalog-shots/event-headers/eh1.png)
- **Event Header / 3 / (big featured + side thumbnail list)** — Editorial variant — large featured event beside a stacked thumbnail list; a distinct, portfolio-worthy events-index header. · [screenshot](relume-catalog-shots/event-headers/eh3.png)

> *Also seen (fold in as props / defer):* Only 6 variants; ship 2 as part of the Events SKU rather than standalone. Depends on EventCard landing first.

#### Sign Up and Log In Modals · `Application` · 5 variants · **build-wrapper** · portfolio ⚪ Low · SKU ok
*Wraps existing Vael:* Dialog + field primitives + Button (not assembled as an auth modal)
*Skinnability:* Easy — Dialog body populated with the same auth form; fully themable
*Why:* Vael has Dialog and the fields but not the assembled auth modal; it's a thin, high-utility wrapper that reuses the auth-page form inside a Dialog.

**Build these variants:**
- **Sign up - Modal / 1** — Dialog-hosted Sign Up (name/email/password + social + switch-to-login link + close) — the in-app/gated-content auth modal, assembled from Dialog + the auth form. · [screenshot](relume-catalog-shots/sign-up-and-log-in-modals/modal-signup-1.png)
- **Login - Modal / 1** — Matching in-modal Log In — pairs with the sign-up modal so the same overlay can toggle between the two states.

> *Also seen (fold in as props / defer):* Build after the auth PAGES — the modal is literally the same form dropped into Vael's Dialog, so it's near-free once the page template exists. Two variants (sign-up, log-in) is enough.


---

## Starter Templates — the on-ramp / sales lever

Full-page compositions of the sections above. Not buildable until their sections exist, but disproportionately attractive to buyers ('start from a page, not a blank canvas') — and portfolio/home templates are the flagship SKU for the primary buyer.

| Category | Grp | Variants | Verdict | SKU | # to build |
|---|---|--:|---|---|--:|
| Portfolio Pages | Temp | 7 | build-new | strong | 3 |
| Home Pages | Temp | 8 | build-new | strong | 3 |
| About Pages | Temp | 5 | build-new | strong | 2 |
| Blog Post Pages | Temp | 5 | build-new | ok | 2 |
| Contact Pages | Temp | 5 | build-new | ok | 2 |
| Blog Pages | Temp | 5 | build-new | ok | 2 |
| Pricing Pages | Temp | 5 | build-new | ok | 2 |
| Legal Pages | Temp | 2 | build-wrapper | weak | 1 |

#### Portfolio Pages · `Templates` · 7 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Trivial in MUI/Vael — pure token reskin; layout is Container + Grid + Vael CaseStudyCard/PullQuote/Testimonial, no bespoke CSS. No risk.
*Why:* Case-study detail template = the exact deliverable the portfolio-first buyer needs; Vael has the cards but no assembled page. Highest-value template in the cluster.

**Build these variants:**
- **Portfolio Page 1** — Classic case-study detail: meta bar (Client/Role/Date), The opportunity / What we did / The outcome arc, image galleries, testimonial, Next Project — this is literally the primary buyer's #1 page. · [screenshot](relume-catalog-shots/portfolio-pages/portfolio-1.png)
- **Portfolio Page 2** — Dark hero variant of the case study with Related Projects grid at the foot — good second flavor so buyers can pick a tone without redesigning. · [screenshot](relume-catalog-shots/portfolio-pages/portfolio-2.png)
- **Portfolio Page 3** — Image-forward alternating gallery layout for visual/design work — covers the photography/UI-heavy portfolio use case the first two don't. · [screenshot](relume-catalog-shots/portfolio-pages/portfolio-3.png)

> *Also seen (fold in as props / defer):* 7 variants total; build 3 spanning text-led, dark, and image-led. Depends on Vael portfolio-section + gallery + long-form-content sections existing first.

#### Home Pages · `Templates` · 8 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Assembly of already-skinnable Vael sections (Hero, LogoWall, features, StatBlock, FAQ, CtaBar, Footer); reskin is theme-only. No risk.
*Why:* A designer's portfolio/personal site needs a home/landing page; this is the flagship starter template and a strong standalone SKU.

**Build these variants:**
- **Home Page 1** — Full problem→benefit→proof→FAQ→CTA landing arc (hero, logo wall, feature rows, stats, FAQ, resources) — the canonical starter homepage every buyer wants. · [screenshot](relume-catalog-shots/home-pages/home-1.png)
- **Home Page 2** — Alternate section ordering / lighter marketing home — gives a second starting point for a personal or freelance site.
- **Home Page 3** — Third composition for variety so the template pack doesn't feel single-note.

> *Also seen (fold in as props / defer):* 8 variants; build 2-3. Pure composition of existing/soon-to-exist Vael sections — value is the curated assembly + docs, not new atoms.

#### About Pages · `Templates` · 5 variants · **build-new** · portfolio 🟢 High · SKU strong
*Skinnability:* Theme-only reskin; uses Vael StatBlock, team/PersonaCard, PullQuote, CtaBar. No risk.
*Why:* About/bio page is core to any personal or freelance portfolio; Vael has all the section atoms but no assembled About template.

**Build these variants:**
- **About Page 1** — Mission statement → story → stats → values → team → news arc; the standard About page a portfolio/freelance site needs. · [screenshot](relume-catalog-shots/about-pages/about-1.png)
- **About Page 2** — Story-led / narrative-first variant for a solo-designer bio rather than a company about.

> *Also seen (fold in as props / defer):* 5 variants; build 2 (company-style + solo-bio-style).

#### Blog Post Pages · `Templates` · 5 variants · **build-new** · portfolio 🟢 High · SKU ok
*Skinnability:* Theme-only; long-form prose + Vael PostCard related grid + CtaBar newsletter. No risk.
*Why:* Long-form article/writeup template is directly useful for a designer's process posts and Substack-style content; Vael has long-form-content section candidates but no assembled post page.

**Build these variants:**
- **Blog Post Page 1** — Article template: title/meta/author, hero image, intro + body + conclusion, share, newsletter CTA, Related posts — doubles as the Substack/case-study writeup template the buyer needs. · [screenshot](relume-catalog-shots/blog-post-pages/blogpost-1.png)
- **Blog Post Page 2** — TOC + wider-prose variant for long reads — supports design essays / process writeups.

> *Also seen (fold in as props / defer):* 5 variants; build 2 (standard + TOC/long-read). Ties to the long-form-content section work.

#### Contact Pages · `Templates` · 5 variants · **build-new** · portfolio 🟢 High · SKU ok
*Skinnability:* Theme-only; built on Vael's coded form fields (TextField, Radio, Select, Checkbox) + navbar + footer. Strongest parity story since the form is real code, not a wireframe. No risk.
*Why:* Contact is a flagged Vael gap and a must-have page; Vael's real form components make this a parity showcase (coded form beats Relume's wireframe).

**Build these variants:**
- **Contact Page 1** — Two-column contact: intro + email/phone/address details beside a real working form (name, topic select, radio group, message, consent) — every portfolio needs a contact page and Contact is a known Vael gap. · [screenshot](relume-catalog-shots/contact-pages/contact-1.png)
- **Contact Page 2** — Centered single-column form variant for a minimal personal site.

> *Also seen (fold in as props / defer):* 5 variants; page is thin (mostly one section) so build 2 and share the underlying contact section with the Contact section SKU.

#### Blog Pages · `Templates` · 5 variants · **build-new** · portfolio 🟡 Med · SKU ok
*Skinnability:* Theme-only; Vael PostCard/CardGrid + category filter + newsletter CtaBar. No risk.
*Why:* Blog/writing index pairs with Blog Post to make a complete content section; useful but secondary to portfolio/about for the core buyer.

**Build these variants:**
- **Blog Page 1** — Blog index: heading, category filter chips, 3-col post card grid, newsletter CTA — the writing/index hub for a portfolio site. · [screenshot](relume-catalog-shots/blog-pages/blog-1.png)
- **Blog Page 2** — Featured-post + list layout variant for an editorial feel.

> *Also seen (fold in as props / defer):* 5 variants; build 2. Leverages filed-but-unbuilt CardGrid + FeaturedPost.

#### Pricing Pages · `Templates` · 5 variants · **build-new** · portfolio 🟡 Med · SKU ok
*Skinnability:* Theme-only; pricing tier cards + comparison table (Vael Table) + FAQ + CtaBar. No risk.
*Why:* Serves the freelancer/services buyer (packages/rate card) and rounds out the template pack; less central to a pure portfolio than Portfolio/About.

**Build these variants:**
- **Pricing Page 1** — 3-tier cards + monthly/annual toggle, feature bullets, compare-plans table, FAQ, CTA — complete pricing template; Pricing + FAQ are both known Vael gaps. · [screenshot](relume-catalog-shots/pricing-pages/pricing-1.png)
- **Pricing Page 2** — Single-plan / services-package variant that suits a freelancer's rate card rather than SaaS tiers.

> *Also seen (fold in as props / defer):* 5 variants; build 2. Depends on Pricing + FAQ sections being built first (both flagged gaps).

#### Legal Pages · `Templates` · 2 variants · **build-wrapper** · portfolio ⚪ Low · SKU weak
*Wraps existing Vael:* PageHeader (filed) + long-form-content section
*Skinnability:* Trivial — just PageHeader + prose block; theme-only. No risk.
*Why:* Low standalone interest but cheap: it's the filed PageHeader plus a long-form-content wrapper, and every shipped site needs it — build once as part of the template bundle, not as a headline SKU.

**Build these variants:**
- **Legal Page 01** — Privacy/Terms layout: page header + last-updated + long-form legal prose; a bundle-completeness page so a starter site ships with real legal scaffolding.

> *Also seen (fold in as props / defer):* 2 variants; build 1 reusable wrapper. Reuses long-form-content section from Blog Post work.


---

## Already covered by Vael — do NOT rebuild

Vael already ships these (and for the app set, its **coded** components beat Relume's wireframes — a selling point: *"Relume gives you app wireframes; Vael gives you real, themed, accessible components"*).

| Category | Grp | Variants | Vael equivalent |
|---|---|--:|---|
| Card Headers | Appl | 2 | Card (CardHeader region) + Descriptions + Button/Menu |
| Comparisons | Mark | 15 | Comparison |
| Description Lists | Appl | 4 | Descriptions |
| Footers | Mark | 17 | Footer |
| Loaders | Mark | 5 | CircularProgress, LinearProgress, Skeleton |
| Logos | Mark | 6 | LogoWall |
| Section Headers | Appl | 4 | SectionHeading (+ Button, Menu for the action/overflow slot) |
| Sidebars | Appl | 12 | Navigation, Drawer, SidePanel (+ Avatar, Badge, TextField for the search/user-footer bits) |
| Stacked Lists | Appl | 10 | List, ImageList, IconListItem, PersonaCard |
| Stat Cards | Appl | 8 | StatCard, StatBlock, Descriptions |
| Tables | Appl | 10 | Table, DataGrid, AgGrid, Descriptions |
| Topbars | Appl | 8 | AppBar (+ Menu, Avatar, Badge, TextField search) |


---

## How to use this

1. **Build order** = Tier 1 → Tier 2 → Templates (as their sections land) → Tier 3.
2. Each build item names the **specific Relume variants** to build (not all N) — screenshots linked inline.
3. **build-wrapper** items are cheapest — they assemble cards Vael already has (several are already filed: `CardGrid` #119, `FeaturedPost` #120, `FeatureCard` #121, `PageHeader` #118).
4. Every build item must ship in **both Figma and code**, be **skinnable**, be **separately sellable**, and carry **docs** — per the product definition.
5. Next step (not in this doc): slice Tier 1 into a build plan + Vael-extension issues.
