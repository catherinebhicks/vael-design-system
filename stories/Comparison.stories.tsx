import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { Comparison } from '../src/components/Comparison';

const meta: Meta<typeof Comparison> = {
  title: 'Marketing/Comparison',
  component: Comparison,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=136-26' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Comparison>;

export const BeforeAfter: Story = {
  render: () => (
    <Box sx={{ maxWidth: 640 }}>
      <Comparison
        before={{ label: 'Before', content: 'Case studies scattered across Drive, Figma, and old PDFs. No single source of truth.' }}
        after={{ label: 'After', content: 'One system: every study in Vael, published to the site and reusable in decks.' }}
      />
    </Box>
  ),
};
