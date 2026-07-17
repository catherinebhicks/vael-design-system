import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import { CopyButton } from '../src/components/CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'Inputs/CopyButton',
  component: CopyButton,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=89-28' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Basic: Story = {
  render: () => <CopyButton value="npm i vael-design-system" />,
};

export const WithCodeSnippet: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography component="code" sx={{ fontFamily: 'var(--mono, monospace)' }}>
        npm i vael-design-system
      </Typography>
      <CopyButton value="npm i vael-design-system" />
    </Box>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <CopyButton value="hello@focused.design" label="Copy email" copiedLabel="Copied!" variant="contained" />
  ),
};
