import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import { Rating } from '../src/components/Rating';

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Rating>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState<number | null>(4);
    return <Rating value={value} onChange={(_, v) => setValue(v)} />;
  },
};

export const ReadOnlyAndHalf: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <Rating value={3.5} precision={0.5} readOnly />
      <Rating value={4} readOnly size="small" />
      <Rating value={2} readOnly size="large" />
    </Box>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography color="text.disabled">Locked</Typography>
      <Rating value={3} disabled />
    </Box>
  ),
};
