import { Meta, StoryObj } from '@storybook/react';
import { WorkCard } from './WorkCard';

const meta: Meta<typeof WorkCard> = {
  title: 'work/WorkCard',
  component: WorkCard
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  args: {}
};
