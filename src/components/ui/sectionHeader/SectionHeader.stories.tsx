import { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'ui/SectionHeader',
  component: SectionHeader
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: 'Articles',
    subtitle: "Here's some of my latest articles."
  }
};
