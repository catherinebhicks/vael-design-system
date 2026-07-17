import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sitemap } from '../src/components/Sitemap';

const meta: Meta<typeof Sitemap> = {
  title: 'Marketing/Sitemap',
  component: Sitemap,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Sitemap>;

const root = {
  label: 'Home',
  note: '/',
  children: [
    { label: 'Work', note: '/work', children: [{ label: 'Case study', note: '/work/:id' }] },
    { label: 'Services', note: '/services', active: true },
    { label: 'About', note: '/about' },
    { label: 'Blog', note: '/blog', children: [{ label: 'Post', note: '/blog/:slug' }] },
  ],
};

export const Tree: Story = {
  render: () => <Sitemap root={root} />,
};

export const Indented: Story = {
  render: () => <Sitemap root={root} variant="indent" />,
};
