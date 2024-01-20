import { Meta, StoryObj } from '@storybook/react';
import { DockerHubRepoStatsView } from './DockerHubRepoStatsView';

const meta: Meta<typeof DockerHubRepoStatsView> = {
  title: 'work/WorkStatus/DockerHubRepoStatsView',
  component: DockerHubRepoStatsView
};

export default meta;
type Story = StoryObj<typeof DockerHubRepoStatsView>;

export const Default: Story = {
  args: {

  }
};
