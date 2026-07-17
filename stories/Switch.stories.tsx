import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Selection/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=30-15' } },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'default'] },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { defaultChecked: true } };
export const Unchecked: Story = { args: {} };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };
export const Small: Story = { args: { size: 'small', defaultChecked: true } };
