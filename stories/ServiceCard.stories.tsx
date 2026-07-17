import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ServiceCard } from '../src/components/WorkCards';

const meta: Meta<typeof ServiceCard> = {
  title: 'Marketing/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=16-14' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    index: '01',
    title: 'Product & Service Design',
    description: 'End-to-end flows, from research through a shippable interface.',
    meta: 'Project · Embedded team',
    href: '#',
  },
  render: (args) => <div style={{ width: 380 }}><ServiceCard {...args} /></div>,
};
