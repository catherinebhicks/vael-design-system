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
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=115-16' } },
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
