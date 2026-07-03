import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { PasswordField } from '../src/components/PasswordField';

const meta: Meta<typeof PasswordField> = {
  title: 'Inputs/PasswordField',
  component: PasswordField,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Box sx={{ maxWidth: 360 }}>
        <PasswordField
          label="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="current-password"
          fullWidth
        />
      </Box>
    );
  },
};

export const WithStrengthMeter: Story = {
  render: () => {
    const [value, setValue] = useState('Sunshine1!');
    return (
      <Box sx={{ maxWidth: 360 }}>
        <PasswordField
          label="Create password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="new-password"
          showStrength
          fullWidth
        />
      </Box>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('123');
    return (
      <Box sx={{ maxWidth: 360 }}>
        <PasswordField
          label="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error
          helperText="Password is too short"
          fullWidth
        />
      </Box>
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Box sx={{ maxWidth: 320 }}>
        <PasswordField
          label="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="small"
          showStrength
          fullWidth
        />
      </Box>
    );
  },
};
