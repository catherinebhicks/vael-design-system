import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, IconButton, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCopy, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { UncontrolledMenu } from '../src/components/UncontrolledMenu';

const meta: Meta<typeof UncontrolledMenu> = {
  title: 'Navigation/UncontrolledMenu',
  component: UncontrolledMenu,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=110-2' } },
};
export default meta;
type Story = StoryObj<typeof UncontrolledMenu>;

export const Default: Story = {
  render: () => (
    <UncontrolledMenu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Archive</MenuItem>
    </UncontrolledMenu>
  ),
};

export const CloseOnClick: Story = {
  name: 'Close on click',
  render: () => (
    <UncontrolledMenu closeOnClick>
      <MenuItem>Edit project</MenuItem>
      <MenuItem>Duplicate project</MenuItem>
      <MenuItem>Archive project</MenuItem>
    </UncontrolledMenu>
  ),
};

export const CustomTrigger: Story = {
  name: 'Custom trigger (text button)',
  render: () => (
    <UncontrolledMenu
      closeOnClick
      button={(provided) => (
        <Button variant="outlined" size="small" {...provided}>
          Actions
        </Button>
      )}
    >
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Archive</MenuItem>
    </UncontrolledMenu>
  ),
};

export const RowActionMenu: Story = {
  name: 'Row action menu (table use case)',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 8, border: '1px solid #eee', borderRadius: 4 }}>
      <span style={{ flex: 1 }}>Job-1204 · Server 3A</span>
      <UncontrolledMenu closeOnClick stopOnClickPropagation>
        <MenuItem><FontAwesomeIcon icon={faPen} style={{ marginRight: 8 }} />Edit</MenuItem>
        <MenuItem><FontAwesomeIcon icon={faCopy} style={{ marginRight: 8 }} />Duplicate</MenuItem>
        <MenuItem sx={{ color: 'error.main' }}><FontAwesomeIcon icon={faBoxArchive} style={{ marginRight: 8 }} />Archive</MenuItem>
      </UncontrolledMenu>
    </div>
  ),
};
