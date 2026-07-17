import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from '../src/components/List';
import { ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'Data Display/List',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=99-2' } },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <List sx={{ width: 300, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemIcon><FontAwesomeIcon icon={faInbox} /></ListItemIcon>
        <ListItemText primary="Inbox" secondary="Jan 9, 2025" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon><FontAwesomeIcon icon={faEnvelopeOpen} /></ListItemIcon>
        <ListItemText primary="Drafts" secondary="Jan 7, 2025" />
      </ListItem>
    </List>
  ),
};
