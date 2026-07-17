import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '../src/components/Tabs';
import { Tab, Box } from '@mui/material';

const meta: Meta = {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=39-3' } },
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)}>
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
          <Tab label="Tab Three" />
        </Tabs>
      </Box>
    );
  },
};

export const Scrollable: StoryObj = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ width: 300, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)} variant="scrollable" scrollButtons="auto">
          {['One', 'Two', 'Three', 'Four', 'Five', 'Six'].map((label, i) => (
            <Tab key={i} label={label} />
          ))}
        </Tabs>
      </Box>
    );
  },
};
