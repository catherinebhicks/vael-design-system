import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpotlightTour } from '../src/components/SpotlightTour';

const meta: Meta<typeof SpotlightTour> = {
  title: 'Marketing/SpotlightTour',
  component: SpotlightTour,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SpotlightTour>;

export const CoachMark: Story = {
  render: () => (
    <SpotlightTour
      steps={[
        { title: 'Welcome to Vael', body: 'This quick tour shows the three things you’ll use most.' },
        { title: 'Search anything', body: 'Jump to any component or token from the top bar.' },
        { title: 'Copy the code', body: 'Every example has a one-click copy button. That’s it!' },
      ]}
    />
  ),
};
