import { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const meta: Meta<typeof Video> = {
  title: 'ui/Video',
  component: Video
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {}
};
