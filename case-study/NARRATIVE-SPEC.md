# Narrative redevelopment spec — Vael case study

A single redevelopment pass over the Vael case-study narrative, triggered by the reskin.
Goal: one coherent story across every document, credibility-first, honest about AI's ledger,
ending on live proof that the system is real.

Status: planned (not launching yet — Catherine will continue as the reskin finishes).

## The decision that drives everything: origin framing

**Locked framing = the blend, credibility-first, shelving-as-pivot.**

Lead with the real-work credibility (fast proof for a skimming evaluator), then convert the
shelving into agency + the thesis in the same breath. This earns the right to publish/anonymize,
and makes "carried it forward" the hook rather than a buried negative.

**Canonical anchor block (source of truth — everything else inherits from this):**

> It started as a real design system for a bioscience startup — production standards, real
> constraints, real scope. Then priorities shifted and it was shelved. Instead of letting it die
> there, I carried it forward on my own to answer a question I couldn't stop thinking about: how
> far could AI actually take work that normally needs a whole team?

**Hero one-liner version:** "A design system, built with AI in the loop." (kept) — with the
sub/opening line carrying the shelved-and-carried-forward turn.

**Why:** medium/deep-dive currently imply a *delivered* system ("built for a bioscience startup"),
which invites "is it in production / can I see it live?" — a question the honest answer ("shelved")
can't satisfy. The blend removes the trap and foregrounds the most hireable signal (initiative,
self-direction, curiosity). Trade accepted: a hair less punchy than a pure "I shipped it" flex, in
exchange for a claim Catherine can fully stand behind — correct for a piece whose whole point is
honesty about AI.

## Thesis (sharpened by the blend)

From: "AI built my design system."
To: **"A shelved project became a controlled experiment in how far AI takes design-system work —
and here's the honest ledger of what it could and couldn't do."**

## Priority artifact

`copy-deck.md` (the landing-page copy the reskinned site renders) is the priority.
Medium cuts + short are secondary. `DESIGN.md`/`SPEC.md` anchors just need wording alignment.

## Work items

### 1. Establish the canonical origin block
Finalize the anchor paragraph + hero line above. This is the single source; steps 2–4 inherit it.

### 2. Reconcile framing across all docs (kill the split)
Propagate the blend into every place the origin currently lives:
- `copy-deck.md` — beat 1 (HERO) + beat 2 (THE GAP)
- `writing/medium.md` — intro + closing disclosure
- `writing/deep-dive.md` — intro + disclosure
- `writing/short.md` — intro
- `DESIGN.md` — "Origin framing" anchor sentence (already close; align exact wording)
- `SPEC.md` — any origin references

### 3. Refine the copy-deck against the reskin (priority)
- **Beat 8 → live proof.** Convert the close from stats + disclosure only into "here's the actual
  working system" — real reskinned components + live Storybook. This is what makes the "carried it
  forward" arc pay off. (DESIGN.md already anticipates a real beat-8 showcase; the deck hasn't
  caught up.) Vael is far enough along to show someone; not launching, so the beat can note the
  system is still being finished if needed.
- **Fact sweep.** Reconcile any numbers/status the reskin changed across all beats: component count
  (27), doc pages (75), pitches/tickets (17 / 145), "v0.75", Storybook status, token counts
  (11/13/8/24). Fix in copy-deck first, then mirror into the writing cuts + `writing/README.md`
  facts list so all stay consistent.

### 4. Rework angle where the old framing leaned wrong
In deep-dive/medium, adjust emphasis anywhere the "delivered for a startup" framing pulls against
the new thesis. The experiment/ledger framing should read as intentional, not retrofitted.

## Constraints (non-negotiable)

- **Anonymization:** never the company ("a bioscience startup"); never the internal name (always
  "Vael"); code snippets scrubbed. Re-run the `writing/README.md` anonymization checklist after edits.
- **No invented metrics.** Impact stays output-focused (27 / 75 / 17). No fabricated adoption or
  performance numbers.
- **Voice:** first-person, wry, confident, no corporate gloss (the approved copy-deck voice).
- **Show edits inline:** present before/after for each change as it's made, not just a summary.

## Deliverables

1. Updated `copy-deck.md` (priority) — reconciled origin + live-proof beat 8 + fact sweep.
2. Updated `writing/medium.md`, `writing/deep-dive.md`, `writing/short.md` — same origin + thesis + facts.
3. Aligned `DESIGN.md` / `SPEC.md` origin wording.
4. Updated `writing/README.md` facts list if any numbers changed.

## Verification

- Origin story reads identically (in substance) across all six docs — no split remains.
- Anonymization checklist passes (no company name; no internal name; snippets scrubbed).
- All shared facts agree across copy-deck, the three cuts, and the README facts list.
- Beat 8 lands as live proof, consistent with the actual reskinned library / Storybook state.
- Catherine reviews before anything is published or wired into the landing page (standing gate).

## Out of scope (now)

- Building/deploying the landing page itself (separate chat / later).
- Medium publishing, portfolio-repo (`catherinebhicks/2026`) integration, custom domain.
- New visuals beyond the two existing diagrams (unless a beat clearly needs one — flag first).
