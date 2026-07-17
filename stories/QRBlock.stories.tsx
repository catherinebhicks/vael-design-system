import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { QRBlock } from '../src/components/QRBlock';

const meta: Meta<typeof QRBlock> = {
  title: 'Marketing/QRBlock',
  component: QRBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof QRBlock>;

export const Codes: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <QRBlock value="https://vael.example/routable" caption="Scan for the live prototype" />
      <QRBlock value="https://vael.example/deck" caption="Slides" size={104} />
    </Stack>
  ),
};
