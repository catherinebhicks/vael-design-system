# Vael — AI-as-build-method walkthrough

A portfolio + Medium case study about building a production design system ("Vael") with AI as a design-engineering pair — then, after it was shelved, carrying it forward on my own and rebuilding it in the open. One narrative, three cuts, plus visuals. Everything is **anonymized** — the bioscience startup it was built for is never named, and the internal system name is replaced with **Vael** throughout.

## The spine (all three cuts serve this)

AI collapses the cost of production → so judgment and ownership become the whole job → and the rescue proves it. Two chapters: **built for a startup** (production, six-week cycle, taken to a scoped handoff) → **shelved** → **carried forward on my own** (rebuilt clean and in the open as a live, documented library).

## Files

| File | Length | Use it for |
|------|--------|-----------|
| `deep-dive.md` | ~1,600 words / 7–8 min | The master. Portfolio case-study page or a long-form Medium post. Everything else is a cut of this. |
| `medium.md` | ~1,150 words / 5 min | The default Medium post. Same story, tightened. |
| `short.md` | ~500 words / 2 min | LinkedIn post, portfolio teaser/intro, or a "read the full version →" lead-in. |
| `visuals/01-build-loop.{svg,png}` | — | The designer ↔ Claude build loop. |
| `visuals/02-token-pipeline.{svg,png}` | — | Figma → Supernova → tokens → generated theme, plus the docs generator. |

**SVG vs PNG:** use the **SVG** on the web (portfolio) — crisp at any size. Use the **PNG** (2400×1120) for Medium, which only accepts raster uploads.

## Suggested placement of visuals
- `01-build-loop.png` — right after "A pair, not an autopilot" (it visualizes the division of labor).
- `02-token-pipeline.png` — inside "Where the leverage lived," by the generated-theme rung.

## Voice & facts (so all three stay consistent)
- First person, wry, candid, build-in-public. Not marketing copy.
- **Two-phase, real numbers:** **27 components at the startup → 44 now** (carried forward); **80+ doc pages** (Storybook now; a generated static site originally); **17 Shape Up pitches / 145 tickets** scoping the rollout; a **six-week Shape Up cycle**, then expanded over additional time.
- **Stack (current):** MUI v7 + MUI X (Data Grid) at the core, **Highcharts** for charts, AG Grid optional, plus dnd-kit / React Flow. (Avoid the old "MUI + MUI X + AG Grid + React Flow" line — it's now misleading.)
- **Tokens:** open **W3C design-tokens format**, described qualitatively (color, type, spacing, elevation, motion). Use "eight spacing steps, not forty" as the one concrete restraint detail — don't cite the old 11/13/24 counts (they don't match the token data).
- **Pipeline & generator = phase-1 (production), past tense:** Figma → Supernova → **generated** MUI theme; a **`build.py`** docs generator (~485 lines). The reskinned public version deliberately re-authored the theme by hand and moved docs to **Storybook** — say so; don't imply the current repo still generates them.
- **Accessibility:** I hand-audited each component against WCAG, then verified with the Storybook a11y addon, which caught smaller things I fixed. (Not "fully audited and signed off" — framework + hand-audit + tooling verification.)
- **The thesis:** AI didn't replace the design work — it removed everything that *wasn't* design work, leaving the judgment (taste, accessibility, governance, the "why") more visible and more mine. And: good work shouldn't need permission to survive.

## Anonymization checklist (verify before publishing)
- [ ] No company name anywhere.
- [ ] No internal project name — always "Vael."
- [ ] Code snippets scrubbed (any real `theme.ts` header / token JSON says "Vael," never the company).
- [ ] Screenshots, if added later, have client data/branding stripped.

## Pre-publish dependency
- The case-study page's "you can open it right now" live-Storybook claim requires the **static Storybook to be deployed to a public URL** first (in progress). Don't publish the page with a dead link.

## Code snippets on Medium
Paste fenced blocks as **GitHub Gists** for syntax highlighting, or use Medium's built-in code block. All snippets here are anonymized and copy-paste ready.

## Possible follow-ups (not done yet — ask if you want them)
- Wire `deep-dive.md` into the portfolio site repo (`catherinebhicks/2026`) as a case-study page.
- Capture a few sanitized Storybook screenshots for visual texture.
- Draft Medium title/subtitle A/B options and tags before publishing.
