import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { Callout } from '../src/components/Callout';

const meta: Meta<typeof Callout> = {
  title: 'Feedback/Callout',
  component: Callout,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Callout>;

export const Tones: Story = {
  render: () => (
    <Stack spacing={1.5} sx={{ maxWidth: 560 }}>
      <Callout tone="note" title="Note">
        Tokens are defined in <code>vael/design-tokens.json</code> and applied via the theme.
      </Callout>
      <Callout tone="tip" title="Tip">
        Prefer the semantic color tokens over raw ramps in component styles.
      </Callout>
      <Callout tone="warning" title="Heads up">
        Publishing the library is a manual Figma step — the API can’t do it.
      </Callout>
      <Callout tone="success" title="Done">
        Code and Figma are now at parity.
      </Callout>
    </Stack>
  ),
};
