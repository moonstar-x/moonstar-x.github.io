import React from 'react';
import { DockerHubRepoStatsView } from '../views/DockerHubRepoStatsView';
import { getRepoData } from '@lib/services/third-party/dockerhub';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  identifier: string
}

export const DockerHubRepoStats: React.FC<Props> = async ({ identifier, ...props }) => {
  const data = await getRepoData(identifier);
  if (!data) {
    return null;
  }

  return (
    <DockerHubRepoStatsView data={data} {...props} />
  );
};
