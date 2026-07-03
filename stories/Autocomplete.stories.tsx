import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete } from '../src/components/Autocomplete';
import { TextField } from '../src/components/TextField';

const options = ['Project A', 'Project B', 'Project C', 'Job 001', 'Job 002'];

const meta: Meta = {
  title: 'Inputs/Autocomplete',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Autocomplete
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search projects" />}
    />
  ),
};

export const Multiple: StoryObj = {
  render: () => (
    <Autocomplete
      multiple
      options={options}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Select projects" />}
    />
  ),
};
