import { Meta, StoryObj } from '@storybook/react';
import { NoArticlesAvailable } from './NoArticlesAvailable';

const meta: Meta<typeof NoArticlesAvailable> = {
  title: 'work/NoArticlesAvailable',
  component: NoArticlesAvailable
};

export default meta;
type Story = StoryObj<typeof NoArticlesAvailable>;

export const Default: Story = {
  args: {}
};
