import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack } from '@mui/material';
import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  SparkLineChart,
  Gauge,
  RadarChart,
} from '../src/components/StandardCharts';

/**
 * Charts — Standard tier, backed by @mui/x-charts (community). Lightweight,
 * SVG, theme-native. The default for product charts; reach for the Advanced
 * (Highcharts) tier only for SPC / multi-axis / solid-gauge / big-data / export.
 */
const meta: Meta = {
  title: 'Data Viz/Charts (Standard · MUI X)',
  tags: ['autodocs'],
};
export default meta;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const Line: StoryObj = {
  render: () => (
    <LineChart
      height={260}
      xAxis={[{ data: months, scaleType: 'point' }]}
      series={[{ data: [4, 6, 5, 8, 7, 9], area: true }]}
    />
  ),
};

export const Bar: StoryObj = {
  render: () => (
    <BarChart
      height={260}
      xAxis={[{ data: months, scaleType: 'band' }]}
      series={[{ data: [5, 7, 6, 9, 8, 11] }]}
    />
  ),
};

export const Pie: StoryObj = {
  render: () => (
    <PieChart
      height={260}
      series={[
        {
          data: [
            { id: 0, value: 45, label: 'Design' },
            { id: 1, value: 30, label: 'Research' },
            { id: 2, value: 25, label: 'Systems' },
          ],
          innerRadius: 48,
        },
      ]}
    />
  ),
};

export const Scatter: StoryObj = {
  render: () => (
    <ScatterChart
      height={260}
      series={[
        {
          data: Array.from({ length: 20 }, (_, i) => ({ x: i, y: (i % 5) + Math.round(Math.abs(Math.sin(i)) * 6), id: i })),
        },
      ]}
    />
  ),
};

export const Radar: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <RadarChart
        height={300}
        series={[{ label: 'Proficiency', data: [5, 4, 5, 4, 5, 3] }]}
        radar={{ max: 5, metrics: ['Research', 'IA', 'Visual', 'Prototyping', 'Systems', 'Facilitation'] }}
      />
    </Box>
  ),
};

export const SparklineAndGauge: StoryObj = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <SparkLineChart data={[3, 5, 4, 6, 5, 8, 7]} height={40} width={160} area />
      <Gauge width={120} height={120} value={68} startAngle={-110} endAngle={110} text={({ value }) => `${value}%`} />
    </Stack>
  ),
};
