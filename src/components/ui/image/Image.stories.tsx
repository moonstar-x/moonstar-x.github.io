import { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'ui/Image',
  component: Image
};

export default meta;
type Story = StoryObj<typeof Image>;

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
