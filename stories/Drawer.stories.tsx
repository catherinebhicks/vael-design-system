import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from '../src/components/Drawer';
import { Button, List, ListItem, ListItemText, Box } from '@mui/material';

const meta: Meta = {
  title: 'Navigation/Drawer',
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
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {['Dashboard', 'Projects', 'Reports', 'Settings'].map((text) => (
                <ListItem key={text} onClick={() => setOpen(false)} sx={{ cursor: 'pointer' }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
  },
};
