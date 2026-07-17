# Designing with an LLM (Figma MCP + Vael)

**Last updated: 2026-07-17.** This is the **fast-moving** guide — Figma's MCP server,
endpoints, plan requirements, and tool names change often. Treat the specifics here
as a dated snapshot and confirm against Figma's current "Dev Mode MCP server" /
"Figma MCP" docs before relying on them. Bump the date above when you update this.

There are **three things** you can do with an LLM once it's connected to the Vael
Figma file through MCP:

1. **Ingest** — feed the design system to an AI as structured context (read).
2. **Design in it** — have the AI *create* designs in Figma using Vael's real
   components and tokens (write).
3. **Round-trip to code** — make a change in Figma and have the AI reflect it in the
   design-system code so Storybook/Chromatic stay in sync (sync).

All three run over the same connection, so set that up first.

---

## Connecting (MCP setup)

An AI agent reads/writes the **live** Vael Figma file through Figma's **MCP (Model
Context Protocol) server** — so prompts resolve against the real file (real tokens,
real components), not a guess.

### Two ways to connect

**1. Local — the Dev Mode MCP server (Figma desktop app).**
1. Open the Vael file in the **Figma desktop app**.
2. Main menu → **Preferences → Enable Dev Mode MCP Server** (needs a **Dev or Full
   seat** on a paid plan). A toast confirms it's running locally.
3. Default endpoint: **`http://127.0.0.1:3845/mcp`** (streamable HTTP; older builds
   used `/sse`). The desktop app must stay open, and the server reads the **current
   file / selected node**.

**2. Remote — Figma's hosted MCP server.**
- Endpoint: **`https://mcp.figma.com/mcp`**, authenticated via **OAuth** (the client
  prompts you to sign in). No desktop app required; good for headless/agent use.

### Point it at the Vael file

- **File key:** `4dNRm8xuERpDNfdXYjlbIn`
- Give the agent a node-scoped URL for precision, e.g.
  `https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=<node-id>`,
  or (local server) just **select a frame/component in the desktop app** and ask.

### Add the server to an MCP client

Most clients read a JSON config (Claude Desktop `claude_desktop_config.json`,
Cursor/VS Code `mcp.json`, etc.):

```json
{
  "mcpServers": {
    "figma": { "url": "http://127.0.0.1:3845/mcp" }
  }
}
```

Claude Code CLI, local server:

```bash
claude mcp add --transport http figma http://127.0.0.1:3845/mcp
```

For the remote server, swap the URL for `https://mcp.figma.com/mcp` and complete the
OAuth prompt.

### The tools it exposes today

- **Read/inspect:** `get_design_context` (code + structure for a node),
  `get_variable_defs` (the design tokens / variables in scope), `get_metadata`
  (node tree / layout), `get_screenshot` (rendered image), `get_code_connect_map`
  (links Figma components to their code counterparts).
- **Write/generate:** `use_figma` (run Figma Plugin-API operations — create/edit
  nodes, variants, variables) and `generate_figma_design` (capture/generate a design
  into the file).

---

## 1. Ingest — Vael as AI context (read)

The simplest use: let an agent *read* the system so its output matches Vael instead
of inventing styles.

- **Tokens first:** `get_variable_defs` pulls Vael's Blueprint variables so generated
  code/design uses real token names, not hardcoded hex.
- **One component at a time:** point at a single `Category / Component` page (the file
  is one-page-per-component) for clean, scoped context.
- **Pair with the code:** the same components live in Storybook + `src/components/`,
  so the agent can cross-check the Figma node against the shipped implementation.

Typical prompt: *"Read the Vael `Inputs / Button` page and its variables, then
summarize the button variants and the tokens they use."*

## 2. Design *in* an LLM — generate on Vael (write)

You can have the agent **build new screens and layouts directly in Figma** using
Vael's published components and tokens — not by drawing boxes with hex codes, but by
instancing the real library components and binding the real variables.

**How it works:** with the MCP connection live, the agent uses `search_design_system`
to find Vael components, imports them as instances, and lays them out with
`use_figma` — binding fills/spacing/radius to Vael variables. For a first-pass
capture of an existing web page, `generate_figma_design` can rasterize the layout and
the agent then rebuilds it with real component instances.

