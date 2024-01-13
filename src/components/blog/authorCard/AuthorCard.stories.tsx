import { Meta, StoryObj } from '@storybook/react';
import { AuthorCard } from './AuthorCard';

const meta: Meta<typeof AuthorCard> = {
  title: 'blog/AuthorCard',
  component: AuthorCard
};

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const Default: Story = {
  args: {}
};
