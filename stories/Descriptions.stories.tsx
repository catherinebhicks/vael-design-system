import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { Descriptions } from '../src/components/Descriptions';

const meta: Meta<typeof Descriptions> = {
  title: 'Display/Descriptions',
  component: Descriptions,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Descriptions>;

const items = [
  { label: 'Project', value: 'Routable' },
  { label: 'Status', value: 'In spec' },
  { label: 'Owner', value: 'Catherine B. Hicks' },
  { label: 'Stack', value: 'Supabase + MapTiler' },
  { label: 'Notes', value: 'Accessibility rating + nav app; 10 plans, no code yet.', full: true },
];

export const TwoColumn: Story = {
  render: () => (
    <Box sx={{ maxWidth: 520 }}>
      <Descriptions items={items} columns={2} divided />
    </Box>
  ),
};

export const SingleColumn: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Descriptions items={items.slice(0, 4)} />
    </Box>
  ),
};
