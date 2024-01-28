import React from 'react';
import { NpmPackageStatsView } from '../views/NpmPackageStatsView';
import { getPackageData } from '@lib/services/third-party/npm';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  identifier: string
}

export const NpmPackageStats: React.FC<Props> = async ({ identifier, ...props }) => {
  const data = await getPackageData(identifier);
  if (!data) {
    return null;
  }

  return (
    <NpmPackageStatsView data={data} {...props} />
  );
};
