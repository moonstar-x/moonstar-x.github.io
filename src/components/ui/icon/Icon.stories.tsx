import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { GitHubIcon } from '@components/ui/icon/library/GitHubIcon';

const meta: Meta<typeof Icon> = {
  title: 'ui/Icon',
  component: Icon
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: GitHubIcon
  }
};
