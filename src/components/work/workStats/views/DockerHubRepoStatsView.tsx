import React from 'react';
import clsx from 'clsx';
import { Icon } from '@components/ui/icon';
import { StarIcon } from '@components/ui/icon/library/ui/StarIcon';
import { CloudDownloadIcon } from '@components/ui/icon/library/ui/CloudDownloadIcon';
import { RepoData } from '@lib/services/third-party/dockerhub';
import { str } from '@lib/services/strings';
import { compactNumber } from '@lib/utils/number';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: RepoData
}

export const DockerHubRepoStatsView: React.FC<Props> = ({ data, className, ...props }) => {
  const { stars, pulls } = data;

  return (
    <div className={clsx('grid grid-cols-2 gap-[4rem] desktop:gap-[6rem] border border-solid border-gray-400 rounded-[4px] px-[40px] py-[20px]', className)} {...props}>
      <div className="flex flex-col items-center self-start">
        <Icon icon={StarIcon} size="lg" className="fill-stats-stars" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(stars)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.dockerhub.stars')}
        </h5>
      </div>

      <div className="flex flex-col items-center self-start">
        <Icon icon={CloudDownloadIcon} size="lg" className="fill-stats-pulls" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(pulls)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.dockerhub.pulls')}
        </h5>
      </div>
    </div>
  );
};
