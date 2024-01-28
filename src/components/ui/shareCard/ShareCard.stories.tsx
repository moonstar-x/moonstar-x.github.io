import { Meta, StoryObj } from '@storybook/react';
import { ShareCard } from './ShareCard';

const meta: Meta<typeof ShareCard> = {
  title: 'ui/ShareCard',
  component: ShareCard
};

export default meta;
type Story = StoryObj<typeof ShareCard>;

export const Default: Story = {
  args: {}
};
