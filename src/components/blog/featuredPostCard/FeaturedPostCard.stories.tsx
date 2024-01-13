import { Meta, StoryObj } from '@storybook/react';
import { FeaturedPostCard } from './FeaturedPostCard';

const meta: Meta<typeof FeaturedPostCard> = {
  title: 'blog/FeaturedPostCard',
  component: FeaturedPostCard
};

export default meta;
type Story = StoryObj<typeof FeaturedPostCard>;

export const Default: Story = {
  args: {}
};
