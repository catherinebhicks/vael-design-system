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
    <ImageList cols={3} gap={8} sx={{ width: 360, maxWidth: '100%' }}>
      {tiles.map((t) => (
        <ImageListItem key={t.img}>
          <img src={t.img} alt={t.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const WithTitleBars: Story = {
  // When an ImageListItemBar already shows the title as visible text, the image
  // is decorative — give it empty alt (alt="") so screen readers don't announce
  // the same name twice (axe: image-redundant-alt). Use descriptive alt only
  // when the image carries information the caption doesn't.
  render: () => (
    <ImageList cols={3} gap={8} sx={{ width: 360, maxWidth: '100%' }}>
      {tiles.map((t) => (
        <ImageListItem key={t.img}>
          <img src={t.img} alt="" loading="lazy" />
          <ImageListItemBar title={t.title} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};
