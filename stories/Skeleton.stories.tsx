import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack } from '@mui/material';
import { Skeleton, SkeletonText } from '../src/components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Variants: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Stack spacing={1.5}>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="circular" width={48} height={48} />
        <Skeleton variant="rounded" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
      </Stack>
    </Box>
  ),
};

export const TextBlock: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <SkeletonText lines={4} />
    </Box>
  ),
};

export const MediaCard: Story = {
  render: () => (
    <Box sx={{ maxWidth: 320 }}>
      <Skeleton variant="rounded" width="100%" height={140} sx={{ mb: 1.5 }} />
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Skeleton variant="circular" width={40} height={40} />
        <Box sx={{ flex: 1 }}>
          <SkeletonText lines={2} />
        </Box>
      </Stack>
    </Box>
  ),
};
