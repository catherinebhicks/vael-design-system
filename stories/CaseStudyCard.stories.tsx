import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CaseStudyCard } from '../src/components/WorkCards';

const meta: Meta<typeof CaseStudyCard> = {
  title: 'Marketing/CaseStudyCard',
  component: CaseStudyCard,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=16-2' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CaseStudyCard>;

export const Default: Story = {
  args: {
    eyebrow: 'Enterprise',
    title: 'Scytale — compliance platform',
    description: 'Turned a dense audit workflow into a guided path teams finish.',
    href: '#',
  },
  render: (args) => <div style={{ width: 380 }}><CaseStudyCard {...args} /></div>,
};
