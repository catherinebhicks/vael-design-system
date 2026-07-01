import type React from 'react';
import Highcharts from 'highcharts';
import type { Theme } from '@mui/material/styles';
import { chartVariableColors, chartEventColors, palette, theme } from '../../theme';

// Chart variable → CSS custom property name
export const VC_VAR_NAMES: Record<string, string> = {
  Cpu:        '--vc-var-cpu',
  Memory:     '--vc-var-memory',
  Latency:    '--vc-var-latency',
  Throughput: '--vc-var-throughput',
  Requests:   '--vc-var-requests',
  Storage:    '--vc-var-storage',
};

// Build the full CSS custom property map to inject on the chart container.
export function buildVcVars(t: Theme): React.CSSProperties {
  return {
    // Per-variable colors (long form, for tooltip dot lookup by variable name)
    '--vc-var-cpu':        chartVariableColors.Cpu,
    '--vc-var-memory':     chartVariableColors.Memory,
    '--vc-var-latency':    chartVariableColors.Latency,
    '--vc-var-throughput': chartVariableColors.Throughput,
    '--vc-var-requests':   chartVariableColors.Requests,
    '--vc-var-storage':    chartVariableColors.Storage,
    // Short aliases — used directly by vc-chart.css class rules
    '--vc-cpu':        chartVariableColors.Cpu,
    '--vc-memory':     chartVariableColors.Memory,
    '--vc-latency':    chartVariableColors.Latency,
    '--vc-throughput': chartVariableColors.Throughput,
    '--vc-requests':   chartVariableColors.Requests,
    '--vc-storage':    chartVariableColors.Storage,
    // Event severity colors
    '--vc-event-alarm':     chartEventColors.warning,
    '--vc-event-critical':  chartEventColors.error,
    '--vc-event-override':  chartEventColors.warning,
    '--vc-event-milestone': t.palette.info.main,
    // Semantic ink colors
    '--vc-ink':             t.palette.text.primary,
    '--vc-ink-muted':       t.palette.text.secondary,
    '--vc-surface':         t.palette.background.paper,
    '--vc-border':          t.palette.divider,
    '--vc-grid':            t.palette.divider,
    // Font
    fontFamily:              t.typography.fontFamily,
    fontSize:                t.typography.body2.fontSize,
  } as React.CSSProperties;
}

// ─── Preline-aesthetic chart theme ───────────────────────────────────────────
// Default categorical series colors drawn from the Vael palette (harmonious,
// on-brand, colorblind-distinct). Neutral hairline axes + a rounded, soft-shadow
// tooltip give the clean, modern look of the reskinned system.
const fontFamily = theme.typography.fontFamily as string;
const gridColor = palette.neutral[200];
const axisColor = palette.neutral[300];
const labelColor = palette.neutral[500];
const ink = palette.neutral[900];

const categorical = [
  palette.primary[600],  // blue
  palette.teal[600],     // teal
  palette.amber[600],    // amber
  palette.indigo[700],   // indigo
  palette.rose[600],     // rose
  palette.success[600],  // green
  palette.secondary[600],// purple
  palette.info[500],     // light blue
];

// Apply VC global defaults immediately at import time so they are in place
// before any chart component renders (Highcharts renders synchronously on mount,
// before useEffect would fire).
Highcharts.setOptions({
    colors: categorical,
    accessibility: { enabled: false },
    chart: {
      animation: false,
      spacing: [8, 8, 8, 8],
      plotBorderWidth: 0,
      backgroundColor: 'transparent',
      style: { fontFamily },
    },
    credits: { enabled: false },
    title: { text: null as unknown as undefined },
    subtitle: { text: null as unknown as undefined },
    time: { timezone: undefined },
    lang: { thousandsSep: ',' },
    tooltip: {
      useHTML: true,
      shared: true,
      outside: true,
      backgroundColor: '#ffffff',
      borderColor: gridColor,
      borderRadius: 10,
      borderWidth: 1,
      shadow: { color: 'rgba(16,24,40,0.10)', offsetX: 0, offsetY: 6, opacity: 0.5, width: 10 },
      padding: 10,
      style: { color: ink, fontSize: '12px' },
      followPointer: false,
    },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 2,
        marker: { enabled: false, states: { hover: { enabled: true, radius: 4, lineWidth: 2, lineColor: '#ffffff' } } },
        states: {
          hover: { lineWidthPlus: 1 },
          inactive: { opacity: 0.35 },
        },
      },
      column: { borderRadius: 4, borderWidth: 0, groupPadding: 0.12, pointPadding: 0.04 },
      bar: { borderRadius: 4, borderWidth: 0 },
      pie: { borderWidth: 0 },
      area: { fillOpacity: 0.12, lineWidth: 2 },
    },
    xAxis: {
      type: 'datetime',
      lineColor: axisColor,
      lineWidth: 1,
      tickColor: axisColor,
      tickLength: 4,
      gridLineWidth: 0,
      labels: { y: 16, style: { color: labelColor, fontSize: '11px' } },
    },
    yAxis: {
      gridLineWidth: 1,
      gridLineColor: gridColor,
      lineWidth: 0,
      tickWidth: 0,
      title: { text: null as unknown as undefined },
      labels: { style: { color: labelColor, fontSize: '11px' } },
    },
    legend: {
      enabled: false,
      itemStyle: { color: labelColor, fontWeight: '500', fontSize: '12px' },
      itemHoverStyle: { color: ink },
    },
  });

// Kept for backward compat — defaults are now applied at module load time
export function applyVcDefaults() {}
