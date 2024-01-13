import { Meta, StoryObj } from '@storybook/react';
import { WorkGrid } from './WorkGrid';

const meta: Meta<typeof WorkGrid> = {
  title: 'work/WorkGrid',
  component: WorkGrid
};

export default meta;
type Story = StoryObj<typeof WorkGrid>;

export const Default: Story = {
  args: {}
};
