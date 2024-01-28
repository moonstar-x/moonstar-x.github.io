import { Meta, StoryObj } from '@storybook/react';
import { ShortBio } from './ShortBio';
import { getOwner } from '@lib/services/data';

const meta: Meta<typeof ShortBio> = {
  title: 'ui/ShortBio',
  component: ShortBio
};

export default meta;
type Story = StoryObj<typeof ShortBio>;

export const Default: Story = {
  args: {
    shortBio: getOwner().shortBio
  }
};
