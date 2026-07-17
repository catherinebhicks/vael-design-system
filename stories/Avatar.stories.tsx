import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../src/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=36-7' } },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Letter: Story = { args: { children: 'JD' } };
export const Primary: Story = { args: { children: 'JD', sx: { bgcolor: 'primary.main' } } };
export const Secondary: Story = { args: { children: 'JD', sx: { bgcolor: 'secondary.main' } } };
