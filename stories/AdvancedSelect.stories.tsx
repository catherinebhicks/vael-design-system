import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { AdvancedSelect } from '../src/components/AdvancedSelect';
import type { AdvancedSelectOption } from '../src/components/AdvancedSelect';

const meta: Meta<typeof AdvancedSelect> = {
  title: 'Inputs/AdvancedSelect',
  component: AdvancedSelect,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof AdvancedSelect>;

const frameworks: AdvancedSelectOption[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
];

export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>('react');
    return (
      <Box sx={{ maxWidth: 360 }}>
        <AdvancedSelect
          label="Framework"
          placeholder="Choose one"
          options={frameworks}
          value={value}
          onChange={setValue}
        />
      </Box>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>(['react', 'svelte']);
    return (
      <Box sx={{ maxWidth: 360 }}>
        <AdvancedSelect
          multiple
          label="Frameworks"
          placeholder="Add frameworks"
          options={frameworks}
          value={value}
          onChange={setValue}
        />
      </Box>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>('');
    return (
      <Box sx={{ maxWidth: 360 }}>
        <AdvancedSelect
          label="Framework"
          placeholder="Fetching…"
          options={[]}
          loading
          loadingText="Fetching options…"
          value={value}
          onChange={setValue}
        />
      </Box>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>(['vue']);
    return (
      <Box sx={{ maxWidth: 360 }}>
        <AdvancedSelect
          multiple
          size="small"
          label="Frameworks"
          options={frameworks}
          value={value}
          onChange={setValue}
        />
      </Box>
    );
  },
};
