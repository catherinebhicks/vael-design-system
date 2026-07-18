# Design spec — Vael case study, second-life narrative extension

**Date:** 2026-07-17
**Status:** approved in brainstorming; ready for implementation plan.
**Supersedes nothing** — extends `NARRATIVE-SPEC.md` (adds a third movement; does not rewrite the frozen first two).

---

## 1. Purpose

The existing case-study narrative (the "AI-as-build-method" story, now the **About section** of the Vael package) is strong but **frozen in time** — it ends at *"rebuilt in the open, 44 components, the rescue is the proof."* Everything the second life actually became since then is missing: the Blueprint system, growth to **103 components**, the **Figma library built with AI** (design↔code parity via MCP), the **onboarding/distribution layer**, **designing *in* an LLM + round-tripping Figma↔code**, and AI-as-method applied to **governance and process itself**.

This spec defines how we flesh it out: **hub-and-spoke** — extend the one master narrative with a third movement, and add four standalone deep-dive pieces that each prove a facet of it.

## 2. The spine (unchanged) + the new third movement

**Existing spine (locked):**
> AI collapses the cost of production → so judgment and ownership become the whole job → and the rescue proves it.

**Existing arc (untouched):** setup → reframe (a pair, not an autopilot) → where the leverage lived (tokens → theme → docs) → the part only I could do → shelved *(the turn)* → rebuilt in the open *(rescue = proof)* → where it landed.

**New arc:** …→ rebuilt in the open → **✦ Movement 3: the method became how I run it** → refreshed coda.

**Movement-3 thesis line** (the hub the four spokes reinforce):
> The rescue proved the **system** was real. What came next proved the **method** was — the same human-in-the-loop pairing that built the components turned out to run the entire practice around them: the design tool, the craft, the upkeep, and the door I left open for whoever picks it up next. It stopped being *"how I built a design system with AI"* and became *"how I run one."*

**Four beats inside the movement** (one paragraph each; each hands off to its standalone piece):
1. **Design and code stopped being two jobs** → piece 1
2. **Governance I could actually hold** (a real rulebook — *not* "lightweight because solo") → piece 2
3. **The taste compounded** (44 → 103; discipline, not just growth) → piece 3
4. **Built to be picked up** (shown → portable → teachable) → piece 4

**Refreshed coda:** lands the operating-model thesis and extends the original five lessons with new ones:
- *Designing the rules is senior work, not overhead* (governance).
- *The method isn't a project trick — it's an operating model; it scales from making the system to running it.*
- *Verification is how you keep an AI pair honest* (see §4).

## 3. The four satellite pieces

Each is a standalone deep-dive on the Blueprint voice, fully public/specific, ending by handing back to the Movement-3 thesis.

### Piece 1 · "When design and code stopped being two jobs" *(facet: design↔code loop)*
- **Point:** the classic design→engineering handoff gap dissolves when an AI pair holds Figma *and* code at once; you work at the level of intent and the two representations can't drift.
- **Arc:** the old lossy handoff → bringing Vael into Figma with AI (the library: ~105 pages, per-component doc panels mirroring Storybook, real components not screenshots) → the **round-trip** (read a Figma node → agent edits `src/components` + `vael/` tokens + the story → **verifies** via typecheck/Storybook/Chromatic → human review + commit) over Figma MCP → payoff: one source of truth, design/code in lockstep.
- **Evidence:** Figma file `4dNRm8xuERpDNfdXYjlbIn`; the `docs/onboarding/designing-with-an-llm.md` workflows (ingest / design-in / round-trip); Code Connect.

### Piece 2 · "The rulebook: designing a design system's guardrails" *(facet: governance)*
- **Point:** designing the rules is senior work; AI makes *enforcing* them across 103 components solo sustainable. (Explicitly the strong, not-weak version — a portfolio reviewer must see design-with-guidelines.)
- **Arc:** a system rots without rules → the governance dimensions (see §5), **accessibility program as the anchor** → token governance → contribution & extension model (`consuming-vael`; the AFD site as worked example, extend-or-log-an-issue-never-fork) → per-component Guidelines → maturity/versioning → decision records → **"even the backlog is run this way"** (the live 3-tracker reconciliation + implementation-ready epics) → the AI-pair as enforcement mechanism.
- **Houses:** the **verification discipline** as a named dimension, and the **backlog/orchestration** addition.

