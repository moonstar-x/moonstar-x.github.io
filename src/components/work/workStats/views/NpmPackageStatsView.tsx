import React from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const NpmPackageStatsView: React.FC<Props> = () => {
  return (
    <div>
      NPM STATS
    </div>
  );
};
