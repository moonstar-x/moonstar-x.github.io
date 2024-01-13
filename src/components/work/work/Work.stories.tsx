import { Meta, StoryObj } from '@storybook/react';
import { Work } from './Work';

const meta: Meta<typeof Work> = {
  title: 'work/Work',
  component: Work
};

export default meta;
type Story = StoryObj<typeof Work>;

export const Default: Story = {
  args: {}
};
