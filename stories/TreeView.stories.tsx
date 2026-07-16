import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { SimpleTreeView, RichTreeView, TreeItem } from '../src/components/TreeView';

const meta: Meta = {
  title: 'Data Display/TreeView',
  tags: ['autodocs'],
};
export default meta;

export const Simple: StoryObj = {
  render: () => (
    <Box sx={{ minWidth: 260 }}>
      <SimpleTreeView defaultExpandedItems={['projects']}>
        <TreeItem itemId="projects" label="Projects">
          <TreeItem itemId="routable" label="Routable" />
          <TreeItem itemId="quietjoy" label="Quiet Joy" />
          <TreeItem itemId="saberiq" label="SaberIQ" />
        </TreeItem>
        <TreeItem itemId="archive" label="Archive">
          <TreeItem itemId="old" label="2025 work" />
        </TreeItem>
      </SimpleTreeView>
    </Box>
  ),
};

const richItems = [
  {
    id: 'design',
    label: 'Design system',
    children: [
      { id: 'foundations', label: 'Foundations' },
      { id: 'components', label: 'Components' },
    ],
  },
  { id: 'docs', label: 'Docs' },
];

export const Rich: StoryObj = {
  render: () => (
    <Box sx={{ minWidth: 260 }}>
      <RichTreeView items={richItems} defaultExpandedItems={['design']} />
    </Box>
  ),
};
