import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from '../src/components/Stepper';
import { Step, StepLabel } from '@mui/material';

const meta: Meta = {
  title: 'Navigation/Stepper',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

const steps = ['Select campaign', 'Create an ad group', 'Create an ad'];

export const Default: StoryObj = {
  render: () => (
    <Stepper activeStep={1} sx={{ width: 500 }}>
      {steps.map((label) => (
        <Step key={label}><StepLabel>{label}</StepLabel></Step>
      ))}
    </Stepper>
  ),
};

export const Completed: StoryObj = {
  render: () => (
    <Stepper activeStep={3} sx={{ width: 500 }}>
      {steps.map((label) => (
        <Step key={label}><StepLabel>{label}</StepLabel></Step>
      ))}
    </Stepper>
  ),
};
