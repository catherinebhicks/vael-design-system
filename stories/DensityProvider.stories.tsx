import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Button, TextField, Typography } from '@mui/material';
import { DensityProvider, useDensity } from '../src/components/DensityProvider';

const meta: Meta = {
  title: 'Foundations/DensityProvider',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

function Sample() {
  const { density, tokens } = useDensity();
  return (
    <Stack spacing={1} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <Typography variant="overline">{density} · {tokens.rowHeight}px rows</Typography>
      <TextField size={tokens.size} label="Name" />
      <Button size={tokens.size} variant="contained">Save</Button>
    </Stack>
  );
}

export const Densities: StoryObj = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <DensityProvider density="compact"><Sample /></DensityProvider>
      <DensityProvider density="regular"><Sample /></DensityProvider>
      <DensityProvider density="comfortable"><Sample /></DensityProvider>
    </Stack>
  ),
};