**Do it well:**
- **Name the file/library** in the prompt so it reuses Vael components rather than
  redrawing them: *"Design a pricing page in the Vael file using Vael components
  (HeroBanner, PricingCard-equivalent, CtaBar) and Blueprint tokens."*
- **Work section by section** (header → hero → body → footer), reviewing each — big
  one-shot generations drift.
- **Keep it on the token system.** If the agent hardcodes a color, tell it to bind the
  matching Vael variable instead.
- **Treat output as a first draft.** AI is fast at assembly; the design judgment —
  hierarchy, rhythm, "is this actually good" — is still yours. (That's the whole Vael
  thesis: when production cost collapses, judgment becomes the job.)

> If you're using Claude, the Figma plugin ships skills that encode these workflows —
> `figma-generate-design` (build screens from the design system) and
> `figma-generate-library` (build/extend components). They enforce the
> "reuse components + bind tokens" patterns above.

## 3. Round-trip — Figma change → design-system code (sync)

The most valuable loop: you change something in **Figma** (a component, a token, a new
variant) and want the **code** design system — the React component in
`src/components/`, the token in `vael/`, and the Storybook story — to match.

**The flow:**
1. **Make the change in Figma** (e.g., adjust a component's padding, add a variant, or
   change a Blueprint token value).
2. **Point the agent at the changed node** (select it, or pass its `node-id` URL) and
   ask it to read the design with `get_design_context` + `get_variable_defs`.
3. **The agent updates the code** — edits the matching component in `src/components/…`
   and/or the token in `vael/design-tokens.json` / `vael/theme.ts`, and adjusts the
   story/MDX.
4. **Verify locally** — `npm run typecheck`, then `npm run storybook` to see it render;
   Chromatic + the a11y CI catch regressions on push.
5. **You review the diff and commit.** Nothing auto-commits — every change is gated.

**Make the loop reliable with Code Connect.** `get_code_connect_map` /
`add_code_connect_map` link each Figma component to its code file, so the agent knows
*which* `src/components/*` file a given Figma node corresponds to — turning "find the
right component" from a guess into a lookup.

**Keep it governed.** Changes should flow through the **token layer**, and downstream
products should *extend* Vael, not fork it — see
[../consuming-vael.md](../consuming-vael.md). Tokens are the contract between design
and code; when they move, everything downstream moves with them.

### Which direction is the source of truth?

- **Design intent** (what a component looks like, the token values) → **Figma** leads,
  code follows.
- **Implementation** (behavior, a11y, props, real interaction) → **code/Storybook**
  leads; Figma is the visual spec.

The round-trip keeps the two honest; the LLM is the translator between them, not the
decider.

---

## Reality check

- **This is assisted, not automatic.** Every generated design needs a design review;
  every code change needs the build to pass and a human commit.
- **MCP is young and shifting** — re-verify the setup section against Figma's current
  docs (and bump the date at the top when you do).
- **AI collapses the cost of production, not the need for judgment.** These workflows
  make you faster; they don't decide whether the result is good.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| MCP client can't reach the local server | Desktop app must be open with the file loaded and **Dev Mode MCP Server enabled**; confirm the endpoint/port (`http://127.0.0.1:3845/mcp`). |
| MCP returns nothing / wrong node | Select the target node in the desktop app, or pass a `node-id`-scoped file URL; the local server reads the current selection/file. |
| Generated design uses hardcoded colors | Tell the agent to bind the matching Vael variable (`get_variable_defs` first); point it explicitly at the Vael library. |
| Agent edits the wrong code file on round-trip | Set up **Code Connect** so Figma components map to their `src/components/*` files. |

## Where this fits

- **[using-storybook.md](using-storybook.md)** — browse/run the components in code.
- **[import-into-figma.md](import-into-figma.md)** — get the design file into Figma first.
- **[../consuming-vael.md](../consuming-vael.md)** — the governance model these sync
  workflows must respect (extend, don't fork).
