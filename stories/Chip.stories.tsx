import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../src/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined'] },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { label: 'Chip' } };
export const Primary: Story = { args: { label: 'Primary', color: 'primary' } };
export const Outlined: Story = { args: { label: 'Outlined', variant: 'outlined' } };
export const Deletable: Story = { args: { label: 'Deletable', onDelete: () => {} } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };
