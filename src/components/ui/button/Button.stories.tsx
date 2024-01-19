import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '@components/ui/icon';
import { GitHubIcon } from '@components/ui/icon/library/brand/GitHubIcon';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AsLink: Story = {
  args: {
    href: 'https://google.com',
    children: 'I am a link!'
  }
};

export const AsButton: Story = {
  args: {
    children: 'I am a button!',
    onClick: () => console.log('click!')
  }
};

export const WithIcon: Story = {
  args: {
    children: 'I have an icon next to me!',
    icon: <Icon icon={GitHubIcon} size="sm" color="white" />
  }
};
