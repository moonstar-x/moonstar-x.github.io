import { Meta, StoryObj } from '@storybook/react';
import { GitHubRepoStatsView } from './GitHubRepoStatsView';

const meta: Meta<typeof GitHubRepoStatsView> = {
  title: 'work/WorkStatus/GitHubRepoStatsView',
  component: GitHubRepoStatsView
};

export default meta;
type Story = StoryObj<typeof GitHubRepoStatsView>;

export const Default: Story = {
  args: {

  }
};
