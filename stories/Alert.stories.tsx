import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../src/components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['error', 'warning', 'info', 'success'] },
    variant: { control: 'select', options: ['standard', 'filled', 'outlined'] },
  },
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=40-22' } },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: { severity: 'success', children: 'This is a success alert.' },
};

export const Error: Story = {
  args: { severity: 'error', children: 'This is an error alert.' },
};

export const Warning: Story = {
  args: { severity: 'warning', children: 'This is a warning alert.' },
};

export const Info: Story = {
  args: { severity: 'info', children: 'This is an info alert.' },
};

export const Filled: Story = {
  args: { severity: 'success', variant: 'filled', children: 'Filled success alert.' },
};
