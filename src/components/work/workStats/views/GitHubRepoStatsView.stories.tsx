import { Meta, StoryObj } from '@storybook/react';
import { GitHubRepoStatsView } from './GitHubRepoStatsView';

const data = {
  stars: 213123132,
  forks: 2313,
  openIssues: 231232,
  watchers: 10
};

const meta: Meta<typeof GitHubRepoStatsView> = {
  title: 'work/WorkStatus/GitHubRepoStatsView',
  component: GitHubRepoStatsView
};

export default meta;
type Story = StoryObj<typeof GitHubRepoStatsView>;

export const Default: Story = {
  args: {
    data
  }
};
