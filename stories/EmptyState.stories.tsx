import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { EmptyState } from '../src/components/EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Display/EmptyState',
  component: EmptyState,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=124-10' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const WithAction: Story = {
  render: () => (
    <EmptyState
      bordered
      icon={faFolderOpen}
      title="No projects yet"
      description="Create your first project to start tracking work, files, and case studies."
      action={<Button variant="contained">New project</Button>}
      sx={{ maxWidth: 460 }}
    />
  ),
};

export const Minimal: Story = {
  render: () => <EmptyState title="Nothing here" description="Try adjusting your filters." />,
};
