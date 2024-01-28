import React from 'react';
import { GitHubRepoStatsView } from '../views/GitHubRepoStatsView';
import { getRepoData } from '@lib/services/third-party/github';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  identifier: string
}

export const GitHubRepoStats: React.FC<Props> = async ({ identifier, ...props }) => {
  const data = await getRepoData(identifier);
  if (!data) {
    return null;
  }

  return (
    <GitHubRepoStatsView data={data} {...props} />
  );
};
