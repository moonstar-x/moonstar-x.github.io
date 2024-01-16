import { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'ui/Blockquote',
  component: Blockquote
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {}
};
