import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Grid, Stack } from '../src/components/Layout';
import { Paper, Typography } from '@mui/material';

const meta: Meta = {
  title: 'Layout/Layout',
  tags: ['autodocs'],
};

export default meta;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper sx={{ p: 2, textAlign: 'center' }}><Typography>{children}</Typography></Paper>
);

export const GridLayout: StoryObj = {
  render: () => (
    <Box sx={{ flexGrow: 1, width: 500 }}>
      <Grid container spacing={2}>
        <Grid size={8}><Item>xs=8</Item></Grid>
        <Grid size={4}><Item>xs=4</Item></Grid>
        <Grid size={4}><Item>xs=4</Item></Grid>
        <Grid size={8}><Item>xs=8</Item></Grid>
      </Grid>
    </Box>
  ),
};

export const StackLayout: StoryObj = {
  render: () => (
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};
