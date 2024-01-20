import React from 'react';
import { DockerHubRepoStatsView } from '../views/DockerHubRepoStatsView';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  identifier: string
}

export const DockerHubRepoStats: React.FC<Props> = ({ ...props }) => {
  return (
    <DockerHubRepoStatsView {...props} />
  );
};
