import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { StaleDataIndicator } from '../src/components/StaleDataIndicator';

const meta: Meta<typeof StaleDataIndicator> = {
  title: 'Data Display/StaleDataIndicator',
  component: StaleDataIndicator,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=142-19' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StaleDataIndicator>;

export const Levels: Story = {
  render: () => (
    <Stack spacing={1.5}>
      <StaleDataIndicator ageSeconds={12} onRefresh={() => {}} />
      <StaleDataIndicator ageSeconds={120} onRefresh={() => {}} />
      <StaleDataIndicator ageSeconds={900} onRefresh={() => {}} />
    </Stack>
  ),
};
