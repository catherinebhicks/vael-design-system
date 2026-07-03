import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Selection/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'default'] },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
  },
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { defaultChecked: true } };
export const Unchecked: Story = { args: {} };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };
