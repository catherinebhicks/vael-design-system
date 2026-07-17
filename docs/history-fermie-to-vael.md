# Vael — build history: Fermie → Vael

*The origin, the choices, and the transition. Written internally so the whole arc lives in one place — from the original production build through the rename and open rebuild. This is the "how we got here" record behind the public case study in [`../case-study/`](../case-study/).*

> **Anonymization boundary (read first).** This is an **internal** doc in a private repo. **Nothing here about the origin company, product, people, or the original codename's meaning may appear in any public artifact.** Public cuts (case study, Medium, portfolio) say only *"a bioscience startup"* and use *"Vael"* for the internal name — the original codename points directly at the former employer. See [`../case-study/writing/README.md`](../case-study/writing/README.md) anonymization checklist before publishing.
>
> **When the public Vael package is cut later**, make it a *curated export or fresh repo* that excludes internal-only docs like this one — not a flip of this private repo to public (whose git history would expose everything). Identifiable provenance is deliberately kept in private **memory**, not committed here.

---

## Timeline at a glance

| Phase | What | Where it lived |
|---|---|---|
| **1. Fermie (production)** | Design system built *at the startup* with Claude as a design-engineering pair, to production standards, in one six-week Shape Up cycle. Codenamed "Fermie" / "FermieDS." Taken all the way to a scoped, ready-to-build handoff (17 pitches / 145 tickets). | Private repo **`catherinebhicks/FermieDS`** (still on GitHub; now cloned to `~/dev/FermieDS`). `fermie-react` is not on the personal GitHub. |
| **2. Shelved** | Priorities shifted; the rollout cycle never ran. The system was complete and scoped but parked. | — |
| **3. Vael (carried forward, open)** | Taken home and rebuilt clean, anonymized, and public-facing: renamed **Vael**, re-authored by hand, moved to Storybook, expanded well past the original scope. | This repo (`~/dev/vael-design-system` → `catherinebhicks/vael-design-system`, private) |

**Provenance (internal only — do not publish):** the identifiable origin — former employer, product, codename meaning, and the ADR authors' names — is kept in private **memory** (`project_culture_former_employer`, `project_vael_design_system`), **not committed to this repo**, so nothing identifiable leaks if the package is ever made public. Everything downstream is anonymized to Vael.

---

## Phase 1 — the Fermie build (what & why)

One designer, a bioscience startup, a product grown fast and inconsistent (three blues, disagreeing button padding, tables built four ways). It needed a real design system — tokens, a themed component library, living docs, governance — the kind of thing a platform team builds over quarters. The staffing reality was one designer and a single six-week Shape Up cycle. That constraint is what turned it into an "AI as build method" experiment: how much of a team's output can one designer own if the *production* cost falls away?

The model that made it work: **Claude as a design-engineering pair, not an autopilot.** Designer brought taste, standards, and the "why"; the AI brought throughput and a memory that held a standard across a hundred decisions without drifting.

### Choices made in phase 1 — and the reasoning of record

Recovered from the FermieDS repo (private, `catherinebhicks/FermieDS`, cloned to `~/dev/FermieDS`): its **12 MADR-format ADRs** (`demo/decisions/index.html`) + foundation docs are the primary source. Key finding — the *implementation* decisions are documented richly, but three high-level *format / tool / method* choices are **not**; they appear only as named facts.

| Choice | Reasoning on record | Sourced? |
|---|---|---|
| **MUI v7 as the component base** | **ADR 001.** A data-dense product on raw HTML inputs + Tailwind, inconsistent components across engineers; needed a complete, accessible library + an authoritative Figma kit that tracks code, without spending quarters. Chosen over Radix+Tailwind (parity cost), Ant (theming/aesthetic), shadcn (each component a fork), custom (upkeep). v5→v7 upgrade ≈ 3 eng-weeks. | ✅ **documented** |
| **Two-tier semantic tokens** | **ADR 004.** Layer 1 = raw scales (never consumed directly); Layer 2 = semantic roles (the only layer feature code touches). Dark mode + tenant rebrands = re-binding Layer 2, not rewriting components. Two-tier chosen over value-only (breaks on dark mode) and three-tier (over-indirected for a team of four); enforced by a lint rule. | ✅ **documented** |
| **8-step spacing / restraint** | **ADR 002.** 8px base (`spacing(n)=n×8`), 8 steps; stops there because larger values are "layout, not spacing." Over 4px base (fights MUI) and rem (two parallel scales). | ✅ **documented** |
| **Accessibility target** | **ADR 011.** WCAG 2.1 AA; axe-core per PR + screen-reader passes quarterly. | ✅ **documented** |
| **W3C Design Tokens format** | Used as the export target, but the *choice* of DTCG over alternatives is **not** justified anywhere. Portability is the likely reason — but that's inference, not record. | ⚠️ **not documented** |
| **Supernova** as the token pipeline | Its *role* + mechanics are fully documented (Figma → Supernova → export → `design-tokens.json` + `tokens.css` → hand-imported `theme.ts`); *why Supernova* vs. Style Dictionary / Tokens Studio is **not**. | ⚠️ **not documented** |
| **Shape Up** for scoping (17 pitches / 145 tickets) | The mechanics are recorded (pitches replaced 3 Word docs; a 145-ticket backlog); *why Shape Up as the method* is **not**. | ⚠️ **not documented** |
| **`build.py` docs generator (~485 lines)** | A static-site generator / link-rewriter (BeautifulSoup) that built the ~75-page doc site from source HTML — *not* a token generator (tokens came from Supernova). One designer maintains a generator, not 75 hand-kept pages. | ✅ documented |

