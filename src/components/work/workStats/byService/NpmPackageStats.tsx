import React from 'react';
import { NpmPackageStatsView } from '../views/NpmPackageStatsView';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  identifier: string
}

export const NpmPackageStats: React.FC<Props> = ({ ...props }) => {
  return (
    <NpmPackageStatsView {...props} />
  );
};
