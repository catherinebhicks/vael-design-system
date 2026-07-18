# Second-Life Narrative Extension — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Flesh out the frozen "AI-as-build-method" case study (now the About section) with a third movement + four standalone deep-dive pieces, and consolidate all narrative files under `case-study/narrative/`.

**Architecture:** Hub-and-spoke. The master `deep-dive.md` gains one movement (the hub); four new pieces (the spokes) each prove a facet. `case-study/` splits into `narrative/` (the story) and `landing/` (the future site build). Prose-writing tasks are briefed, not pre-written; each ends with a verification checklist against the design spec, then a commit.

**Tech Stack:** Markdown prose; `git mv` for the restructure; the repo's Storybook/build only touches links, not prose.

**Design spec (source of truth):** `case-study/narrative/2026-07-17-second-life-narrative-design.md`. Every task inherits it.

## Global Constraints

- **Voice:** first-person, wry, confident, no corporate gloss. (Verbatim from spec §8.)
- **Anonymization:** phase 1 = "a bioscience startup," never the company, snippets scrubbed. Phase 2+ = public and specific — name Claude, Figma, MCP, Storybook, Chromatic, the real repo; **Vael is the public name** (retire the old "never the name Vael" rule).
- **No invented metrics.** Only verified numbers. Locked facts: **27 → 44 → 103 components**; **226 Storybook stories / 251 docs**; six-week Shape Up cycle; 17 pitches / 145 tickets (the shelved handoff); "eight spacing steps, not forty"; hand-audit + a11y addon.
- **Show edits inline;** originals preserved under `narrative/_original-backup/`.
- **Branch:** all work on `narrative-second-life`. Commit freely; **do not push without explicit approval.**
- **The operating-model thesis** every piece hands back to: *"It stopped being how I built a design system with AI and became how I run one."*

---

### Task 1: Verify the "verify-at-write" facts

**Files:**
- Modify: `case-study/narrative/2026-07-17-second-life-narrative-design.md` (fill the §7 "verify at write" line with confirmed values)

**Interfaces:**
- Produces: confirmed values used by every prose task — `FIGMA_PAGE_COUNT`, `CHROMATIC_SNAPSHOTS`, and existence-confirmation of `Accessibility.mdx` conformance statement, `consuming-vael.md`, `ComponentStatus.mdx`.

- [ ] **Step 1: Confirm Figma page count** — via the plugin API (`use_figma`: `return figma.root.children.length`) on file `4dNRm8xuERpDNfdXYjlbIn`, OR cite "~105" if MCP unavailable and mark it approximate. Record the number.
- [ ] **Step 2: Confirm Chromatic snapshot count** — `grep -c` isn't enough; check the latest Chromatic build (appId `6a46b2b4b5af28117f0804b1`) or state "226 stories captured" (the story count is already verified) and avoid a stale snapshot figure. Prefer the story count if the snapshot number can't be confirmed.
- [ ] **Step 3: Confirm governance artifacts exist and say what we claim:**

```bash
cd ~/dev/vael-design-system
ls stories/Docs/Accessibility.mdx docs/consuming-vael.md stories/Docs/ComponentStatus.mdx
grep -il "WCAG\|conformance\|AA" stories/Docs/Accessibility.mdx
grep -il "fork\|extend\|extension" docs/consuming-vael.md
```
Expected: all three files exist; Accessibility.mdx mentions WCAG/AA conformance; consuming-vael.md describes extend-not-fork. If any claim isn't supported, note it and soften the prose accordingly.

- [ ] **Step 4: Record confirmed values** into the design spec §7 (replace "verify at write" with the numbers/confirmations).
- [ ] **Step 5: Commit**

```bash
git add case-study/narrative/2026-07-17-second-life-narrative-design.md
git commit -m "docs(case-study): lock verified facts for narrative extension"
```

---

### Task 2: Restructure `case-study/` into `narrative/` + `landing/`

