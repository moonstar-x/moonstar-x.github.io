import { Meta, StoryObj } from '@storybook/react';
import { SocialLink } from './SocialLink';

const meta: Meta<typeof SocialLink> = {
  title: 'ui/SocialLink',
  component: SocialLink
};

export default meta;
type Story = StoryObj<typeof SocialLink>;

export const NoChildren: Story = {
  args: {
    type: 'email'
  }
};

export const WithLabel: Story = {
  args: {
    type: 'discord',
    children: 'Discord'
  }
};
