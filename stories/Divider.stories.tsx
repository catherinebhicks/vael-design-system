import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Typography } from '@mui/material';
import { Divider } from '../src/components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=85-11' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <Typography>Above the line</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography>Below the line</Typography>
    </Box>
  ),
};

export const WithText: Story = {
  render: () => (
    <Box sx={{ maxWidth: 420 }}>
      <Typography>Section one</Typography>
      <Divider sx={{ my: 2 }}>or</Divider>
      <Typography>Section two</Typography>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ height: 40 }} alignItems="center">
      <Typography>Home</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Work</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>About</Typography>
    </Stack>
  ),
};
