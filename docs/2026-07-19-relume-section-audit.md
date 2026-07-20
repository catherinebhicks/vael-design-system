# Relume → Vael Section-Library Audit

**Date:** 2026-07-19
**Author:** Catherine (with Claude)
**Status:** Decision matrix — no building yet
**Relume source:** "Relume Figma Kit (v3.7) (Community)" — enumerated live via Figma REST API (all 74 pages, exact variant counts). Representative variants screenshotted to [`relume-audit-shots/`](./relume-audit-shots/).

---

## Why this exists

Catherine has built many sites on **Relume's** wireframe/section system and wants to stop
reinventing marketing sections by hand in **Vael**. This decides, per Relume section
*category*, whether it's worth **bringing into Vael** — so Vael gains a well-considered
marketing section library without absorbing redundant or gimmicky blocks.

**The lens is "sellable to designers."** Vael is being positioned as a polished, *complete*
design system that other designers buy for their own client work — not just AFD's site. That
sets two bars at once:

1. **Coverage** — a section library missing Pricing or FAQ reads as amateur. Gaps matter.
2. **Curation** — a buyer wants *one obvious way* to build a hero, not Vael's `HeroBanner`
   competing with three imported Relume headers. Redundancy is a defect, not a feature.

> **Positioning tension (surfaced, not resolved here):** the Vael repo currently describes
> itself as private/portfolio — `package.json` `private:true`, "not productized"
> (`start-here.md`). Selling to designers is a real shift. This audit is written *toward* that
> future; productization / packaging / licensing is out of scope for this document.

## How to read this

- **Altitude is category-level.** Relume ships **thousands** of variants across 74 pages;
  auditing each is noise. Each row is one Relume *category* (= one Relume page). For BRING IN /
  MERGE rows, a "port" note names the **canonical variants** actually worth carrying.
- **Verdicts:**
  - **BRING IN** — Vael has no real equivalent; add it.
  - **MERGE** — Vael has the *piece* (usually a card) but not the assembled *section*; extend.
  - **REDUNDANT** — Vael already covers this well; skip to protect curation.
  - **SKIP** — niche or gimmicky for the target buyer; not worth carrying.
- **Effort** reflects Vael's idiom: a new section = one `<Name>.tsx` (ReactNode slots + variant
  enum + `sx`), a story, an mdx, an export. Most are **Low** — so the real decision is *should
  we*, not *can we*.

**Fidelity:** counts and names are pulled live from the file (REST `?depth=2`), not guessed.
"Layout" was renamed **Features** in v3.7. Verdicts on the marketing set are backed by
screenshots of representative variants (`relume-audit-shots/`).

---

## Summary

| Verdict | Count | Categories |
|---|---|---|
| **BRING IN** | 6 | Features/Content Layouts, Pricing, FAQ, Contact, Marketing Navbar, Banner (+ Gallery, Long-form Content) |
| **MERGE** | 7 | Hero Headers, Testimonials, Blog, Team, Stats, Portfolio, Multi-step Forms |
| **REDUNDANT** | ~20 | CTA, Footers, Logos, Timelines, Comparisons, Contact Modals, Loaders, **+ the entire Application Components section** (Tables, Forms, Stat Cards, Shells, Sidebars, Topbars, Lists, headers…) |
| **SKIP** | 8 | Careers, Events (×3), Ecommerce (×3), Cookie Consent, Auth Sign-up, Links pages |
| **TEMPLATES** | (tier) | Page Templates — derive from sections later; strong sales appeal |

## Four findings that matter

1. **Features (682 variants) is the entire ballgame.** It's Relume's workhorse — the split
   image/text and card-grid sections every marketing page is built from. Vael has *cards* but no
   general feature/content *section*. Port ~4 archetypes (below) and you've captured most of
   Relume's value in one component family.
