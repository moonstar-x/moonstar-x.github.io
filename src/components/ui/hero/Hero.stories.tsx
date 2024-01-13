import { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'ui/Hero',
  component: Hero
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {}
};
