import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogoWall } from '../src/components/LogoWall';

const meta: Meta<typeof LogoWall> = {
  title: 'Marketing/LogoWall',
  component: LogoWall,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LogoWall>;

const logos = [
  { name: 'Northwind' },
  { name: 'Culture Bio' },
  { name: 'FLOWN' },
  { name: 'Fermie' },
  { name: 'Acme Co' },
];

export const Strip: Story = {
  render: () => <LogoWall logos={logos} />,
};

export const Grid: Story = {
  render: () => <LogoWall logos={logos} columns={5} />,
};
