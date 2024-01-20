import React from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const DockerHubRepoStatsView: React.FC<Props> = () => {
  return (
    <div>
      DOCKERHUB STATS
    </div>
  );
};
