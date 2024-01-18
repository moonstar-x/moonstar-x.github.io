import { Meta, StoryObj } from '@storybook/react';
import { PostsGrid } from './PostsGrid';

const metadata = {
  title: 'Testing',
  cover: 'https://cataas.com/cat',
  date: '2024-01-17T04:15:35+0000',
  slug: '_test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec…',
  readingTime: 2
};

const meta: Meta<typeof PostsGrid> = {
  title: 'blog/PostsGrid',
  component: PostsGrid
};

export default meta;
type Story = StoryObj<typeof PostsGrid>;

export const NoCards: Story = {
  args: {
    posts: []
  }
};

export const SingleCard: Story = {
  args: {
    posts: [metadata]
  }
};

export const MultipleCards: Story = {
  args: {
    posts: new Array(11).fill(null).map(() => metadata)
  }
};
