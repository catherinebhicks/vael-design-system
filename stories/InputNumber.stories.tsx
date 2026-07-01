import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { InputNumber } from '../src/components/InputNumber';
import type { InputNumberProps } from '../src/components/InputNumber';

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  component: InputNumber,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof InputNumber>;

function Controlled({ initial = 1, ...rest }: Partial<InputNumberProps> & { initial?: number | '' }) {
  const [value, setValue] = useState<number | ''>(initial);
  return (
    <Box sx={{ maxWidth: 240 }}>
      <InputNumber value={value} onChange={setValue} {...rest} />
    </Box>
  );
}

export const Default: Story = {
  render: () => <Controlled label="Quantity" helperText="Use the steppers or type" />,
};

export const Bounded: Story = {
  render: () => (
    <Controlled label="Guests (1–8)" initial={4} min={1} max={8} helperText="Clamped to 1–8" />
  ),
};

export const StepAndSmall: Story = {
  render: () => (
    <Controlled label="Price step 5" initial={20} min={0} max={100} step={5} size="small" fullWidth />
  ),
};

export const ErrorAndDisabled: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gap: 2, maxWidth: 240 }}>
      <InputNumber value={-3} onChange={() => {}} label="Invalid" min={0} error helperText="Must be at least 0" />
      <InputNumber value={5} onChange={() => {}} label="Locked" disabled helperText="Read only" />
    </Box>
  ),
};
