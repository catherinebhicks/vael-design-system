import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Snackbar } from '../src/components/Snackbar';
import { Button, Alert } from '@mui/material';

const meta: Meta = {
  title: 'Feedback/Snackbar',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Snackbar</Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message="Action completed" />
      </>
    );
  },
};

export const WithAlert: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Alert Snackbar</Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity="success" onClose={() => setOpen(false)}>Job completed successfully.</Alert>
        </Snackbar>
      </>
    );
  },
};
