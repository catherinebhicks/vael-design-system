import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { StatCard } from '../src/components/StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof StatCard>;

const spark = [12, 14, 13, 18, 16, 22, 20, 26, 24, 30];

export const Default: Story = {
  args: { label: 'Active users', value: '12,480', delta: 12.5, caption: 'vs last week' },
  render: (args) => (
    <Box sx={{ maxWidth: 320 }}>
      <StatCard {...args} />
    </Box>
  ),
};

export const WithSparkline: Story = {
  render: () => (
    <Box sx={{ maxWidth: 340 }}>
      <StatCard label="Revenue" value="$48.2k" delta={8.1} caption="vs last month" sparkline={spark} />
    </Box>
  ),
};

export const DownIsGood: Story = {
  render: () => (
    <Box sx={{ maxWidth: 340 }}>
      <StatCard label="Error rate" value="0.42%" delta={-3.2} positiveIsGood={false} caption="vs last week" />
    </Box>
  ),
};

export const Grid: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2, maxWidth: 960 }}>
      <StatCard label="Active users" value="12,480" delta={12.5} caption="vs last week" sparkline={spark} />
      <StatCard label="Revenue" value="$48.2k" delta={8.1} caption="vs last month" sparkline={spark} sparklineColor="#00796b" />
      <StatCard label="Error rate" value="0.42%" delta={-3.2} positiveIsGood={false} caption="down is good" />
      <StatCard label="Latency p95" value="128ms" delta={0} caption="flat" />
    </Box>
  ),
};
