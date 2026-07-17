"use client";

import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/* ------------------------------------------------------------------ *
 * Chart-type gallery for the data-viz beat. Mirrors ComponentGallery:
 * click a chip → the live chart reveals below. Every chart is REAL
 * Highcharts (the engine Vael themes, never forks), styled from the
 * same tokens as the component library — mono labels, hairline axes,
 * the categorical palette. Full chart system lives in Storybook.
 * ------------------------------------------------------------------ */

// Categorical palette — the Vael ramps (blue / light-blue / teal / amber /
// green / rose), colorblind-distinct, same set the design system ships.
const C = {
  blue: "#1976d2", blueLight: "#42a5f5", teal: "#0891b2",
  amber: "#d97706", green: "#2e7d32", rose: "#e11d48",
};
const AXIS = "#8494a9";

// Shared theme: transparent surface, IBM Plex Mono labels, hairline axes —
// the styled-mode base every chart in the system inherits.
const base: Highcharts.Options = {
  credits: { enabled: false },
  accessibility: { enabled: false }, // decorative demos; the chart type is named in the chip + label
  title: { text: undefined },
  chart: { backgroundColor: "transparent", style: { fontFamily: "var(--font-mono)" }, height: 260, spacing: [12, 8, 8, 8] },
  legend: { itemStyle: { color: AXIS, fontFamily: "var(--font-mono)", fontWeight: "400", fontSize: "11px" } },
  xAxis: { lineColor: AXIS + "55", tickColor: AXIS + "55", labels: { style: { color: AXIS, fontSize: "10px" } } },
  yAxis: { gridLineColor: AXIS + "26", title: { text: undefined }, labels: { style: { color: AXIS, fontSize: "10px" } } },
  tooltip: { backgroundColor: "#0f1721", borderColor: AXIS + "55", style: { color: "#e6edf5", fontFamily: "var(--font-mono)" } },
  plotOptions: { series: { animation: { duration: 450 } } },
};

const WEEKS = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"];

function chart(options: Highcharts.Options) {
  return (
    <div className="gchart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

/* ---------- one demo per chart type ---------- */
function LineChart() {
  return chart({
    ...base,
    chart: { ...base.chart, type: "spline" },
    xAxis: { ...base.xAxis, categories: WEEKS },
    plotOptions: { spline: { marker: { enabled: false }, lineWidth: 2 } },
    series: [
      { type: "spline", name: "Actual", data: [12, 19, 28, 41, 58, 72], color: C.blue },
      { type: "spline", name: "Target", data: [15, 25, 35, 45, 55, 65], color: C.amber, dashStyle: "Dash", lineWidth: 2 },
      { type: "spline", name: "Forecast", data: [10, 16, 24, 36, 52, 68], color: C.teal, dashStyle: "Dot", lineWidth: 1 },
    ],
  });
}
function AreaChart() {
  return chart({
    ...base,
    chart: { ...base.chart, type: "areaspline" },
    xAxis: { ...base.xAxis, categories: WEEKS },
    plotOptions: { areaspline: { stacking: "normal", fillOpacity: 0.22, marker: { enabled: false }, lineWidth: 1.5 } },
    series: [
      { type: "areaspline", name: "Core", data: [4, 6, 9, 12, 14, 14], color: C.blue },
      { type: "areaspline", name: "Form", data: [2, 3, 5, 6, 8, 8], color: C.blueLight },
      { type: "areaspline", name: "Data-viz", data: [1, 2, 3, 5, 7, 8], color: C.teal },
    ],
  });
}
function BarChart() {
  return chart({
    ...base,
    chart: { ...base.chart, type: "column" },
    xAxis: { ...base.xAxis, categories: ["Core", "Form", "Data-viz", "Nav", "Feedback"] },
    plotOptions: { column: { borderRadius: 4, borderWidth: 0 } },
    series: [{ type: "column", name: "Components", data: [14, 8, 8, 6, 8], color: C.blue }],
  });
}
function DonutChart() {
  return chart({
    ...base,
    chart: { ...base.chart, type: "pie" },
    plotOptions: { pie: { innerSize: "64%", borderWidth: 0, dataLabels: { style: { color: AXIS, fontWeight: "400", fontSize: "11px" }, distance: 12 } } },
    series: [{
      type: "pie", name: "Tokens",
      data: [
        { name: "Color", y: 82, color: C.blue }, { name: "Type", y: 57, color: C.blueLight },
        { name: "Dimension", y: 40, color: C.teal }, { name: "Motion", y: 11, color: C.green },
      ],
    }],
  });
}
function Sparkline() {
  return chart({
    ...base,
    chart: { ...base.chart, type: "areaspline", height: 200 },
    xAxis: { ...base.xAxis, categories: WEEKS, visible: false },
    yAxis: { ...base.yAxis, visible: false },
    legend: { enabled: false },
    plotOptions: { areaspline: { fillOpacity: 0.16, marker: { enabled: false }, lineWidth: 2 } },
    series: [{ type: "areaspline", name: "Adoption", data: [4, 9, 15, 22, 34, 44], color: C.blue }],
  });
}
function ScatterChart() {
  return chart({
    ...base,
    chart: { ...base.chart, type: "scatter" },
    xAxis: { ...base.xAxis, title: { text: "Effort", style: { color: AXIS } } },
    yAxis: { ...base.yAxis, title: { text: "Reuse", style: { color: AXIS } } },
    plotOptions: { scatter: { marker: { radius: 5, symbol: "circle" } } },
    series: [
      { type: "scatter", name: "Core", color: C.blue, data: [[2, 9], [3, 8], [4, 9], [3, 7], [5, 8]] },
      { type: "scatter", name: "Peripheral", color: C.rose, data: [[6, 3], [7, 2], [5, 4], [8, 3], [7, 5]] },
    ],
  });
}

/* ---------- registry ---------- */
type ChartDemo = { name: string; el: React.ReactNode };
const CHARTS: ChartDemo[] = [
  { name: "Line", el: <LineChart /> },
  { name: "Area", el: <AreaChart /> },
  { name: "Bar", el: <BarChart /> },
  { name: "Donut", el: <DonutChart /> },
  { name: "Sparkline", el: <Sparkline /> },
  { name: "Scatter", el: <ScatterChart /> },
];

export default function ChartGallery() {
  const [active, setActive] = useState(0);
  const demo = CHARTS[active];
  return (
    <div className="gallery">
      <div className="gchips" role="tablist" aria-label="Vael chart types">
        {CHARTS.map((d, i) => (
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
      <div className="gstage" role="tabpanel" aria-label={demo.name + " chart demo"}>
        <div className="glabel"><span className="dot" /> {demo.name}</div>
        <div className="gdemo">{demo.el}</div>
      </div>
    </div>
  );
}
