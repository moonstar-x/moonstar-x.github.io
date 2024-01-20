import { Meta, StoryObj } from '@storybook/react';
import { DockerHubRepoStatsView } from './DockerHubRepoStatsView';

const data = {
  stars: 213123132,
  pulls: 2313
};

const meta: Meta<typeof DockerHubRepoStatsView> = {
  title: 'work/WorkStatus/DockerHubRepoStatsView',
  component: DockerHubRepoStatsView
};

export default meta;
type Story = StoryObj<typeof DockerHubRepoStatsView>;

export const Default: Story = {
  args: {
    data
  }
};
