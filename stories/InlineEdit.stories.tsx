import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InlineEdit } from '../src/components/InlineEdit';

const meta: Meta<typeof InlineEdit> = {
  title: 'Inputs/InlineEdit',
  component: InlineEdit,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof InlineEdit>;

export const EditInPlace: Story = {
  render: () => {
    const [v, setV] = React.useState('Routable');
    return <InlineEdit value={v} onSave={setV} variant="h6" />;
  },
};
