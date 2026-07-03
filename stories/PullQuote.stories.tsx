import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PullQuote } from '../src/components/PullQuote';

const meta: Meta<typeof PullQuote> = {
  title: 'Presentation/PullQuote',
  component: PullQuote,
  tags: ['autodocs'],
};
export default meta;

export const Signal: StoryObj<typeof PullQuote> = {
  render: () => (
    <PullQuote size="xl" subtext="Stop defending your choices. Start serving the requirement.">
      The constraints weren’t the enemy.<br /><strong>They were the spec.</strong>
    </PullQuote>
  ),
};

export const Blue: StoryObj<typeof PullQuote> = {
  render: () => (
    <PullQuote tone="blue" size="lg">
      In a data-dense domain, <strong>editing is the design.</strong>
    </PullQuote>
  ),
};
