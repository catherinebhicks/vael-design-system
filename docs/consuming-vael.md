# Consuming & extending Vael (the governance model)

How downstream products use Vael without fragmenting it — with **A Focused Design's website (`afd-website`)** as the worked example. Captured here (merged from the afd-website build docs) so the *design-system governance* story lives with Vael, not scattered in a consumer repo. AFD-only program content (monetization, SEO, HubSpot, journeys) stays in `afd-website` — only the Vael-relevant reasoning is here.

## The governing rule: extend Vael, don't fork it

*(afd-website `docs/2026-07-13-hubspot-architecture-decision.md` §3, locked 2026-07-13)*

Every design decision on a downstream product is either:
1. **taken from Vael as-is**, or
2. logged as an **"extend Vael to cover X" issue** and completed **in Vael first** — never decided ad hoc on the consumer.

Anything a consumer needs that Vael lacks becomes a **Vael-extension issue**, audited into Vael's **`stories/.../GapAnalysis.mdx` → "Marketing & website surfaces."** So the consumer never accumulates its own private design language; gaps flow *back* into Vael. This is the same principle as "the page is canonical, the DS conforms" — the system stays the single source of truth.

## Worked example: the brand-strategy reversal

*(afd-website `docs/2026-07-07-afd-website-design.md` → `…-hubspot-architecture-decision.md`)*

A concrete instance of the rule in action, worth keeping for the case study because it shows the governance *correcting itself*:

- **First proposed (07-07):** an **additive AFD override layer** on top of Vael — a violet accent (`#6600FD`), a Gill Sans display stand-in, and a separate `css/afd-tokens.css`.
- **Reversed (07-13):** dropped the override layer entirely → **"Vael as-is, no override layer."** The violet and the Gill Sans stand-in were removed — *"Vael has no separate display face (IBM Plex throughout), so there is nothing to stand in for."*

The lesson: the moment a consumer starts inventing its own tokens/typeface, that's a fork; the fix was to delete the layer and consume Vael directly.

## What Vael actually is (as the consumer sees it)

*(afd-website `docs/2026-07-07-afd-website-design.md` §5)*

MUI v7 + Emotion · **IBM Plex Sans/Mono** · **W3C design tokens** (`vael/design-tokens.json`, `tokens.css`, `theme.ts`) · light/dark themes · a full component library documented in **Storybook** · a case-study design spec (`case-study/`).

This also pins the **Fermie → Vael delta**: typography changed **Roboto → IBM Plex Sans/Mono**, while the **token architecture, the W3C format, and the MUI base carried across unchanged**; primary `#1976d2` / secondary `#9c27b0` are identical to the origin.

## How tokens flow downstream (and the risk)

*(afd-website `docs/deck-tech-stack-spec.md`)*

Vael tokens reach AFD as a **manual copy** of `vael-tokens.css` (from `~/dev/vael-design-system/vael/tokens.css`); a Vael upgrade requires a re-copy → documented risk **"token drift."** An earlier plan had Vael wired in as a **git submodule / local link** instead of a copy. (Open improvement: a real published-token path would remove the drift.)

## Parity definition (the FermieDS → Vael contract)

*(afd-website `start-here.md`, locked 2026-07-16)*

**Parity = every origin (FermieDS) component/foundation represented in BOTH** the Vael codebase (`~/dev/vael-design-system`) **AND** the Vael Figma file (`4dNRm8xuERpDNfdXYjlbIn`). The origin's component inventory is treated as the master checklist. Origin-specific items (a branded logo in the AppBar, product-specific loading containers) are deliberately **out of parity** — they don't carry into the public Vael.

---

*Sources merged from `~/dev/afd-website` (`start-here.md`, `docs/2026-07-07-afd-website-design.md`, `docs/2026-07-13-hubspot-architecture-decision.md`, `docs/deck-tech-stack-spec.md`). The afd-website repo remains the home for AFD program docs; see [`downstream.md`](downstream.md).*
