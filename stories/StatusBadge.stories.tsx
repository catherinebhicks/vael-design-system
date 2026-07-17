import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { StatusBadge } from '../src/components/StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Data Display/StatusBadge',
  component: StatusBadge,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=91-55' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <StatusBadge status="online" pulse />
      <StatusBadge status="busy" />
      <StatusBadge status="away" />
      <StatusBadge status="offline" />
    </Box>
  ),
};

export const CustomLabel: Story = {
  render: () => <StatusBadge status="online" label="Deploying" pulse />,
};
