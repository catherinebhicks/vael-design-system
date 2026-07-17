import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Box } from '@mui/material';
import { Badge } from '../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=36-15' }, layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Badge>;

const Tile = () => (
  <Box
    aria-hidden
    sx={{
      width: 40,
      height: 40,
      borderRadius: 2,
      bgcolor: 'action.selected',
    }}
  />
);

export const Count: Story = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <Tile />
    </Badge>
  ),
};

export const Dot: Story = {
  render: () => (
    <Badge variant="dot" color="error" overlap="circular">
      <Avatar>V</Avatar>
    </Badge>
  ),
};

export const MaxAndShowZero: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={1200} max={999} color="secondary">
        <Tile />
      </Badge>
      <Badge badgeContent={0} showZero color="primary">
        <Tile />
      </Badge>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={2} color="primary">
        <Tile />
      </Badge>
      <Badge badgeContent={5} color="error">
        <Tile />
      </Badge>
      <Badge badgeContent={9} color="success">
        <Tile />
      </Badge>
    </Box>
  ),
};
