import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from '../src/components/Dialog';
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
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
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to proceed with this action?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} variant="contained" autoFocus>Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};
