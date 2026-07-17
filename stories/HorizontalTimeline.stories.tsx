import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { HorizontalTimeline } from '../src/components/HorizontalTimeline';

const meta: Meta<typeof HorizontalTimeline> = {
  title: 'Data Display/HorizontalTimeline',
  component: HorizontalTimeline,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HorizontalTimeline>;

export const Roadmap: Story = {
  render: () => (
    <Box sx={{ maxWidth: 640 }}>
      <HorizontalTimeline
        steps={[
          { label: 'Discovery', caption: 'Complete', state: 'done' },
          { label: 'Design', caption: 'Complete', state: 'done' },
          { label: 'Build', caption: 'In progress', state: 'active' },
          { label: 'Beta', caption: 'Aug', state: 'todo' },
          { label: 'Launch', caption: 'Sep', state: 'todo' },
        ]}
      />
    </Box>
  ),
};
