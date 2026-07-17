import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { SplitButton } from '../src/components/SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'Inputs/SplitButton',
  component: SplitButton,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=119-16' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Basic: Story = {
  render: () => (
    <SplitButton
      options={['Publish', 'Save draft', 'Schedule…']}
      onAction={(o) => console.log('action', o)}
      onSelect={(o) => console.log('select', o)}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <SplitButton options={['Merge', 'Squash & merge', 'Rebase & merge']} />
      <SplitButton variant="outlined" options={['Export CSV', 'Export JSON', 'Export PDF']} />
    </Stack>
  ),
};
