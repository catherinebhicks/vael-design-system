"use client";

import { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/* ------------------------------------------------------------------ *
 * Interactive component gallery for beat 7.
 * Click a chip → the live component reveals below. Charts use real
 * Highcharts (the library Vael ships); the rest are faithful, interactive
 * demos built on Vael's tokens. Full 44-component library lives in Storybook.
 * ------------------------------------------------------------------ */

const V = {
  blue: "#1976d2", blueDark: "#1565c0", blueLight: "#42a5f5",
  error: "#d32f2f", warning: "#ed6c02", info: "#0288d1", success: "#2e7d32",
};

/* ---------- stateful helpers ---------- */
function Switch() {
  const [on, setOn] = useState(true);
  return (
    <button className={"d-switch" + (on ? " on" : "")} role="switch" aria-checked={on} aria-label="Switch" onClick={() => setOn(!on)}>
      <span className="knob" />
    </button>
  );
}
function Checkbox() {
  const [v, setV] = useState([true, false, true]);
  const labels = ["Tokens", "Components", "Docs"];
  return (
    <div className="d-checks">
      {labels.map((l, i) => (
        <label key={l} className="d-check">
          <input type="checkbox" checked={v[i]} onChange={() => setV(v.map((x, j) => (j === i ? !x : x)))} />
          <span className="box" /> {l}
        </label>
      ))}
    </div>
  );
}
function Slider() {
  const [v, setV] = useState(64);
  return (
    <div className="d-sliderwrap">
      <input className="d-slider" type="range" min={0} max={100} value={v} onChange={(e) => setV(+e.target.value)} aria-label="Slider" />
      <span className="d-sliderval">{v}</span>
    </div>
  );
}
function Chips() {
  const [chips, setChips] = useState(["primary", "figma", "supernova", "tokens"]);
  return (
    <div className="d-chips">
      {chips.map((c) => (
        <span key={c} className="d-chip">
          {c}
          <button aria-label={"remove " + c} onClick={() => setChips(chips.filter((x) => x !== c))}>×</button>
        </span>
      ))}
      {chips.length === 0 && <span className="d-muted">all removed — refresh to reset</span>}
    </div>
  );
}
function Tabs() {
  const [t, setT] = useState(0);
  const tabs = ["Overview", "Props", "Accessibility"];
  const body = ["A themed component on the token foundation.", "variant · size · color · disabled", "WCAG AA · focus ring · 44px target"];
  return (
    <div className="d-tabs">
      <div className="d-tablist">
        {tabs.map((tb, i) => (
          <button key={tb} className={"d-tab" + (i === t ? " on" : "")} onClick={() => setT(i)}>{tb}</button>
        ))}
      </div>
      <div className="d-tabpanel">{body[t]}</div>
    </div>
  );
}
function Pagination() {
  const [p, setP] = useState(2);
  return (
    <div className="d-pag">
      <button onClick={() => setP(Math.max(1, p - 1))} aria-label="previous">‹</button>
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} className={n === p ? "on" : ""} onClick={() => setP(n)}>{n}</button>
      ))}
      <button onClick={() => setP(Math.min(5, p + 1))} aria-label="next">›</button>
    </div>
  );
}
function Tooltip() {
  return (
    <div className="d-tooltipwrap">
      <button className="d-btn ghost" aria-describedby="tt">Hover me</button>
      <span className="d-tooltip" id="tt" role="tooltip">Token: primary/main · #1976d2</span>
    </div>
  );
}
function Autocomplete() {
  const opts = ["Button", "Badge", "Breadcrumbs", "Card", "Checkbox", "Chip", "Dialog", "Drawer"];
  const [q, setQ] = useState("B");
  const [open, setOpen] = useState(true);
  const filtered = opts.filter((o) => o.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="d-ac">
      <input value={q} onChange={(e) => { setQ(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)} placeholder="Search components…" aria-label="Autocomplete" />
      {open && filtered.length > 0 && (
        <ul className="d-aclist">
          {filtered.map((o) => (
            <li key={o} onClick={() => { setQ(o); setOpen(false); }}>{o}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
function Dialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="d-btn" onClick={() => setOpen(true)}>Open dialog</button>
      {open && (
        <div className="d-overlay" onClick={() => setOpen(false)}>
          <div className="d-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <h5>Publish component?</h5>
            <p>This adds Button v2 to the library and regenerates its docs.</p>
            <div className="d-dialogft">
              <button className="d-btn ghost" onClick={() => setOpen(false)}>Cancel</button>
              <button className="d-btn" onClick={() => setOpen(false)}>Publish</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function Drawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="d-btn" onClick={() => setOpen(true)}>Open drawer</button>
      {open && (
        <div className="d-overlay" onClick={() => setOpen(false)}>
          <aside className="d-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="d-drawerhd">Navigation<button aria-label="close" onClick={() => setOpen(false)}>×</button></div>
            {["Foundations", "Components", "Patterns", "Guides"].map((i) => <div key={i} className="d-drawerrow">{i}</div>)}
          </aside>
        </div>
      )}
    </>
  );
}
function Snackbar() {
  const [show, setShow] = useState(false);
  const timer = useRef<number | null>(null);
  function fire() {
    setShow(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setShow(false), 2600);
  }
  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);
  return (
    <div className="d-snackwrap">
      <button className="d-btn" onClick={fire}>Show snackbar</button>
      {show && <div className="d-snack" role="status">✓ Theme regenerated from tokens</div>}
    </div>
  );
}

/* ---------- charts (real Highcharts) ---------- */
const chartBase: Highcharts.Options = {
  credits: { enabled: false },
  accessibility: { enabled: false }, // decorative demos; data is in the surrounding copy + tab label
  title: { text: undefined },
  legend: { itemStyle: { color: "#8494a9", fontFamily: "var(--font-mono)", fontWeight: "400" } },
  chart: { backgroundColor: "transparent", style: { fontFamily: "var(--font-mono)" }, height: 240 },
  xAxis: { lineColor: "#8494a955", tickColor: "#8494a955", labels: { style: { color: "#8494a9" } } },
  yAxis: { gridLineColor: "#8494a933", title: { text: undefined }, labels: { style: { color: "#8494a9" } } },
};
function AreaChart() {
  const options: Highcharts.Options = {
    ...chartBase,
    chart: { ...chartBase.chart, type: "areaspline" },
    xAxis: { ...chartBase.xAxis, categories: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"] },
    plotOptions: { areaspline: { fillOpacity: 0.18, marker: { enabled: false } } },
    series: [
      { type: "areaspline", name: "Components", data: [4, 9, 15, 22, 34, 44], color: V.blue },
      { type: "areaspline", name: "Doc pages", data: [6, 20, 38, 55, 70, 80], color: V.blueLight },
    ],
  };
  return <div className="gchart"><HighchartsReact highcharts={Highcharts} options={options} /></div>;
}
function DonutChart() {
  const options: Highcharts.Options = {
    ...chartBase,
    chart: { ...chartBase.chart, type: "pie" },
    plotOptions: { pie: { innerSize: "62%", borderWidth: 0, dataLabels: { style: { color: "#8494a9", fontWeight: "400" } } } },
    series: [{
      type: "pie", name: "Tokens",
      data: [
        { name: "Color", y: 82, color: V.blue }, { name: "Type", y: 57, color: V.blueLight },
        { name: "Dimension", y: 40, color: V.blueDark }, { name: "Motion", y: 11, color: V.success },
      ],
    }],
  };
  return <div className="gchart"><HighchartsReact highcharts={Highcharts} options={options} /></div>;
}
function ColumnChart() {
  const options: Highcharts.Options = {
    ...chartBase,
    chart: { ...chartBase.chart, type: "column" },
    xAxis: { ...chartBase.xAxis, categories: ["Core", "Form", "Data-viz", "Nav", "Feedback"] },
    plotOptions: { column: { borderRadius: 4, borderWidth: 0 } },
    series: [{ type: "column", name: "Components", data: [14, 8, 8, 6, 8], color: V.blue }],
  };
  return <div className="gchart"><HighchartsReact highcharts={Highcharts} options={options} /></div>;
}

/* ---------- static/structural demos ---------- */
const Buttons = () => (
  <div className="d-btnrow">
    <button className="d-btn">Primary</button>
    <button className="d-btn sec">Secondary</button>
    <button className="d-btn out">Outlined</button>
    <button className="d-btn ghost">Text</button>
    <button className="d-btn" disabled>Disabled</button>
  </div>
);
const TextField = () => (
  <label className="d-field">
    <span>Label</span>
    <input defaultValue="primary.main" placeholder="Enter a value" />
    <em>Helper text</em>
  </label>
);
const StatCardD = () => (
  <div className="d-statcard">
    <div className="d-statlabel">Components</div>
    <div className="d-statnum">44 <span className="d-trend">▲ 17</span></div>
    <div className="d-statsub">since the startup build</div>
  </div>
);
const CardD = () => (
  <div className="d-card">
    <div className="d-cardhd">Button</div>
    <div className="d-cardbody">A themed action on the token foundation — variants, sizes, and states, all driven by design tokens.</div>
    <div className="d-cardft"><button className="d-btn sm">View</button></div>
  </div>
);
const Alerts = () => (
  <div className="d-alerts">
    {([["info", V.info, "Tokens synced from Figma."], ["success", V.success, "Theme regenerated."], ["warning", V.warning, "3 components pending audit."], ["error", V.error, "Contrast check failed."]] as const).map(([k, c, t]) => (
      <div key={k} className="d-alert" style={{ borderColor: c, color: c }}><b>{k}</b><span>{t}</span></div>
    ))}
  </div>
);
const Badges = () => (
  <div className="d-badgerow">
    <span className="d-badge"><span className="d-badgeic">◧</span><i>3</i></span>
    <span className="d-badge"><span className="d-badgeic">✉</span><i>12</i></span>
    <span className="d-badge"><span className="d-badgeic">⚑</span><i className="dot" /></span>
  </div>
);
const Avatars = () => (
  <div className="d-avatars">
    {["CH", "AI", "DS", "+9"].map((a, i) => <span key={a} className={"d-avatar" + (i === 3 ? " more" : "")}>{a}</span>)}
  </div>
);
const Stepper = () => (
  <div className="d-stepper">
    {["Tokens", "Theme", "Docs", "Ship"].map((s, i) => (
      <div key={s} className={"d-step" + (i < 2 ? " done" : i === 2 ? " active" : "")}>
        <span className="d-stepdot">{i < 2 ? "✓" : i + 1}</span><span>{s}</span>
      </div>
    ))}
  </div>
);
const Timeline = () => (
  <div className="d-timeline">
    {[["Wk 1", "Token foundation"], ["Wk 3", "27 components"], ["Wk 6", "Docs generator + handoff"], ["Later", "Rebuilt → 44, in the open"]].map(([w, t]) => (
      <div key={w} className="d-tlrow"><span className="d-tldot" /><div><b>{w}</b><span>{t}</span></div></div>
    ))}
  </div>
);
const FileUpload = () => (
  <div className="d-dropzone"><div className="d-dzicon">⤒</div><div>Drag files here, or <span className="d-link">browse</span></div><em>SVG, PNG · token exports</em></div>
);
const DataTable = ({ cols }: { cols: number }) => {
  const head = ["Component", "Variant", "A11y", "Version"].slice(0, cols);
  const rows = [
    ["Button", "primary", "AA", "2.1.0"], ["TextField", "outlined", "AA", "1.4.0"],
    ["DataGrid", "compact", "AA", "3.0.0"], ["Dialog", "modal", "AA", "1.1.0"],
  ];
  return (
    <div className="d-tablewrap">
      <table className="d-table">
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.slice(0, cols).map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
};
const FlowCanvas = () => (
  <svg className="d-flow" viewBox="0 0 340 120" role="img" aria-label="Figma to product node flow">
    {[["Figma", 8], ["Supernova", 96], ["tokens", 190], ["product", 270]].map(([label, x], i, a) => (
      <g key={label as string}>
        {i < a.length - 1 && <line x1={(x as number) + 62} y1={60} x2={a[i + 1][1] as number} y2={60} stroke="var(--line-2)" strokeWidth={2} />}
        <rect x={x as number} y={44} width={i === 3 ? 62 : 70} height={32} rx={7} fill="var(--panel)" stroke="var(--blue)" />
        <text x={(x as number) + (i === 3 ? 31 : 35)} y={64} textAnchor="middle" fontSize={11} fontFamily="var(--font-mono)" fill="var(--blue)">{label}</text>
      </g>
    ))}
  </svg>
);

/* ---------- registry ---------- */
type Demo = { name: string; el: React.ReactNode; chart?: boolean };
const DEMOS: Demo[] = [
  { name: "Button", el: <Buttons /> },
  { name: "TextField", el: <TextField /> },
  { name: "Charts", el: <AreaChart />, chart: true },
  { name: "ChartCard", el: <DonutChart />, chart: true },
  { name: "BarChart", el: <ColumnChart />, chart: true },
  { name: "StatCard", el: <StatCardD /> },
  { name: "DataGrid", el: <DataTable cols={4} /> },
  { name: "AgGrid", el: <DataTable cols={4} /> },
  { name: "Dialog", el: <Dialog /> },
  { name: "Drawer", el: <Drawer /> },
  { name: "Snackbar", el: <Snackbar /> },
  { name: "Autocomplete", el: <Autocomplete /> },
  { name: "Switch", el: <Switch /> },
  { name: "Checkbox", el: <Checkbox /> },
  { name: "Slider", el: <Slider /> },
  { name: "Chip", el: <Chips /> },
  { name: "Tabs", el: <Tabs /> },
  { name: "Alert", el: <Alerts /> },
  { name: "Badge", el: <Badges /> },
  { name: "Avatar", el: <Avatars /> },
  { name: "Tooltip", el: <Tooltip /> },
  { name: "Card", el: <CardD /> },
  { name: "Stepper", el: <Stepper /> },
  { name: "Timeline", el: <Timeline /> },
  { name: "Pagination", el: <Pagination /> },
  { name: "FileUpload", el: <FileUpload /> },
  { name: "FlowCanvas", el: <FlowCanvas /> },
];

export default function ComponentGallery() {
  const [active, setActive] = useState(0);
  const demo = DEMOS[active];
  return (
    <div className="gallery">
      <div className="gchips" role="tablist" aria-label="Vael components">
        {DEMOS.map((d, i) => (
          <button
            key={d.name}
            role="tab"
            aria-selected={i === active}
            className={"cc gcc" + (i === active ? " on" : "")}
            onClick={() => setActive(i)}
          >
            {d.name}
          </button>
        ))}
      </div>
      <div className="gstage" role="tabpanel" aria-label={demo.name + " demo"}>
        <div className="glabel"><span className="dot" /> {demo.name}</div>
        <div className="gdemo">{demo.el}</div>
      </div>
    </div>
  );
}
