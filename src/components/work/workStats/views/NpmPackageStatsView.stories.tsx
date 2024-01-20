import { Meta, StoryObj } from '@storybook/react';
import { NpmPackageStatsView } from './NpmPackageStatsView';

const meta: Meta<typeof NpmPackageStatsView> = {
  title: 'work/WorkStatus/NpmPackageStatsView',
  component: NpmPackageStatsView
};

export default meta;
type Story = StoryObj<typeof NpmPackageStatsView>;

export const Default: Story = {
  args: {

  }
};
