import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '../src/components/Tooltip';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: { title: 'Tooltip text', children: <Button>Hover me</Button> },
};

export const Top: Story = {
  args: { title: 'Top tooltip', placement: 'top', children: <Button>Hover me</Button> },
};
