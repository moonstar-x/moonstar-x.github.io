import { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './PostCard';

const metadata = {
  title: 'Testing',
  cover: 'https://cataas.com/cat',
  date: '2024-01-17T04:15:35+0000',
  slug: '_test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. Integer nec…',
  readingTime: 2
};

const meta: Meta<typeof PostCard> = {
  title: 'blog/PostCard',
  component: PostCard
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    post: metadata,
    style: { maxWidth: 330 }
  }
};
