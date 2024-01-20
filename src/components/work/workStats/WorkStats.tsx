import React from 'react';
import { WorkStats as WorkStatsType } from '@lib/services/work';
import { GitHubRepoStats } from './byService/GitHubRepoStats';
import { DockerHubRepoStats } from './byService/DockerHubRepoStats';
import { NpmPackageStats } from './byService/NpmPackageStats';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  service: WorkStatsType
  identifier: string
}

export const WorkStats: React.FC<Props> = ({ service, identifier, ...props }) => {
  switch (service) {
    case 'github':
      return (
        <GitHubRepoStats identifier={identifier} {...props} />
      );

    case 'dockerhub':
      return (
        <DockerHubRepoStats identifier={identifier} {...props} />
      );

    case 'npm':
      return (
        <NpmPackageStats identifier={identifier} {...props} />
      );

    default:
      return null;
  }
};
