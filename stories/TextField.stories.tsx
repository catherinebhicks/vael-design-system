import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '../src/components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'filled', 'standard'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: { label: 'Label', placeholder: 'Placeholder' },
};

export const Filled: Story = {
  args: { variant: 'filled', label: 'Filled' },
};

export const Standard: Story = {
  args: { variant: 'standard', label: 'Standard' },
};

export const WithHelperText: Story = {
  args: { label: 'Label', helperText: 'Helper text' },
};

export const Error: Story = {
  args: { label: 'Label', error: true, helperText: 'Error message' },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true, value: 'Disabled value' },
};
