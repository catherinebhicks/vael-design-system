import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { ImageSlot } from '../src/components/ImageSlot';

const meta: Meta<typeof ImageSlot> = {
  title: 'Marketing/ImageSlot',
  component: ImageSlot,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ImageSlot>;

export const Placeholders: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, maxWidth: 720 }}>
      <ImageSlot />
      <ImageSlot ratio={1} label="Avatar" />
      <ImageSlot ratio={4 / 3} dashed={false} label="Cover" />
    </Box>
  ),
};
