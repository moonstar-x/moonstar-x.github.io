import { Meta, StoryObj } from '@storybook/react';
import { SocialLinkList } from './SocialLinkList';
import { getSocials } from '@lib/services/data';

const meta: Meta<typeof SocialLinkList> = {
  title: 'ui/SocialLinkList',
  component: SocialLinkList
};

export default meta;
type Story = StoryObj<typeof SocialLinkList>;

export const Default: Story = {
  args: {
    socials: getSocials()
  }
};
