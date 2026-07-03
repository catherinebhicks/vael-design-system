import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { Breadcrumbs } from '../src/components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Vael Design System' },
    ],
  },
  render: (args) => (
    <Box sx={{ maxWidth: 480 }}>
      <Breadcrumbs {...args} />
    </Box>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <Breadcrumbs
        separator="›"
        items={[
          { label: 'Dashboard', href: '#' },
          { label: 'Settings', href: '#' },
          { label: 'Billing' },
        ]}
      />
    </Box>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <Breadcrumbs
        maxItems={3}
        items={[
          { label: 'Home', href: '#' },
          { label: 'Workspace', href: '#' },
          { label: 'Team', href: '#' },
          { label: 'Projects', href: '#' },
          { label: 'Current Project' },
        ]}
      />
    </Box>
  ),
};
