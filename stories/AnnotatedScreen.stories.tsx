import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { AnnotatedScreen } from '../src/components/AnnotatedScreen';

const meta: Meta<typeof AnnotatedScreen> = {
  title: 'Marketing/AnnotatedScreen',
  component: AnnotatedScreen,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=140-17' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AnnotatedScreen>;

export const Walkthrough: Story = {
  render: () => (
    <Box sx={{ maxWidth: 520 }}>
      <AnnotatedScreen
        annotations={[
          { x: 20, y: 22, note: 'Persistent nav keeps orientation on long tasks.' },
          { x: 72, y: 40, note: 'Primary action is always top-right.' },
          { x: 45, y: 78, note: 'Inline validation prevents dead-end errors.' },
        ]}
      />
    </Box>
  ),
};
