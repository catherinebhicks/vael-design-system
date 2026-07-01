import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar } from '../src/components/AppBar';
import { Toolbar, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'Components/AppBar',
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ position: 'relative', height: 80 }}><Story /></div>],
  parameters: {
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}><FontAwesomeIcon icon={faBars} /></IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Vael</Typography>
      </Toolbar>
    </AppBar>
  ),
};

export const Transparent: StoryObj = {
  render: () => (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Transparent AppBar</Typography>
      </Toolbar>
    </AppBar>
  ),
};
