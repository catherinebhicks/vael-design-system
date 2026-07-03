import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserFrame } from '../src/components/BrowserFrame';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof BrowserFrame> = {
  title: 'Presentation/BrowserFrame',
  component: BrowserFrame,
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj<typeof BrowserFrame> = {
  render: () => (
    <BrowserFrame url="hyundaiusa.com / mpg-information" sx={{ maxWidth: 560 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>MPG Information</Typography>
      <Box sx={{ height: 120, borderRadius: 2, bgcolor: 'action.hover' }} />
    </BrowserFrame>
  ),
};

export const NoDots: StoryObj<typeof BrowserFrame> = {
  render: () => (
    <BrowserFrame url="app.example.com / dashboard" dots={false} sx={{ maxWidth: 560 }}>
      <Box sx={{ height: 140, borderRadius: 2, bgcolor: 'action.hover' }} />
    </BrowserFrame>
  ),
};
