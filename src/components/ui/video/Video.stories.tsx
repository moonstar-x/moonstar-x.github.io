import { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const meta: Meta<typeof Video> = {
  title: 'ui/Video',
  component: Video
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    src: 'https://download.samplelib.com/mp4/sample-5s.mp4',
    style: { maxWidth: 500 }
  }
};