### Piece 3 · "The taste compounded" *(facet: maturity/craft)*
- **Point:** the rebuild didn't just grow, it got more *disciplined* — and when AI makes iteration free, taste and restraint become the bottleneck, which is exactly where a designer's value concentrates.
- **Arc:** scope grew (27 → 44 → 103) but the real move is discipline → the **Blueprint system** (one coherent language: IBM Plex, grid, tokens) → the **single-typeface rule** held everywhere → "the page is canonical, the system conforms" → payoff: cheap iteration means the scarce thing is judgment about *what's right*, not production.

### Piece 4 · "Built to be picked up" *(facet: operating-model / openness + teachable method)*
- **Point:** "shown, not shipped" taken to "anyone can run it," then further — the method itself documented as a teachable system.
- **Arc:** made it live (Storybook/Chromatic/Pages) → made it **portable** (bundled fonts + licensing, LFS Figma archive, non-dev onboarding guides) → made it **teachable** (the designing-in-an-LLM handbook) → **recursive proof** (this page + slide library + portfolio built *with* Vael) → **it runs a real practice** (AFD site, courses; load-bearing, not a demo).
- **Houses:** recursive proof, runs-a-real-practice, and the teachable-method thread.

## 4. Woven-in additions (where each lands)

| Addition | Where |
|---|---|
| **Verification discipline** ("how I keep the pair honest" — typecheck/Storybook/Chromatic/a11y green gates + computed-style & screenshot audits) | Named governance dimension in piece 2; appears first in piece 1's gated round-trip; a coda lesson |
| **Recursive proof** (this About page + slides + portfolio built *with* Vael) | Piece 4 + coda |
| **Even the backlog is run this way** (tracker reconciliation, implementation-ready epics, agent orchestration) | Piece 2 (governance made concrete) |
| **It runs a real practice** (AFD, courses; load-bearing) | Piece 4 + coda |
| **Teachable method** (designing-in-an-LLM handbook; ties to educator identity) | Piece 4 |

## 5. Governance dimensions (the rulebook — piece 2's inventory)

Named as one coherent discipline she designed (the correction from "solo = lightweight governance"):
- **Accessibility governance** — WCAG 2.1 AA conformance statement, hand-audit of every component *then* the Storybook a11y addon as a second pass, per-component a11y intentions, axe/jest-axe CI scoped.
- **Token governance** — W3C open-standard token foundation as single source of truth, `--ds-*` discipline, no-raw-hex audits, token-linting.
- **Contribution & extension governance** — the `consuming-vael` model: extend as-is or via a logged extension issue, **never fork**; AFD as the living example.
- **Guidelines governance** — every component ships DO / DON'T / props / a11y Guidelines (Storybook MDX + mirrored Figma doc panels).
- **Maturity & versioning governance** — component status/maturity labels, versioning policy, migration templates, the "page is canonical, the system conforms" directional rule.
- **Decision records** — the "why" in pitches / ADRs (MUI, two-tier tokens, a11y as explicit ADRs).
- **Verification** — the green-gate + audit discipline above, as the mechanism that keeps the pair honest.

> Honesty note: some dimensions are shipped/enforced today (WCAG conformance statement, `consuming-vael`, Guidelines docs, token format, decision records); others are scoped as tickets (a11y CI, token-lint, contribution template). The piece leads with what's enforced and frames the rest as scoped — which itself demonstrates governance thinking. No dimension is claimed as automated when it isn't.

## 6. File structure — split `case-study/` into `narrative/` (the story) + `landing/` (the site build)

`case-study/` splits cleanly by *kind of thing*: the **story** (all narrative prose, the governing spec, the diagrams, provenance) vs. the **site build** (how the story becomes a page — deferred). Flatten `writing/` into `narrative/`.

```
case-study/
  narrative/                   ← the STORY (all of it)
    NARRATIVE-SPEC.md          ← moved; +Movement 3, +ledger, +constraints
    deep-dive.md               ← moved from writing/; +Movement 3 + refreshed coda
    medium.md                  ← moved from writing/; ending refreshed
    short.md                   ← moved from writing/; ending refreshed
    README.md                  ← moved from writing/; shared-facts list updated
    pieces/                    ← NEW
      01-design-and-code.md
      02-the-rulebook.md
      03-taste-compounded.md
      04-built-to-be-picked-up.md
    visuals/                   ← moved (01-build-loop, 02-token-pipeline; narrative diagrams)
    _original-backup/          ← moved (provenance, untouched)
    2026-07-17-second-life-narrative-design.md   ← this design spec (already here)
  landing/                     ← the SITE BUILD (deferred; not touched this pass)
    SPEC.md                    ← moved (landing-page product spec)
    DESIGN.md                  ← moved (page design + folder index; index refreshed for new paths)
    copy-deck.md               ← moved (locked page copy in beat form; feeds the page)
```

