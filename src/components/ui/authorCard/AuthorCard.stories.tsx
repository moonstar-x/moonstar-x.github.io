import { Meta, StoryObj } from '@storybook/react';
import { AuthorCard } from './AuthorCard';
import { getBlogData } from '@lib/services/data';

const meta: Meta<typeof AuthorCard> = {
  title: 'ui/AuthorCard',
  component: AuthorCard
};

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const Default: Story = {
  args: {
    ...getBlogData().author
  }
};
