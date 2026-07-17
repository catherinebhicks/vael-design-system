import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PersonaCard } from '../src/components/PersonaCard';

const meta: Meta<typeof PersonaCard> = {
  title: 'Marketing/PersonaCard',
  component: PersonaCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PersonaCard>;

export const Persona: Story = {
  render: () => (
    <PersonaCard
      name="Maya Chen"
      role="Product Manager"
      attributes="34 · SaaS · remote-first team of 12"
      goals={['Ship the roadmap on time', 'Keep design + eng aligned', 'Defensible metrics for leadership']}
      frustrations={['Specs drift from what ships', 'No single source of truth']}
      tags={['data-driven', 'pragmatic', 'time-poor']}
    />
  ),
};
