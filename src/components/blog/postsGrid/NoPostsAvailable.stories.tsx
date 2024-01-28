import { Meta, StoryObj } from '@storybook/react';
import { NoPostsAvailable } from './NoPostsAvailable';

const meta: Meta<typeof NoPostsAvailable> = {
  title: 'blog/NoPostsAvailable',
  component: NoPostsAvailable
};

export default meta;
type Story = StoryObj<typeof NoPostsAvailable>;

export const Default: Story = {
  args: {}
};
