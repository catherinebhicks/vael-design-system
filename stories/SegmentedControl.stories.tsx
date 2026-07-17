import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from '../src/components/SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Inputs/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=91-16' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState('week');
    return (
      <SegmentedControl
        value={value}
        onChange={setValue}
        options={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week' },
          { value: 'month', label: 'Month' },
        ]}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: () => {
    const [value, setValue] = React.useState('list');
    return (
      <SegmentedControl
        value={value}
        onChange={setValue}
        options={[
          { value: 'list', label: 'List' },
          { value: 'board', label: 'Board' },
          { value: 'calendar', label: 'Calendar', disabled: true },
        ]}
      />
    );
  },
};
