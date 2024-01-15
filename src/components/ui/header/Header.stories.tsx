import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { getSocials } from '@lib/services/data';

const meta: Meta<typeof Header> = {
  title: 'ui/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    brand: 'moonstar-x',
    socials: getSocials(),
    owner: 'moonstar-x'
  }
};
