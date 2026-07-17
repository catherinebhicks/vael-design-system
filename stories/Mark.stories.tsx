import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@mui/material';
import { Mark } from '../src/components/Mark';

const meta: Meta<typeof Mark> = {
  title: 'Typography/Mark',
  component: Mark,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=90-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Mark>;

export const InText: Story = {
  render: () => (
    <Typography sx={{ maxWidth: 520 }}>
      The design system is <Mark>built with AI as the method</Mark>, not just the
      tool — every component maps <Mark>1:1 to the code</Mark>.
    </Typography>
  ),
};
