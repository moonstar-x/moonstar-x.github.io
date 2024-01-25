import { Meta, StoryObj } from '@storybook/react';
import { SectionCta } from './SectionCta';

const meta: Meta<typeof SectionCta> = {
  title: 'ui/SectionCta',
  component: SectionCta
};

export default meta;
type Story = StoryObj<typeof SectionCta>;

export const Default: Story = {
  args: {
    href: '#',
    text: 'Check out more articles'
  }
};
