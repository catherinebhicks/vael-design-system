import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageList, ImageListItem, ImageListItemBar } from '../src/components/ImageList';

const meta: Meta<typeof ImageList> = {
  title: 'Data Display/ImageList',
  component: ImageList,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=113-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ImageList>;

const tiles = Array.from({ length: 6 }, (_, i) => ({
  img: `https://picsum.photos/seed/vael${i}/300/300`,
  title: `Frame ${i + 1}`,
}));

export const Standard: Story = {
  render: () => (
    <ImageList cols={3} gap={8} sx={{ width: 360 }}>
      {tiles.map((t) => (
        <ImageListItem key={t.img}>
          <img src={t.img} alt={t.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const WithTitleBars: Story = {
  render: () => (
    <ImageList cols={3} gap={8} sx={{ width: 360 }}>
      {tiles.map((t) => (
        <ImageListItem key={t.img}>
          <img src={t.img} alt={t.title} loading="lazy" />
          <ImageListItemBar title={t.title} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};
