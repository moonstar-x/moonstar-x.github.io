import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'ui/Avatar',
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/img/logo.jpg',
    style: { maxWidth: 400 }
  }
};
