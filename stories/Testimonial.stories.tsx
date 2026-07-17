import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Testimonial } from '../src/components/Testimonial';

const meta: Meta<typeof Testimonial> = {
  title: 'Marketing/Testimonial',
  component: Testimonial,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Quote: Story = {
  render: () => (
    <Testimonial
      quote="Catherine turned a decade of scattered case studies into a system we could actually ship against."
      author="Jordan Ellis"
      role="Head of Design, Northwind"
    />
  ),
};
