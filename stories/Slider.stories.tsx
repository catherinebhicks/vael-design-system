import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '../src/components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 300, padding: '16px 24px' }}><Story /></div>],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: { defaultValue: 30 } };
export const Range: Story = { args: { defaultValue: [20, 60] } };
export const Disabled: Story = { args: { defaultValue: 30, disabled: true } };
export const WithMarks: Story = { args: { defaultValue: 30, marks: true, step: 10 } };
