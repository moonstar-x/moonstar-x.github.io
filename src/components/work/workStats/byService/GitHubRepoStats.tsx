import React from 'react';
import { GitHubRepoStatsView } from '../views/GitHubRepoStatsView';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  identifier: string
}

export const GitHubRepoStats: React.FC<Props> = ({ ...props }) => {
  return (
    <GitHubRepoStatsView {...props} />
  );
};
