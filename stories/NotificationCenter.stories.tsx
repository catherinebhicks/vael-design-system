import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { faCircleCheck, faTriangleExclamation, faComment } from '@fortawesome/free-solid-svg-icons';
import { NotificationCenter } from '../src/components/NotificationCenter';

const meta: Meta<typeof NotificationCenter> = {
  title: 'Feedback/NotificationCenter',
  component: NotificationCenter,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NotificationCenter>;

export const List: Story = {
  render: () => {
    const [items, setItems] = React.useState([
      { id: 1, icon: faCircleCheck, title: 'Build passed', body: 'vael-design-system • main', time: '2m ago', unread: true },
      { id: 2, icon: faComment, title: 'New comment on Routable', body: '“Can we add the map layer?”', time: '1h ago', unread: true },
      { id: 3, icon: faTriangleExclamation, title: 'Domain expiring', body: 'afocuseddesign.shop in 14 days', time: 'Yesterday', unread: false },
    ]);
    return (
      <NotificationCenter
        items={items}
        onMarkAllRead={() => setItems((prev) => prev.map((i) => ({ ...i, unread: false })))}
        onItemClick={() => {}}
      />
    );
  },
};

export const Empty: Story = {
  render: () => <NotificationCenter items={[]} />,
};
