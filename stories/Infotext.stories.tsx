import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Infotext } from '../src/components/Infotext';

const meta: Meta<typeof Infotext> = {
  title: 'Display/Infotext',
  component: Infotext,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=120-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Infotext>;

export const Tones: Story = {
  render: () => (
    <Stack spacing={1.25}>
      <Infotext>Uses your organisation default currency.</Infotext>
      <Infotext tone="muted" icon={false}>
        Last synced 2 minutes ago
      </Infotext>
      <Infotext tone="warning" icon={faTriangleExclamation}>
        This will overwrite the existing draft.
      </Infotext>
      <Infotext tone="error">A start date is required.</Infotext>
      <Infotext tone="success" icon={false}>
        Saved.
      </Infotext>
    </Stack>
  ),
};