**Files:**
- Move (git mv): `case-study/writing/{deep-dive,medium,short,README}.md` → `case-study/narrative/`
- Move: `case-study/NARRATIVE-SPEC.md` → `case-study/narrative/NARRATIVE-SPEC.md`
- Move: `case-study/visuals/` → `case-study/narrative/visuals/`
- Move: `case-study/_original-backup/` → `case-study/narrative/_original-backup/`
- Move: `case-study/{SPEC.md,DESIGN.md,copy-deck.md}` → `case-study/landing/`
- Modify (fix links): `docs/README.md`, `about/README.md`, `start-here.md`, `case-study/narrative/README.md`, `case-study/narrative/NARRATIVE-SPEC.md` (§Files), `case-study/landing/DESIGN.md` ("what's here" index), `case-study/landing/{SPEC.md,copy-deck.md}` (any `../` links)

**Interfaces:**
- Produces: the final paths every later task writes to (`case-study/narrative/…`).

- [ ] **Step 1: Create dirs and move files with `git mv`** (preserves history):

```bash
cd ~/dev/vael-design-system/case-study
mkdir -p narrative/pieces landing
git mv writing/deep-dive.md writing/medium.md writing/short.md writing/README.md narrative/
git mv NARRATIVE-SPEC.md narrative/
git mv visuals narrative/visuals
git mv _original-backup narrative/_original-backup
git mv SPEC.md DESIGN.md copy-deck.md landing/
rmdir writing 2>/dev/null || true
```

- [ ] **Step 2: Find every stale reference:**

```bash
cd ~/dev/vael-design-system
grep -rn "case-study/writing\|case-study/NARRATIVE-SPEC\|case-study/visuals\|case-study/SPEC\|case-study/DESIGN\|case-study/copy-deck\|writing/deep-dive\|writing/medium\|writing/short" docs/ about/ start-here.md case-study/ 2>/dev/null | grep -v _original-backup
```
Expected: a list of links in `docs/README.md`, `about/README.md`, `start-here.md`, and the moved files' internal cross-links.

- [ ] **Step 3: Update each reference** to the new paths (`narrative/…` for prose/spec/visuals, `landing/…` for SPEC/DESIGN/copy-deck). Rewrite `landing/DESIGN.md`'s "What's here" table to the new two-folder layout.
- [ ] **Step 4: Verify no stale links remain** — rerun the Step 2 grep; expect zero hits (outside `_original-backup/`).
- [ ] **Step 5: Commit**

```bash
git add -A case-study docs about start-here.md
git commit -m "refactor(case-study): split into narrative/ (story) + landing/ (site build)"
```

---

### Task 3: Update `NARRATIVE-SPEC.md` — add Movement 3

**Files:**
- Modify: `case-study/narrative/NARRATIVE-SPEC.md`

