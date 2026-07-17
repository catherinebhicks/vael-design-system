import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { TagCloud } from '../src/components/TagCloud';

const meta: Meta<typeof TagCloud> = {
  title: 'Marketing/TagCloud',
  component: TagCloud,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TagCloud>;

export const Skills: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <TagCloud
        items={[
          { label: 'Design systems', weight: 10 },
          { label: 'Research', weight: 8 },
          { label: 'Prototyping', weight: 7 },
          { label: 'Accessibility', weight: 6 },
          { label: 'Figma', weight: 9 },
          { label: 'IA', weight: 5 },
          { label: 'Facilitation', weight: 4 },
          { label: 'Motion', weight: 3 },
          { label: 'Front-end', weight: 6 },
        ]}
      />
    </Box>
  ),
};
