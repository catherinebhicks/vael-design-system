import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The chart layer — Vael design system",
  description:
    "How the Highcharts data-viz layer was folded into the Vael design system — theme the engine, don't fork it — the three-layer mechanism, guardrails, and what it bought.",
};

type Layer = { n: string; title: string; body: string };

const LAYERS: Layer[] = [
  {
    n: "01",
    title: "Global defaults, applied at import",
    body: "A single Highcharts.setOptions runs at module-import time — before any chart mounts, because Highcharts renders synchronously and a useEffect would fire too late. It sets what's true for every chart: styled mode, a transparent surface, the categorical palette drawn from the system's ramps, IBM Plex Mono labels, accessibility on, and no chrome.",
  },
  {
    n: "02",
    title: "A per-render theme merge",
    body: "Global defaults are static; the theme is not — it flips light and dark. So each chart merges a live, theme-aware options object on every render. buildVcThemeOptions(theme) reads the current MUI theme and returns axis colors, grid lines, tooltip ink, and labels derived from the palette. Because it runs per render, the charts switch light/dark together with every other component — no chart-specific toggle, no duplicated palette.",
  },
  {
    n: "03",
    title: "A CSS-variable bridge for the SVG",
    body: "Some of a chart isn't reachable from a config object — the parts Highcharts paints as SVG classes in styled mode, plus the tooltip, which renders in a portal outside the chart container. Those read from a --vc-* custom-property map injected on the container, so even the parts outside the React tree pull from the same tokens.",
  },
];

const GUARDRAILS = [
  "Styled mode only — no default Highcharts theme, no inline hardcoded colors.",
  "At most 4 visible series and 2 y-axes by default — the ceiling where pre-attentive processing still works and axis assignment stays unambiguous.",
  "Line style carries meaning alongside color — actual (solid), threshold (dashed), predicted (dotted) — so a chart survives print, screenshots, and colorblind readers.",
  "Visible gaps — no interpolation across missing data.",
];

export default function ChartLayerPage() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--dim)", textDecoration: "none" }}>
            <span className="node" />
            <b style={{ color: "var(--ink)" }}>&larr;</b> Back to the case study
          </Link>
          <span className="mono hidem">The chart layer</span>
        </div>
      </div>

      <main className="sec">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="kicker">
            <span className="no">&mdash;</span>
            <span className="eyebrow">Even the charts</span>
          </div>
          <h1 className="big" style={{ marginTop: 10 }}>
            How the charts became part of the system.
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Most design systems stop at the component boundary and leave charts to whatever library each
            team reaches for — which is exactly where a system drifts into a second palette, a second
            typeface, a second set of conventions. Vael treats charts as first-class system components. Here
            is how.
          </p>

          <section style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
            <div className="kicker">
              <span className="no">&mdash;</span>
              <span className="eyebrow">The decision</span>
            </div>
            <h2 className="big" style={{ marginTop: 10, fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
              Theme the engine, don&rsquo;t fork it.
            </h2>
            <div className="prose">
              <p>
                The tempting move is to build a bespoke charting layer so it matches the system perfectly.
                It&rsquo;s also the wrong move — you inherit years of solved edge cases (axis math, stacking,
                accessibility, export, timezones). So the call was to adopt a mature engine —{" "}
                <span className="mono" style={{ color: "var(--blue)" }}>Highcharts</span> — and theme it
                completely, never fork it, never hand-roll SVG. It earns its place for three reasons:{" "}
                <b>styled mode</b> (the whole look is driven from the outside by tokens, not a config full of
                hex), <b>accessibility built in</b> (screen-reader descriptions and keyboard nav that are hard
                to retrofit), and <b>breadth without new abstractions</b> (line, area, bar, donut, box, scatter
                — one engine, no parallel vocabulary). The judgment — use a mature engine and own the theming —
                is the interesting part. The wiring is just the execution of it.
              </p>
            </div>
          </section>

          <section style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
            <div className="kicker">
              <span className="no">&mdash;</span>
              <span className="eyebrow">Three layers, one source of truth</span>
            </div>
            <div className="rungs" style={{ marginTop: 18 }}>
              {LAYERS.map((l) => (
                <div key={l.n} className="panel">
                  <span className="tag">Layer {l.n}</span>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
            <div className="kicker">
              <span className="no">&mdash;</span>
              <span className="eyebrow">Guardrails, enforced in code</span>
            </div>
            <div className="prose">
              <p>Owning the theme also meant owning the constraints — enforced in code, not left to a doc:</p>
              <ul style={{ margin: "12px 0 0", paddingLeft: 22, color: "var(--dim)", lineHeight: 1.6 }}>
                {GUARDRAILS.map((g, i) => (
                  <li key={i} style={{ marginTop: 8, maxWidth: "68ch" }}>{g}</li>
                ))}
              </ul>
            </div>
          </section>

          <section style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
            <div className="kicker">
              <span className="no">&mdash;</span>
              <span className="eyebrow">What it bought</span>
            </div>
            <div className="prose">
              <p>
                One toggle themes everything — charts and UI switch light/dark from the same source, so a chart
                can&rsquo;t fall out of sync. There&rsquo;s no parallel design language: chart color, type, and
                ink are the product&rsquo;s tokens, not a second palette maintained by hand. Accessibility comes
                for free on every chart because it&rsquo;s set once at the engine level. And new chart types are
                new presets over a themed engine — not new code to keep on-brand.
              </p>
            </div>
          </section>

          <p style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
            <Link href="/" style={{ color: "var(--dim)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
              &larr; Back to the case study
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
