import { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';

const meta: Meta<typeof Post> = {
  title: 'blog/Post',
  component: Post
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {}
};
