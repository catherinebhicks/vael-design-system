import type React from 'react';
import Highcharts from 'highcharts';
import type { Theme } from '@mui/material/styles';
import { chartVariableColors, chartEventColors } from '../../theme';

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

// Apply VC global defaults immediately at import time so they are in place
// before any chart component renders (Highcharts renders synchronously on mount,
// before useEffect would fire).
Highcharts.setOptions({
    accessibility: { enabled: false },
    chart: {
      animation: false,
      spacing: [8, 8, 8, 8],
      plotBorderWidth: 0,
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
      padding: 0,
      borderRadius: 0,
      borderWidth: 0,
      shadow: false,
      followPointer: false,
    },
    plotOptions: {
      series: {
        animation: false,
        marker: { enabled: false, states: { hover: { enabled: false } } },
        states: {
          hover: { lineWidthPlus: 2 },
          inactive: { opacity: 0.35 },
        },
      },
    },
    xAxis: {
      type: 'datetime',
      lineWidth: 1,
      tickLength: 4,
      labels: { y: 16 },
    },
    yAxis: {
      gridLineWidth: 1,
      lineWidth: 0,
      tickWidth: 0,
      title: { text: null as unknown as undefined },
    },
    legend: { enabled: false },
  });

// Kept for backward compat — defaults are now applied at module load time
export function applyVcDefaults() {}
