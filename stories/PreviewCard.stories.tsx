import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { PreviewCard } from '../src/components/PreviewCard';

const meta: Meta<typeof PreviewCard> = {
  title: 'Marketing/PreviewCard',
  component: PreviewCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PreviewCard>;

export const Grid: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 2, maxWidth: 780 }}>
      <PreviewCard meta="Case study" title="Routable" description="Accessibility rating + navigation app." href="#" />
      <PreviewCard meta="Case study" title="SaberIQ" description="Sabermetrics analysis for coaches." href="#" />
      <PreviewCard meta="Writing" title="The Whiteboard" description="A case-study engine for designers." href="#" />
    </Box>
  ),
};