**Interfaces:**
- Consumes: verified facts (Task 1).
- Produces: the governing decisions every prose task cites (the spine's Movement 3, the extended ledger).

- [ ] **Step 1: Add Movement 3 to "The spine"** — after "rebuilt in the open (the rescue = proof)" insert `→ the method became how I run it (Movement 3)` before landing. Add the Movement-3 thesis line (spec §2).
- [ ] **Step 2: Extend the decision ledger** with: component arc **27 → 44 → 103**; the four facets + their pieces; the seven governance dimensions (spec §5); verification discipline; recursive proof; runs-a-real-practice; Figma/MCP round-trip.
- [ ] **Step 3: Update the fact-correction reference:** `44` → `44 → 103`; `~80 docs` → `226 stories / 251 docs (Storybook)`.
- [ ] **Step 4: Update constraints** — phase-2 material public/specific; phase-1 anonymized; retire "never the name Vael" for phase 2. Update **status** (narrative extension in progress) and **files** (new `narrative/`/`landing/` paths + `pieces/`).
- [ ] **Step 5: Verify** — read the section: Movement 3 present in spine; ledger has all four facets + governance + additions; no contradiction with the frozen movements 1–2.
- [ ] **Step 6: Commit**

```bash
git add case-study/narrative/NARRATIVE-SPEC.md
git commit -m "docs(case-study): add Movement 3 + phase-2 facts to narrative spec"
```

---

### Task 4: Extend the master `deep-dive.md` — third movement + refreshed coda

**Files:**
- Modify: `case-study/narrative/deep-dive.md` (insert new movement after "Rebuilt in the open"; refresh the closing coda + lessons)

**Interfaces:**
- Consumes: NARRATIVE-SPEC Movement 3 (Task 3); verified facts.
- Produces: the four in-movement beats that hand off to pieces 1–4; the operating-model thesis line reused as each piece's closing handoff.

- [ ] **Step 1: Draft the third movement** — heading e.g. "✦ The method became how I run it." Open with the Movement-3 thesis line (spec §2). Then four one-paragraph beats in order, each ending with a forward gesture to its piece:
  1. **Design and code stopped being two jobs** — brought Vael into Figma with AI, kept both in lockstep (round-trip). → piece 1
  2. **Governance I could actually hold** — a real rulebook (accessibility, tokens, contribution/extension, guidelines, decision records); the hard part solo is *enforcing* without drift, which is the pair's job. → piece 2
  3. **The taste compounded** — 44 → 103, but the move was discipline (Blueprint, single typeface). → piece 3
  4. **Built to be picked up** — shown → portable → teachable. → piece 4
- [ ] **Step 2: Refresh the coda** — extend the existing five lessons with: *designing the rules is senior work* (governance); *the method is an operating model, not a project trick*; *verification is how you keep the pair honest*. Add the recursive-proof line ("this page is built with the system") and the runs-a-real-practice credibility note. Update any "44"/"rebuilt in the open" endpoint language to acknowledge 103 + the operating model. Keep the anonymized footer.
- [ ] **Step 3: Verify against checklist:** all four beats present + ordered; each hands to its piece; coda carries the three new lessons + recursive proof + real-practice; facts match locked values (27→44→103, six-week cycle); phase-1 refs still anonymized; voice intact (read one paragraph aloud). Movement 1–2 prose unchanged.
- [ ] **Step 4: Commit**

```bash
git add case-study/narrative/deep-dive.md
git commit -m "content(case-study): add third movement + refreshed coda to deep-dive"
```

---

### Task 5: Refresh the `medium.md` + `short.md` endings

**Files:**
- Modify: `case-study/narrative/medium.md`, `case-study/narrative/short.md`

**Interfaces:**
- Consumes: the deep-dive third movement (Task 4) — compress it, don't re-invent.

- [ ] **Step 1: medium.md** — add a compact third-movement paragraph (the operating-model turn, naming the four facets in a sentence or two) + refresh the ending to the new thesis; update `44`→`103` where the component count appears.
- [ ] **Step 2: short.md** — add one or two sentences: the method became how she runs the whole practice (design tooling, craft, governance, distribution); update the number.
- [ ] **Step 3: Verify** — both cuts end on the operating-model thesis; numbers match; voice + anonymization intact; each is genuinely a *compression* of the master, not divergent.
- [ ] **Step 4: Commit**

```bash
git add case-study/narrative/medium.md case-study/narrative/short.md
git commit -m "content(case-study): refresh medium + short endings for Movement 3"
```

---

### Task 6: Write piece 1 — "When design and code stopped being two jobs"

**Files:**
- Create: `case-study/narrative/pieces/01-design-and-code.md`

**Interfaces:**
- Consumes: verified Figma facts (Task 1).
- Produces: introduces the **verification discipline** (gated round-trip) that piece 2 later names as a governance dimension.

- [ ] **Step 1: Draft** to this brief (spec §3 piece 1). Point: the design→eng handoff gap dissolves when an AI pair holds Figma and code at once. Arc: the old lossy handoff → bringing Vael into Figma with AI (the library: ~[FIGMA_PAGE_COUNT] pages, per-component doc panels mirroring Storybook, real components not screenshots) → the **round-trip** (read a Figma node → agent edits `src/components` + `vael/` tokens + the story → **verifies** via typecheck/Storybook/Chromatic → human review + commit, over Figma MCP) → payoff: one source of truth, design/code in lockstep. Cite `docs/onboarding/designing-with-an-llm.md` as the real handbook. Length: one master-section's depth (~400–600 words). End by handing back to the operating-model thesis.
- [ ] **Step 2: Verify against checklist:** point stated; round-trip mechanism concrete (names the real files/tools); verification thread present; Figma facts match Task 1; public/specific voice; hands back to thesis.
- [ ] **Step 3: Commit**

```bash
git add case-study/narrative/pieces/01-design-and-code.md
git commit -m "content(case-study): piece 1 — design & code as one loop"
```

---

### Task 7: Write piece 2 — "The rulebook: designing a design system's guardrails"

**Files:**
- Create: `case-study/narrative/pieces/02-the-rulebook.md`

**Interfaces:**
- Consumes: verification-discipline thread (piece 1); governance-artifact confirmations (Task 1).
- Produces: the strong governance framing the whole piece pivots on (the anti-"weak governance" requirement).

- [ ] **Step 1: Draft** to this brief (spec §3 piece 2 + §5). Point: designing the rules is senior work; the AI pair makes *enforcing* them across 103 components solo sustainable — explicitly the strong, design-with-guidelines version. Arc: a system rots without rules → the governance dimensions with **accessibility as the anchor** (WCAG 2.1 AA conformance, hand-audit *then* the a11y addon as a second pass that caught extras she fixed) → token governance (W3C single source of truth, no-raw-hex) → **contribution & extension model** (`consuming-vael`: extend or log an issue, never fork; the AFD site as the worked example) → per-component Guidelines → maturity/versioning → decision records → **verification** ("how I keep the pair honest": the green-gate + audits) → **"even the backlog is run this way"** (the live 3-tracker reconciliation + implementation-ready epics) → the pair as the enforcement mechanism. Honesty note (spec §5): lead with what's enforced today; frame CI/lint items as scoped. ~500–700 words. Hand back to thesis.
- [ ] **Step 2: Verify:** governance reads as *designed and enforced*, not lightweight; accessibility anchored; extend-not-fork present with AFD example; verification named; backlog-as-governance included; no dimension over-claimed as automated; hands back to thesis.
- [ ] **Step 3: Commit**

```bash
git add case-study/narrative/pieces/02-the-rulebook.md
git commit -m "content(case-study): piece 2 — the governance rulebook"
```

---

### Task 8: Write piece 3 — "The taste compounded"

**Files:**
- Create: `case-study/narrative/pieces/03-taste-compounded.md`

- [ ] **Step 1: Draft** to this brief (spec §3 piece 3). Point: the rebuild didn't just grow, it got more *disciplined*; when AI makes iteration free, taste/restraint become the bottleneck — where a designer's value concentrates. Arc: scope grew (27 → 44 → 103) but the real move is discipline → the **Blueprint system** (one coherent language: IBM Plex, grid, tokens) → the **single-typeface rule** held everywhere (the restraint; the mono-dominant → single-font decision) → "the page is canonical, the system conforms" → payoff. ~400–600 words. Hand back to thesis.
- [ ] **Step 2: Verify:** discipline-over-growth point clear; Blueprint + single-font concrete; numbers match; voice; hands back to thesis.
- [ ] **Step 3: Commit**

```bash
git add case-study/narrative/pieces/03-taste-compounded.md
git commit -m "content(case-study): piece 3 — the taste compounded"
```

---

### Task 9: Write piece 4 — "Built to be picked up"

**Files:**
- Create: `case-study/narrative/pieces/04-built-to-be-picked-up.md`

**Interfaces:**
- Consumes: onboarding/fonts/archive facts (Task 1); the recursive-proof + real-practice threads (also in the deep-dive coda — keep consistent wording).

- [ ] **Step 1: Draft** to this brief (spec §3 piece 4 + §4). Point: "shown, not shipped" → "anyone can run it" → the method documented as a teachable system. Arc: made it live (Storybook/Chromatic/Pages) → made it **portable** (bundled fonts + licensing, LFS Figma archive, non-dev onboarding guides — 3 guides in `docs/onboarding/`) → made it **teachable** (the designing-in-an-LLM handbook; ties to educator identity) → **recursive proof** (this page + slide library + portfolio built *with* Vael) → **it runs a real practice** (the AFD site + courses, extended via the logged-extension rule; load-bearing, not a demo). ~500–700 words. Hand back to thesis.
- [ ] **Step 2: Verify:** the shown→portable→teachable ladder present; recursive proof + real-practice consistent with the deep-dive coda; teachable/educator thread present; facts match; hands back to thesis.
- [ ] **Step 3: Commit**

```bash
git add case-study/narrative/pieces/04-built-to-be-picked-up.md
git commit -m "content(case-study): piece 4 — built to be picked up"
```

---

### Task 10: Update `README.md` shared-facts + final sweep

**Files:**
- Modify: `case-study/narrative/README.md` (shared-facts list)

**Interfaces:**
- Consumes: every prose file (Tasks 4–9).

- [ ] **Step 1: Update the shared-facts list** in `narrative/README.md` — component arc 27→44→**103**; 226 stories/251 docs; the four pieces indexed; the phase-1/phase-2 anonymization split; link the pieces.
- [ ] **Step 2: Anonymization sweep** — grep the whole `narrative/` for accidental phase-1 leaks:

```bash
cd ~/dev/vael-design-system
grep -rin "fermie\|culture\|bioreactor\|OD600\|Supernova" case-study/narrative --include=*.md | grep -v _original-backup | grep -v token-pipeline
```
Expected: only intentional phase-1 mentions (Supernova is legitimate phase-1 history in the token-pipeline beat; company/product names must be ZERO). Fix any leak.

- [ ] **Step 3: Fact sweep** — grep for numbers and confirm each against locked values:

```bash
grep -rn "components\|doc pages\|stories\|pitches\|tickets\|week" case-study/narrative/deep-dive.md case-study/narrative/pieces/*.md
```
Expected: 27/44/103, 226/251, 17/145, six-week — no stray or invented figures.

- [ ] **Step 4: Link + read-through** — confirm every piece hands back to the thesis and the four beats' forward-references resolve to the four piece files; read the deep-dive end-to-end once for flow.
- [ ] **Step 5: Commit**

```bash
git add case-study/narrative/README.md
git commit -m "content(case-study): update shared-facts + final anonymization/fact sweep"
```

---

## Self-Review (completed against the design spec)

- **Spec coverage:** third movement (Task 4) ✓; four pieces (Tasks 6–9) ✓; four woven-in additions — verification (pieces 1+2), recursive proof (pieces 4 + deep-dive coda), backlog-as-governance (piece 2), real-practice (piece 4 + coda) ✓; governance dimensions (Task 7) ✓; narrative/+landing/ restructure (Task 2) ✓; NARRATIVE-SPEC update (Task 3) ✓; cuts refresh (Task 5) ✓; facts verified (Task 1) + swept (Task 10) ✓; voice/anonymization (Global Constraints + Task 10 sweep) ✓.
- **Placeholder scan:** the only deferred value is `FIGMA_PAGE_COUNT`, resolved in Task 1 before any prose task consumes it.
- **Consistency:** the operating-model thesis line is defined once (Global Constraints) and reused as every piece's handoff; recursive-proof + real-practice wording is shared between piece 4 and the deep-dive coda (Task 9 Step 2 checks this).
- **Out of scope (unchanged):** the landing-page **site render** (`landing/copy-deck.md` beats + `about/app`) and new second-life diagrams — deferred, flagged in the spec.
