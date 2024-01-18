import { Meta, StoryObj } from '@storybook/react';
import { PostSuggestions } from './PostSuggestions';

const metadata = {
  title: 'Testing',
  cover: 'https://cataas.com/cat',
  date: '2024-01-17T04:15:35+0000',
  slug: '_test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec…',
  readingTime: 2
};

const meta: Meta<typeof PostSuggestions> = {
  title: 'blog/PostSuggestions',
  component: PostSuggestions
};

export default meta;
type Story = StoryObj<typeof PostSuggestions>;

export const NoCards: Story = {
  args: {
    allPosts: [],
    currentPostSlug: '123'
  }
};

export const SingleCard: Story = {
  args: {
    allPosts: [metadata],
    currentPostSlug: '123'
  }
};

export const MultipleCards: Story = {
  args: {
    allPosts: new Array(11).fill(null).map(() => metadata),
    currentPostSlug: '123'
  }
};
