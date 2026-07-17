import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { CircularProgress } from '../src/components/CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  parameters: {
    a11y: { test: 'todo' },
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=117-14' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Indeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress size={24} />
      <CircularProgress />
      <CircularProgress color="secondary" />
    </Stack>
  ),
};

export const Determinate: Story = {
  render: () => <CircularProgress variant="determinate" value={68} />,
};

// A bare progress indicator in isolation has no accessible name — axe flags
// `aria-progressbar-name`. It's an isolated-demo artifact. In real use, name it
// for screen readers with `aria-label` (or `aria-labelledby` to visible text).
export const AccessibleUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Always give a progress indicator an accessible name so screen-reader users know what is loading — `aria-label` (below), or `aria-labelledby` pointing at nearby visible text.',
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress aria-label="Loading results" />
      <CircularProgress variant="determinate" value={68} aria-label="Export progress" />
    </Stack>
  ),
};
