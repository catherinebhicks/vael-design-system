import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import { ControlChart } from '../src/components/Charts/ControlChart';
import { MultiAxisChart } from '../src/components/Charts/MultiAxisChart';
import { GaugeChart } from '../src/components/Charts/GaugeChart';
import { SparklineChart } from '../src/components/Charts/SparklineChart';

// --- Deterministic data generators (match VC pattern in charts.js) ---

const MIN = 60_000;

function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeRange(startMs: number, hours: number, stepMin: number): number[] {
  const n = Math.floor((hours * 60) / stepMin);
  return Array.from({ length: n }, (_, i) => startMs + i * stepMin * MIN);
}

const START = Date.UTC(2026, 3, 17, 6, 0, 0);

function cpuData() {
  const rnd = mulberry32(7);
  const ts = makeRange(START, 12, 5);
  const actual: [number, number][] = ts.map((t, i) => [t, +(40 + Math.sin(i / 18) * 3.5 + (rnd() - 0.5) * 1.6 + (i > 70 && i < 82 ? -6 : 0)).toFixed(2)]);
  const threshold: [number, number][] = ts.map((t) => [t, 40]);
  return { actual, threshold, events: [
    { t: ts[30], type: 'override' as const, severity: 'info' as const, label: 'Manual override' },
    { t: ts[74], type: 'alarm' as const, severity: 'warning' as const, label: 'Cpu low alarm' },
  ]};
}

function multiData() {
  const rnd = mulberry32(11);
  const ts = makeRange(START, 10, 5);
  return {
    Cpu:        ts.map((t, i): [number, number] => [t, +(42 + Math.sin(i / 20) * 4 + (rnd() - 0.5) * 1.2).toFixed(2)]),
    Memory:     ts.map((t, i): [number, number] => [t, +(37 + Math.sin(i / 40) * 0.4 + (rnd() - 0.5) * 0.1).toFixed(2)]),
    Latency:    ts.map((t, i): [number, number] => [t, +(7.1 + Math.sin(i / 35) * 0.15 + (rnd() - 0.5) * 0.05).toFixed(3)]),
    Throughput: ts.map((t, i): [number, number] => [t, +(180 + Math.sin(i / 25) * 12 + (rnd() - 0.5) * 3).toFixed(0)]),
  };
}

const cpuChart = cpuData();
const multi = multiData();

// ---

const meta: Meta = {
  title: 'Data Viz/Charts (Advanced · Highcharts)',
  tags: ['autodocs'],
  parameters: {
    a11y: { test: 'todo' },
    layout: 'padded',
    // Highcharts renders SVG after layout — give Chromatic time to capture it
    chromatic: { delay: 800 },
  },
};
export default meta;

export const ControlChartCpu: StoryObj = {
  name: 'ControlChart — Cpu',
  render: () => (
    <ControlChart
      variable="Cpu"
      actual={cpuChart.actual}
      threshold={cpuChart.threshold}
      deadband={[37, 43]}
      events={cpuChart.events}
      unit="%"
    />
  ),
};

export const ControlChartMemory: StoryObj = {
  name: 'ControlChart — Memory',
  render: () => {
    const rnd = mulberry32(3);
    const ts = makeRange(START, 8, 5);
    const actual: [number, number][] = ts.map((t, i) => [t, +(37 + Math.sin(i / 30) * 0.3 + (rnd() - 0.5) * 0.08).toFixed(2)]);
    const threshold: [number, number][] = ts.map((t) => [t, 37]);
    return (
      <ControlChart
        variable="Memory"
        actual={actual}
        threshold={threshold}
        deadband={[36.5, 37.5]}
        unit="%"
        precision={2}
      />
    );
  },
};

export const MultiAxisStory: StoryObj = {
  name: 'MultiAxisChart — Cpu / Memory / Latency / Throughput',
  render: () => (
    <MultiAxisChart
      height={380}
      series={[
        { variable: 'Cpu',        name: 'Cpu',        data: multi.Cpu,        unit: '%',   yAxisIndex: 0 },
        { variable: 'Memory',     name: 'Memory',     data: multi.Memory,     unit: '%',   yAxisIndex: 1 },
        { variable: 'Latency',    name: 'Latency',    data: multi.Latency,    unit: 'ms',  yAxisIndex: 2 },
        { variable: 'Throughput', name: 'Throughput', data: multi.Throughput, unit: 'rps', yAxisIndex: 3 },
      ]}
    />
  ),
};

export const GaugeChartCpu: StoryObj = {
  name: 'GaugeChart — Cpu',
  render: () => (
    <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
      <Box textAlign="center">
        <GaugeChart variable="Cpu" value={41.2} min={0} max={100} threshold={40} deadband={[37, 43]} unit="%" />
        <Typography variant="caption" color="text.secondary">Cpu · In deadband</Typography>
      </Box>
      <Box textAlign="center">
        <GaugeChart variable="Memory" value={37.1} min={34} max={40} threshold={37} deadband={[36.5, 37.5]} unit="%" />
        <Typography variant="caption" color="text.secondary">Memory · Nominal</Typography>
      </Box>
      <Box textAlign="center">
        <GaugeChart variable="Latency" value={7.05} min={6.5} max={7.5} threshold={7.1} deadband={[6.9, 7.3]} unit="ms" precision={2} />
        <Typography variant="caption" color="text.secondary">Latency · Nominal</Typography>
      </Box>
    </Box>
  ),
};

export const SparklineStory: StoryObj = {
  name: 'SparklineChart — inline metric trends',
  render: () => {
    const ts = makeRange(START, 2, 5);
    const rnd = mulberry32(5);
    const cpuSpark: [number, number][] = ts.map((t, i) => [t, +(40 + Math.sin(i / 8) * 2 + (rnd() - 0.5)).toFixed(2)]);
    const memSpark: [number, number][] = ts.map((t, i) => [t, +(37 + Math.sin(i / 12) * 0.2).toFixed(2)]);
    const metrics = [
      { label: 'Cpu',    value: '41.2 %',  data: cpuSpark, variable: 'Cpu' as const },
      { label: 'Memory', value: '37.1 %',  data: memSpark, variable: 'Memory' as const },
    ];
    return (
      <Box display="flex" gap={4} flexWrap="wrap">
        {metrics.map((m) => (
          <Box key={m.label} display="flex" alignItems="center" gap={1} p={1.5} border="1px solid" borderColor="divider" borderRadius={1}>
            <Box>
              <Typography variant="caption" color="text.secondary">{m.label}</Typography>
              <Typography variant="h6" lineHeight={1}>{m.value}</Typography>
            </Box>
            <SparklineChart data={m.data} variable={m.variable} height={40} width={80} />
          </Box>
        ))}
      </Box>
    );
  },
};
