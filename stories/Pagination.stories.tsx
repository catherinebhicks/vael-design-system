import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Typography } from '@mui/material';
import { Pagination } from '../src/components/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=39-15' }, layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: { count: 10, page: 3, color: 'primary' },
  render: (args) => (
    <Box sx={{ maxWidth: 480 }}>
      <Pagination {...args} />
    </Box>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 480 }}>
      <Box>
        <Typography variant="caption" color="text.secondary">rounded (default)</Typography>
        <Pagination count={8} page={2} color="primary" shape="rounded" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary">circular</Typography>
        <Pagination count={8} page={2} color="primary" shape="circular" />
      </Box>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 480 }}>
      <Pagination count={6} page={1} color="primary" size="small" />
      <Pagination count={6} page={1} color="primary" size="medium" />
      <Pagination count={6} page={1} color="primary" size="large" />
    </Stack>
  ),
};

export const SiblingsAndDisabled: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 560 }}>
      <Box>
        <Typography variant="caption" color="text.secondary">
          count=20, siblingCount=2, boundaryCount=2
        </Typography>
        <Pagination count={20} page={10} color="primary" siblingCount={2} boundaryCount={2} />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary">disabled</Typography>
        <Pagination count={10} page={4} color="primary" disabled />
      </Box>
    </Stack>
  ),
};
