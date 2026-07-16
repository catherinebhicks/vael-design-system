import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCopy, faShareNodes, faTrash } from '@fortawesome/free-solid-svg-icons';

/**
 * Menu — the controlled MUI `Menu`, driven by `anchorEl` state. Use this when
 * you need to own open/close (e.g. close on select, keep open for multi-pick,
 * or drive from a non-button anchor). For a self-contained trigger+menu, reach
 * for `UncontrolledMenu` instead.
 */
const meta: Meta = {
  title: 'Navigation/Menu',
  tags: ['autodocs'],
};
export default meta;

export const Controlled: StoryObj = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Actions
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><FontAwesomeIcon icon={faPenToSquare} /></ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><FontAwesomeIcon icon={faCopy} /></ListItemIcon>
            Duplicate
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><FontAwesomeIcon icon={faShareNodes} /></ListItemIcon>
            Share
          </MenuItem>
          <Divider />
          <MenuItem disabled>
            <ListItemIcon><FontAwesomeIcon icon={faTrash} /></ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </>
    );
  },
};
