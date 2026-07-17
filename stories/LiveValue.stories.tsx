import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography } from '@mui/material';
import { LiveValue } from '../src/components/LiveValue';

const meta: Meta<typeof LiveValue> = {
  title: 'Data Display/LiveValue',
  component: LiveValue,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LiveValue>;

export const Streaming: Story = {
  render: () => {
    const [n, setN] = React.useState(1284);
    React.useEffect(() => {
      const t = setInterval(() => setN((v) => v + Math.round((Math.sin(v) + 1) * 3)), 1500);
      return () => clearInterval(t);
    }, []);
    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Requests/min:</Typography>
        <LiveValue value={n.toLocaleString()} />
      </Stack>
    );
  },
};
