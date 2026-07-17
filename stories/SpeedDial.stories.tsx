import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faShareNodes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '../src/components/SpeedDial';

const meta: Meta<typeof SpeedDial> = {
  title: 'Navigation/SpeedDial',
  component: SpeedDial,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=112-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SpeedDial>;

const actions = [
  { icon: <FontAwesomeIcon icon={faPenToSquare} />, name: 'Edit' },
  { icon: <FontAwesomeIcon icon={faShareNodes} />, name: 'Share' },
  { icon: <FontAwesomeIcon icon={faTrash} />, name: 'Delete' },
];

export const Basic: Story = {
  render: () => (
    <Box sx={{ height: 220, position: 'relative' }}>
      <SpeedDial
        ariaLabel="Actions"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon icon={<FontAwesomeIcon icon={faPlus} />} />}
      >
        {actions.map((a) => (
          <SpeedDialAction key={a.name} icon={a.icon} slotProps={{ tooltip: { title: a.name } }} />
        ))}
      </SpeedDial>
    </Box>
  ),
};
