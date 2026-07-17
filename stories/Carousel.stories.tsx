import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Paper, Typography } from '@mui/material';
import { Carousel } from '../src/components/Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Marketing/Carousel',
  component: Carousel,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=140-7' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Carousel>;

const Slide = ({ n }: { n: number }) => (
  <Paper variant="outlined" sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Typography variant="h4" color="text.secondary">Slide {n}</Typography>
  </Paper>
);

export const Basic: Story = {
  render: () => (
    <Box sx={{ maxWidth: 520 }}>
      <Carousel>
        <Slide n={1} />
        <Slide n={2} />
        <Slide n={3} />
      </Carousel>
    </Box>
  ),
};
