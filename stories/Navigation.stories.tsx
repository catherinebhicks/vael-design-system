import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navigation, BottomNavigationAction } from '../src/components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Navigation> = {
  title: 'Navigation/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=16-19' } },
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Navigation value={value} onChange={(_, v) => setValue(v)} sx={{ width: 400 }}>
        <BottomNavigationAction label="Recents" icon={<FontAwesomeIcon icon={faClockRotateLeft} />} />
        <BottomNavigationAction label="Favorites" icon={<FontAwesomeIcon icon={faHeart} />} />
        <BottomNavigationAction label="Nearby" icon={<FontAwesomeIcon icon={faLocationDot} />} />
      </Navigation>
    );
  },
};
