import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  LocalizationProvider,
  AdapterDayjs,
} from '../src/components/DatePicker';

const meta: Meta = {
  title: 'Inputs/Date & Time Pickers',
  tags: ['autodocs'],
};
export default meta;

export const Pickers: StoryObj = {
  render: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ maxWidth: 260 }}>
        <DatePicker label="Start date" />
        <TimePicker label="Time" />
        <DateTimePicker label="Kickoff" />
      </Stack>
    </LocalizationProvider>
  ),
};
