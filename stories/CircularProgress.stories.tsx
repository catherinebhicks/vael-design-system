import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { CircularProgress } from '../src/components/CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  parameters: { layout: 'padded' },
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
