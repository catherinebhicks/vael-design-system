import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { Tag } from '../src/components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Display/Tag',
  component: Tag,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=123-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      <Tag>default</Tag>
      <Tag color="primary" dot>primary</Tag>
      <Tag color="success" dot>live</Tag>
      <Tag color="warning" dot>at risk</Tag>
      <Tag color="error" dot>blocked</Tag>
      <Tag color="info">info</Tag>
    </Stack>
  ),
};

export const Removable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Tag color="primary" onRemove={() => {}}>design</Tag>
      <Tag color="primary" onRemove={() => {}}>research</Tag>
      <Tag color="primary" onRemove={() => {}}>a11y</Tag>
    </Stack>
  ),
};
