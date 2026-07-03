import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../src/components/Radio';
import { RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const meta: Meta = {
  title: 'Inputs/Selection/Radio',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

export const Group: StoryObj = {
  render: () => (
    <FormControl>
      <FormLabel>Options</FormLabel>
      <RadioGroup defaultValue="a">
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
        <FormControlLabel value="c" control={<Radio />} label="Option C (disabled)" disabled />
      </RadioGroup>
    </FormControl>
  ),
};
