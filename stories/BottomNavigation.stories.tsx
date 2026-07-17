import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFolderOpen, faChartLine, faGear } from '@fortawesome/free-solid-svg-icons';
import { BottomNavigation, BottomNavigationAction } from '../src/components/BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=118-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Paper sx={{ width: 360 }} elevation={2}>
        <BottomNavigation showLabels value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction label="Home" icon={<FontAwesomeIcon icon={faHouse} />} />
          <BottomNavigationAction label="Work" icon={<FontAwesomeIcon icon={faFolderOpen} />} />
          <BottomNavigationAction label="Insights" icon={<FontAwesomeIcon icon={faChartLine} />} />
          <BottomNavigationAction label="Settings" icon={<FontAwesomeIcon icon={faGear} />} />
        </BottomNavigation>
      </Paper>
    );
  },
};
