import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';
import { faHouse, faFolderOpen, faGear, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CommandBar } from '../src/components/CommandBar';

const meta: Meta<typeof CommandBar> = {
  title: 'Navigation/CommandBar',
  component: CommandBar,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=143-24' } },
};
export default meta;
type Story = StoryObj<typeof CommandBar>;

export const Palette: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const commands = [
      { id: 'home', label: 'Go to Home', icon: faHouse, shortcut: 'G H', group: 'Navigate', run: () => {} },
      { id: 'work', label: 'Go to Work', icon: faFolderOpen, shortcut: 'G W', group: 'Navigate', run: () => {} },
      { id: 'new', label: 'New project', icon: faPlus, shortcut: '⌘N', group: 'Actions', run: () => {} },
      { id: 'search', label: 'Search everything', icon: faMagnifyingGlass, shortcut: '/', group: 'Actions', run: () => {} },
      { id: 'settings', label: 'Open settings', icon: faGear, shortcut: '⌘,', group: 'Actions', run: () => {} },
    ];
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open command bar (⌘K)</Button>
        <CommandBar open={open} onClose={() => setOpen(false)} commands={commands} />
      </>
    );
  },
};
