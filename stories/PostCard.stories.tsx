import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PostCard } from '../src/components/WorkCards';

const meta: Meta<typeof PostCard> = {
  title: 'Marketing/PostCard',
  component: PostCard,
  parameters: {
    layout: 'padded',
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=16-8' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    eyebrow: 'Enterprise',
    title: 'Case studies that read like proof',
    date: 'Jun 2026',
    href: '#',
  },
  render: (args) => <div style={{ width: 380, maxWidth: '100%' }}><PostCard {...args} /></div>,
};
