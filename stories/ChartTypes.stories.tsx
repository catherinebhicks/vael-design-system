import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { DonutChart } from '../src/components/Charts/DonutChart';
import { BarChart } from '../src/components/Charts/BarChart';
import { AreaChart } from '../src/components/Charts/AreaChart';

const meta: Meta = {
  title: 'Data Viz/Charts (Advanced · Highcharts)/Types',
  parameters: {
    a11y: { test: 'todo' },
    layout: 'padded' },
};
export default meta;

const wrap = (el: React.ReactNode) => <Box sx={{ maxWidth: 560 }}>{el}</Box>;

export const Donut: StoryObj = {
  render: () =>
    wrap(
      <DonutChart
        centerLabel={{ value: '2,480', label: 'Total' }}
        data={[
          { name: 'Direct', y: 1040 },
          { name: 'Referral', y: 620 },
          { name: 'Organic', y: 480 },
          { name: 'Social', y: 340 },
        ]}
      />,
    ),
};

export const Bar: StoryObj = {
  render: () =>
    wrap(
      <BarChart
        categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        series={[
          { name: 'Requests', data: [120, 180, 150, 210, 240, 90, 70] },
          { name: 'Errors', data: [8, 12, 6, 14, 10, 3, 2] },
        ]}
      />,
    ),
};

export const StackedBar: StoryObj = {
  render: () =>
    wrap(
      <BarChart
        stacked
        categories={['Q1', 'Q2', 'Q3', 'Q4']}
        series={[
          { name: 'New', data: [40, 55, 60, 72] },
          { name: 'Returning', data: [30, 32, 45, 50] },
          { name: 'Churned', data: [10, 8, 12, 9] },
        ]}
      />,
    ),
};

export const Area: StoryObj = {
  render: () =>
    wrap(
      <AreaChart
        categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
          { name: 'Sessions', data: [820, 932, 901, 1034, 1290, 1330] },
          { name: 'Conversions', data: [120, 145, 132, 190, 240, 262] },
        ]}
      />,
    ),
};

export const StackedArea: StoryObj = {
  render: () =>
    wrap(
      <AreaChart
        stacked
        categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
          { name: 'CPU', data: [30, 35, 40, 38, 45, 50] },
          { name: 'Memory', data: [20, 25, 22, 30, 28, 33] },
          { name: 'Storage', data: [10, 12, 15, 14, 18, 20] },
        ]}
      />,
    ),
};
