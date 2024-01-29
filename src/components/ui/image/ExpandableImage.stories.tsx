import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ExpandableImage } from './ExpandableImage';

const meta: Meta<typeof ExpandableImage> = {
  title: 'ui/ExpandableImage',
  component: ExpandableImage,
  render: ({ style, ...args }) => (
    <div style={style}>
      <ExpandableImage {...args} />
    </div>
  )
};

export default meta;
type Story = StoryObj<typeof ExpandableImage>;

export const Still: Story = {
  args: {
    src: 'https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
    style: { maxWidth: 400 }
  }
};

export const Gif: Story = {
  args: {
    src: 'https://i.pinimg.com/originals/c5/13/d5/c513d557c903160199c7c93a4b6fa3d3.gif',
    style: { maxWidth: 400 }
  }
};
