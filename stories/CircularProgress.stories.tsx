import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { CircularProgress } from '../src/components/CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=117-14' },
    layout: 'padded',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CircularProgress>;

// The state demos carry an aria-label so the indicator is named in isolation.
// In production, name it for its actual purpose (see AccessibleUsage).
export const Indeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress size={24} aria-label="Loading" />
      <CircularProgress aria-label="Loading" />
      <CircularProgress color="secondary" aria-label="Loading" />
    </Stack>
  ),
};

export const Determinate: Story = {
  render: () => <CircularProgress variant="determinate" value={68} aria-label="Progress" />,
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
