import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { AlarmBadge } from '../src/components/AlarmBadge';

const meta: Meta<typeof AlarmBadge> = {
  title: 'Data Display/AlarmBadge',
  component: AlarmBadge,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=142-5' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AlarmBadge>;

export const Escalation: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <AlarmBadge label="CPU" value={38} unit="%" warnAt={70} critAt={90} />
      <AlarmBadge label="CPU" value={78} unit="%" warnAt={70} critAt={90} />
      <AlarmBadge label="CPU" value={94} unit="%" warnAt={70} critAt={90} />
    </Stack>
  ),
};
