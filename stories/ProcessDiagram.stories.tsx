import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { faMagnifyingGlass, faPenRuler, faHammer, faRocket } from '@fortawesome/free-solid-svg-icons';
import { ProcessDiagram } from '../src/components/ProcessDiagram';

const meta: Meta<typeof ProcessDiagram> = {
  title: 'Marketing/ProcessDiagram',
  component: ProcessDiagram,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=138-462' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProcessDiagram>;

const steps = [
  { label: 'Discover', caption: 'Research + framing', icon: faMagnifyingGlass },
  { label: 'Design', caption: 'Flows + systems', icon: faPenRuler, active: true },
  { label: 'Build', caption: 'Ship + iterate', icon: faHammer },
  { label: 'Launch', caption: 'Measure + refine', icon: faRocket },
];

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ maxWidth: 720 }}>
      <ProcessDiagram steps={steps} />
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box sx={{ maxWidth: 260 }}>
      <ProcessDiagram vertical steps={steps} />
    </Box>
  ),
};
