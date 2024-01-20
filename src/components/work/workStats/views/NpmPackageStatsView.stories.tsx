import { Meta, StoryObj } from '@storybook/react';
import { NpmPackageStatsView } from './NpmPackageStatsView';

const data = {
  downloads: {
    lastWeek: 1231,
    lastMonth: 12313,
    lastYear: 581023
  }
};

const meta: Meta<typeof NpmPackageStatsView> = {
  title: 'work/WorkStatus/NpmPackageStatsView',
  component: NpmPackageStatsView
};

export default meta;
type Story = StoryObj<typeof NpmPackageStatsView>;

export const Default: Story = {
  args: {
    data
  }
};