**Rationale for the split:** `narrative/` holds prose + governing spec + diagrams + provenance (the story in every form). `landing/` holds the page-build docs — `SPEC.md`/`DESIGN.md` describe the future site, and `copy-deck.md` is the copy the site renders, so it lives with the build even though it's narrative in form. `visuals/` are narrative diagrams (they illustrate story beats) → they live in `narrative/`.

**References to update after the move** (part of implementation):
- `docs/README.md` (links to `case-study/writing/*` + `NARRATIVE-SPEC.md`)
- `about/README.md` (mentions the `../case-study/` narrative)
- `start-here.md` (repo-root; case-study mention)
- `narrative/README.md` internal cross-links; `NARRATIVE-SPEC.md` §Files; `landing/DESIGN.md` "what's here" index; `landing/SPEC.md` + `landing/copy-deck.md` any relative links to `../narrative/` prose/visuals.

> Diagram note (from spec review): the `visuals/` diagrams carry correct **phase-1** numbers (27 components / 75 docs / 17 pitches). They stay accurate for the phase-1 chapter. A **follow-on** (out of scope here) may add a "Figma ↔ code round-trip" diagram for piece 1 and refresh the build-loop output line to `27 → 103`.

## 7. Verified facts (locked) + verify-at-write

**Verified this session (safe to state):**
- Components: **103** (104 dirs in `src/components`) → arc **27 → 44 → 103**.
- Storybook: **226 stories + 251 docs** (built manifest).
- Figma file `4dNRm8xuERpDNfdXYjlbIn`; ~105 pages (verify exact at write via plugin API).
- Live surfaces: GitHub Pages Storybook + Chromatic (appId `6a46b2b4b5af28117f0804b1`) + Figma.
- Stack: MUI v7 + MUI X (core) + Highcharts (charts); AG Grid optional; dnd-kit / React Flow.
- Onboarding: 3 guides (`docs/onboarding/`); fonts bundled (IBM Plex OFL + FA Free); dated `.fig` LFS archive.

**Verified at write (2026-07-17):**
- Figma page count: **105** (`figma.root.children.length` via plugin API on file `4dNRm8xuERpDNfdXYjlbIn`) — exact, no longer "~105".
- Chromatic: cite **226 stories** (verified story count); do **not** cite a snapshot number (stale/unconfirmed).
- Governance artifacts all present and support their claims: `stories/Docs/Accessibility.mdx` (mentions WCAG/AA conformance ✓), `docs/consuming-vael.md` (describes extend-not-fork ✓), `stories/Docs/ComponentStatus.mdx` (maturity/status labels ✓).

**Locked from the existing ledger (unchanged):** six-week Shape Up cycle; 17 pitches / 145 tickets as the shelved handoff; "eight spacing steps, not forty"; hand-audit + addon for a11y.

## 8. Voice & anonymization

- First-person, wry, confident, no corporate gloss (unchanged).
- **Phase 1** (origin) = anonymized: "a bioscience startup," scrubbed snippets.
- **Phase 2+** (second life) = **public and specific**: name Claude, Figma, MCP, Storybook, Chromatic, the real repo. Retires the old "never the name Vael" line — for the second life, Vael *is* the public name.
- Show edits inline; originals preserved (`_original-backup/`); new pieces are net-new files.

## 9. NARRATIVE-SPEC.md updates required

- Add **Movement 3** to "The spine" section (setup → … → rebuilt in the open → *method became how I run it* → coda).
- Extend the **decision ledger**: component arc 27→44→**103**; the four facets + their pieces; the governance dimensions; verification discipline; recursive proof; runs-a-real-practice; Figma/MCP round-trip.
- Update **fact-correction reference**: "44" → "44 → 103"; "80+ docs" → "226 stories / 251 docs (Storybook)".
- Update **constraints**: phase-2 material public/specific; phase-1 anonymized.
- Update **status** + **files** (new `narrative/` paths + `pieces/`).

## 10. Out of scope (this pass)

- The landing/About **site render** (`copy-deck.md` beats + `about/app` components) — stays separate/later, per the existing spec. This pass is **prose + spec + the narrative/ restructure** only.
- Medium publishing, custom domain, new visuals/diagrams.
