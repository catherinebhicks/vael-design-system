import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle, ToggleButton } from '../src/components/Toggle';

const meta: Meta = {
  title: 'Inputs/Toggle',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState('list');
    return (
      <Toggle value={value} exclusive onChange={(_, v) => v && setValue(v)}>
        <ToggleButton value="list">List</ToggleButton>
        <ToggleButton value="module">Module</ToggleButton>
        <ToggleButton value="quilt">Quilt</ToggleButton>
      </Toggle>
    );
  },
};
