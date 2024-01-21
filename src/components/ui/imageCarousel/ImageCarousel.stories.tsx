import { Meta, StoryObj } from '@storybook/react';
import { ImageCarousel } from './ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
  title: 'ui/ImageCarousel',
  component: ImageCarousel
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {
  args: {
    images: ['https://cataas.com/cat', 'https://cataas.com/cat', 'https://cataas.com/cat'],
    style: { maxWidth: 400 }
  }
};
