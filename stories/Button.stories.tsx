import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: { variant: 'contained', children: 'Contained' },
};

export const Outlined: Story = {
  args: { variant: 'outlined', children: 'Outlined' },
};

export const Text: Story = {
  args: { variant: 'text', children: 'Text' },
};

export const Disabled: Story = {
  args: { variant: 'contained', children: 'Disabled', disabled: true },
};

export const Small: Story = {
  args: { variant: 'contained', size: 'small', children: 'Small' },
};

export const Large: Story = {
  args: { variant: 'contained', size: 'large', children: 'Large' },
};