2. **MERGE is Vael's quiet advantage.** Vael already ships the *cards* (`PostCard`,
   `PersonaCard`, `StatCard`, `CaseStudyCard`, `Testimonial`). Blog/Team/Stats/Portfolio just
   need the section *wrapper* that arranges them — Low effort, and `FeaturedPost`/`CardGrid` are
   already filed (#119/#120).
3. **The entire "Application Components" section is REDUNDANT — and that's a selling point.**
   Relume's Tables/Forms/Stat-Cards/Shells/Sidebars/Topbars are *wireframe-fidelity*. Vael
   already ships **production-coded** versions (`DataGrid`/`AgGrid`, full form primitives,
   `StatCard`, `AppBar`, `Drawer`/`SidePanel`, `Descriptions`). Importing Relume's would be a
   downgrade. Framed for buyers: *"Relume gives you app wireframes; Vael gives you the real,
   accessible, themed components."*
4. **Page Templates are a sales lever, not a build task.** Relume's Home/Pricing/About/Contact
   page comps are just *compositions* of the sections above. Once the BRING IN + MERGE sections
   exist, assembling 3–4 starter page templates is cheap and disproportionately attractive to a
   buyer ("starts you from a page, not a blank canvas"). Defer until sections land.

---

## BRING IN — real gaps, add them

| Relume category | Variants | Vael today | Necessity | Effort | Rationale (sellability) |
|---|---|---|---|---|---|
| **Features** (feature/content sections) | **682** | none (cards only) | Table-stakes | Med | The #1 gap. Relume's workhorse; most of any marketing page. Port ~4 archetypes, not 682. |
| **Pricing** | 57 | **none** (explicit gap) | Table-stakes | Med | A section library with no pricing block looks unfinished. Highest-signal gap after Features. |
| **FAQ** | 14 | none (Accordion primitive only) | Table-stakes | **Low** | Nearly free — composes the existing `Accordion`. Universally expected. |
| **Contact** | 30 | none assembled (fields exist) | Table-stakes | Low-Med | Fields exist, no assembled section. Buyers expect a drop-in contact block. |
| **Navbar** (marketing) | 32 | `AppBar`/`Navigation` are **app** nav | Table-stakes | Med | Marketing navbars (transparent-over-hero, centered logo, mega-menu) differ from app nav. Complements, doesn't replace. |
| **Banner** (announcement) | 16 | **none** | Nice-to-have | **Low** | Top-of-page announcement/promo strip. Tiny to build; easy completeness win. |
| **Gallery** | 27 | **none** | Nice-to-have | Low-Med | Image grids / bento. Relevant to a *designer* buyer showing visual work. |
| **Long-form Content** | 32 | `PullQuote`, `Presentation/*` | Nice-to-have | Low | Article/rich-text body for blog posts. Composes existing typography + PullQuote. |

### Canonical variants to port (from screenshots — don't port all)

**Features → 4 archetypes** (`relume-audit-shots/features/`)
- **Image + text split — `Layout 1`** — the workhorse; one component with a left/right media toggle absorbs Layouts 1–90+.
- **Feature card grid — `Layout 240`** — image/heading/text/link card repeated; a `columns` prop (2/3/4) also covers the 4-col `Layout 400`, folding the whole card-grid family into one.
- **Sub-feature list — `Layout 10`** — split section with a repeating icon/heading/paragraph list; a slot variant (icon vs. checklist vs. stat) covers Layouts 4/6/18/25.
- **Feature + stats — `Layout 25`** — same split shell but sub-items are large metric callouts; distinct enough for its own variant.
- *Seen, not porting (prop-variants/niche):* icon grid 2×2 (`Layout 29`), centered CTA banner (`Layout 35`), dark text block (`Layout 52`), full-bleed image (`Layout 90`), video+stats (`Layout 120`), sticky-scroll numbered steps (`Layout 420` — interactive, later).

**Pricing → 3** (`relume-audit-shots/pricing/`)
- **Tiered cards — `Pricing 18`** — a `tiers` count (1/2/3) also yields `Pricing 13` and `Pricing 1`.
- **Monthly/annual toggle — `Pricing 7`** — same card + billing-period switch as a wrapper prop.
- **Comparison table — `Pricing 22`** — feature matrix across plans; structurally its own component (toggle variant `Pricing 27`).

---

## MERGE — Vael has the card, add the section wrapper

Mostly **Low** effort because the atoms already exist.

| Relume category | Variants | Vael today | Effort | Rationale |
|---|---|---|---|---|
| **Hero Headers** (✨NEW + Headers) | 130 + 27 | `HeroBanner` (one, w/ variants) | Low | Keep `HeroBanner` canonical; graft variants — don't import a parallel hero. **Absorb:** `Header 1` (split img/text), `Header 5` (image-background), `Header 24` (centered w/ email form), `Header 15` (centered, image below). Renders in `relume-audit-shots/hero/`. |
| **Testimonials** | 67 | `Testimonial` (single) | Low | Add layout variants: quote-grid, logo + quote, big-single-quote. One component, more variants. |
| **Blog** (Headers 32 / Sections 36 / Post Headers 5) | 73 | `PostCard`/`PreviewCard`; `FeaturedPost`/`CardGrid` filed (#120/#119) | Low-Med | Cards exist; build the *section* (post grid, featured + list). Unblocks #119/#120. |
| **Team** | 22 | `PersonaCard` | Low | Wrap `PersonaCard` in a team grid section. |
| **Stats Sections** | 60 | `StatCard`/`StatBlock` | Low | Cards exist; add the *band* (3–4 stats + heading). Common feature-page closer. |
| **Portfolio** (Sections 23 / Headers 12) | 35 | `CaseStudyCard` | Low-Med | Directly relevant to the designer buyer. Card exists; add the grid/masonry section. |
| **Multi-step Forms** | 46 | `Stepper` + field primitives | Med | Assemble a multi-step form section from the existing `Stepper` + inputs. Lower priority. |

---

## REDUNDANT — Vael already owns the canonical version; do NOT import

Importing these creates the "three ways to do one thing" that hurts a sellable system.

**Marketing set:**

| Relume category | Variants | Vael equivalent (keep) |
|---|---|---|
| **CTA** (✨NEW) | 67 | **`CtaBar`** — *optional single graft:* CTA-with-email-capture. |
| **Footers** | 17 | **`Footer`** (`FooterColumn[]`). |
| **Logos** | 6 | **`LogoWall`**. |
| **Timelines** | 21 | **`Timeline` / `HorizontalTimeline` / `ProcessDiagram`** (already over-covered). |
| **Comparisons** | 15 | **`Comparison`** (pricing-comparison folded into Pricing bring-in). |
| **Contact Modals** | 6 | **`Dialog`** + fields. |
| **Loaders** | 5 | **`LinearProgress` / `CircularProgress` / `Skeleton`**. |

**Application Components — the whole section is REDUNDANT** (Vael ships production-coded versions vs. Relume's wireframes — see Finding #3):

| Relume category | Variants | Vael equivalent (keep) |
|---|---|---|
| Application Shells | 16 | `Layout` + `AppBar` + `Drawer`/`SidePanel` compose it |
| Sidebars | 12 | `Drawer` / `SidePanel` / `Navigation` |
| Topbars | 8 | `AppBar` |
| Page / Section / Card Headers | 5 / 4 / 2 | `SectionHeading` + header components |
| Tables | 10 | `Table` / `DataGrid` / `AgGrid` (Vael far exceeds) |
| Stacked / Grid Lists | 10 / 10 | `List` / `ImageList` / `CardGrid` (#119) |
| Stat Cards | 8 | `StatCard` / `StatBlock` |
| Forms | 20 | full field primitive set |
| Description Lists | 4 | `Descriptions` |

---

## SKIP — niche or gimmicky for the target buyer

| Relume category | Variants | Rationale |
|---|---|---|
| **Careers** | 27 | Niche (careers pages). Low cross-client reuse. |
| **Events** (Sections / Headers / Item Headers) | 37 / 6 / 11 | Niche (event/conference sites). High count ≠ broad usefulness. |
| **Ecommerce** (Product Headers / List / Category Filters) | 9 / 12 / 6 | E-comm — outside Vael's marketing/portfolio positioning. |
| **Cookie Consent** | 5 | Better solved by a real consent library (compliance/state), not a static block. |
| **Sign Up / Log In** (Pages 17 / Modals 5) | 22 | App-auth, not a marketing section. Composable from `Dialog` + fields. |
| **Onboarding Forms** | 17 | Borderline — composable from `Stepper` + fields; revisit only on demand. |
| **Links pages** | 16 | Link-in-bio pages. Niche. |

---

## TEMPLATES tier — defer, but a strong sales lever

Relume's **Page Templates** (Home 8, Pricing 5, About 5, Contact 5, Blog 5, Blog Post 5,
Portfolio 7, Legal 2) are full-page *compositions* of the sections above. They're not a build
task now — but once the BRING IN + MERGE sections exist, shipping **3–4 starter page templates**
(Home, Pricing, About, Contact) is cheap and disproportionately attractive to a buyer ("start
from a page, not a blank canvas"). Log as a follow-on once sections land.

---

## What this implies (for a later planning pass — not part of this audit)

Natural first tier — the four table-stakes gaps that make Vael look *complete*, plus the
workhorse:

1. **Features** (biggest leverage — port the 4 canonical archetypes)
2. **Pricing** (port 3)
3. **FAQ** (cheapest — composes `Accordion`)
4. **Contact**

…then the MERGE set (Stats band, Team grid, Testimonial variants, Blog section, Hero variants)
since the cards already exist; then Banner + marketing Navbar for coverage; then starter Page
Templates. None of this is committed here — this doc is the decision matrix only. Findings can
feed `GapAnalysis.mdx` and Vael-extension issues.
