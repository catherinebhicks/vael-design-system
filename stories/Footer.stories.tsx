import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@mui/material';
import { Footer } from '../src/components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Marketing/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=184-3' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Footer>;

const columns = [
  {
    heading: 'Work',
    links: [
      { label: 'Case studies', href: '#' },
      { label: 'Design systems', href: '#' },
      { label: 'Writing', href: '#' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Approach', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Substack', href: '#' },
    ],
  },
];

const legal = (
  <>
    <Link href="#" underline="none" sx={{ fontSize: '0.8125rem', color: 'inherit', opacity: 0.7, '&:hover': { opacity: 1 } }}>
      Privacy
    </Link>
    <Link href="#" underline="none" sx={{ fontSize: '0.8125rem', color: 'inherit', opacity: 0.7, '&:hover': { opacity: 1 } }}>
      Terms
    </Link>
  </>
);

export const Ink: Story = {
  args: {
    brand: 'A Focused Design',
    description: 'Design systems, product strategy, and research turned into interfaces teams can build on.',
    columns,
    copyright: '© 2026 A Focused Design. All rights reserved.',
    legal,
    variant: 'ink',
  },
};

export const Subtle: Story = {
  args: {
    ...Ink.args,
    variant: 'subtle',
  },
};
