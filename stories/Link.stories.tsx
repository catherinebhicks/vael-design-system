import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import { Link } from '../src/components/Link';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Inline: Story = {
  render: () => (
    <Typography sx={{ maxWidth: 480 }}>
      Read the{' '}
      <Link href="#">design principles</Link> before contributing, or jump
      straight to the <Link href="#">component index</Link>.
    </Typography>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="inherit">Inherit</Link>
      <Link href="#" color="error">Error</Link>
    </Box>
  ),
};

export const Underline: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Link href="#" underline="none">none</Link>
      <Link href="#" underline="hover">hover</Link>
      <Link href="#" underline="always">always</Link>
    </Box>
  ),
};
