import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { DashboardOverview } from './Patterns/examples/DashboardExample';

const meta: Meta = {
  title: 'Patterns/Dashboard',
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Overview: StoryObj = {
  render: () => (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <DashboardOverview />
    </Box>
  ),
};
