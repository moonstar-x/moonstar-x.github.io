import { Meta, StoryObj } from '@storybook/react';
import { PostsGrid } from './PostsGrid';

const meta: Meta<typeof PostsGrid> = {
  title: 'blog/PostsGrid',
  component: PostsGrid
};

export default meta;
type Story = StoryObj<typeof PostsGrid>;

export const Default: Story = {
  args: {}
};
