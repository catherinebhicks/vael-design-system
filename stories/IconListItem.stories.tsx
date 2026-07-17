import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { faBolt, faShieldHalved, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { IconListItem } from '../src/components/IconListItem';

const meta: Meta<typeof IconListItem> = {
  title: 'Marketing/IconListItem',
  component: IconListItem,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=134-5' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof IconListItem>;

export const FeatureList: Story = {
  render: () => (
    <Stack spacing={2.5} sx={{ maxWidth: 380 }}>
      <IconListItem icon={faBolt} title="Fast by default" description="Token-driven theming with zero runtime cost." />
      <IconListItem icon={faShieldHalved} title="Accessible" description="WCAG-checked color and focus states." />
      <IconListItem icon={faWandMagicSparkles} title="Composable" description="Small primitives that scale to full pages." />
    </Stack>
  ),
};
