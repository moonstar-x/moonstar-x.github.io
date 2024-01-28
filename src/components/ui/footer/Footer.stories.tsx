import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { getSocials } from '@lib/services/data';

const meta: Meta<typeof Footer> = {
  title: 'ui/Footer',
  component: Footer
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    socials: getSocials(),
    owner: 'moonstar-x',
    letsConnectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc lacus, pellentesque pulvinar felis id, venenatis porta diam. '
  }
};