Other documented decisions (**ADRs 005–012**): autocomplete-only (Select banned by lint), AG Grid for heavy grids, an icon-font choice, one custom nav component, all third-party libs behind internal wrappers, a single notification API, PDF-export a11y — i.e. governance was real and written down.

**Scale at end of phase 1** (FermieDS `start-here.md` + overview): **v.75**, **27 components** (30 reference pages) + 13 patterns + 16 guides, a **~75-page** doc site, **12 ADRs**, tokens + generated theme, and a fully scoped rollout (**17 Shape Up pitches / 145 Linear tickets**) — a complete handoff. Typography was **Roboto / Roboto Mono** then; Vael later swapped to **IBM Plex Sans/Mono**, while primary `#1976d2` and the token architecture carried across unchanged.

### The judgment that stayed the designer's

Throughput was the AI's; the *decisions* were the job and got more visible, not less: taste (which three blues become one), accessibility (hand-audited each component vs. WCAG, then Storybook a11y addon as a second pass), governance, and the written "why." The recorded thesis: AI removed everything that *wasn't* design work, leaving judgment more visible and more owned.

---

## Phase 2 — shelved, then the transition to Vael (why & how)

**Why it moved:** the company shelved the project before the engineering cycle ran — good work parked by timing. The motive for carrying it forward was **rescue + initiative**, *not* "an experiment in how far AI can go" (that question was already answered in phase 1). The system was real and the thinking was sound, so it was taken home rather than left to rot in a backlog.

**How the transition was done — the deliberate changes from Fermie to Vael:**

| Transition move | Why |
|---|---|
| **Renamed → Vael; fully anonymized** | Company + codename can't be public (see boundary note). Vael is a clean, ownable public identity. |
| **Static-site generator (`build.py`) → Storybook** | The system should be *shown*, not shipped into one private product — every component live, interactive, and documented in one open place instead of behind a private build. |
| **Supernova/Figma pipeline → hand-authored theme** | Off the clock there's no Figma→Supernova pipeline; the public version re-authored the theme by hand so it's self-contained and openable by anyone. (So: the current repo does **not** generate its theme or docs — that pipeline was phase-1 production work. Tell it past tense.) |
| **Upgraded stack → MUI v7 + MUI X** | Rebuild on current MUI; MUI X (Data Grid) at the core, Highcharts for charts, AG Grid optional, plus dnd-kit / React Flow. |
| **Expanded scope** | From 27 components to a much larger open library (see "current state" — the public narrative pins "44"; the repo has since grown well beyond that). Added a charting layer, dashboard/data-viz set, and the form/completeness pieces a real system needs. |

**The point of phase 2:** the rescue is the proof. The system isn't a screenshot in a case study — it's a live library with a running Storybook anyone can click through.

---

## Current state (2026-07) — where phase 2 actually is now

The repo has grown past the numbers frozen in the public narrative. Reconcile before citing:

| Metric | Public narrative (frozen) | Repo now |
|---|---|---|
| Components | "27 → 44" | **~103 components / 226 Chromatic stories** (build #24) |
| Docs | "80+" (Storybook) | ~92 MDX pages (Foundations, Docs, Patterns, Components) |
| Live | "you can open it" | **https://catherinebhicks.github.io/vael-design-system/** (Pages) + Chromatic (appId `6a46b2b4b5af28117f0804b1`) |
| Figma | — | Full documented Figma library `4dNRm8xuERpDNfdXYjlbIn`, one page per component, code↔Figma parity |

> ⚠️ **Fact drift to resolve before the case study publishes:** the narrative says "44"; the library is now ~103. Either update the narrative to the current number or explicitly frame 44 as "at the time of writing." Don't let the two disagree in public. Everything else in [`../case-study/NARRATIVE-SPEC.md`](../case-study/NARRATIVE-SPEC.md) (verified numbers, past/present framing) still holds.

---

## The five things learned (recorded, for the case study)

1. **Judgment is the scarce resource now, not production.** AI collapses the cost of the artifact, not the cost of deciding what's correct.
2. **Aim leverage at infrastructure, not artifacts.** The compounding win is the generator and the pipeline, not the button.
3. **Specs are leverage.** A vague prompt gets a mediocre component; a sharp standard gets a system.
4. **Stay in the loop, or it drifts.** "AI as pair" is load-bearing on *pair.*
5. **Good work shouldn't need permission to survive.** The most senior move wasn't the pipeline — it was refusing to let a shelved system die.
