import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'ui/Divider',
  component: Divider
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {}
};
