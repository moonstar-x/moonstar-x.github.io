import React from 'react';
import clsx from 'clsx';
import { Icon } from '@components/ui/icon';
import { StarIcon } from '@components/ui/icon/library/ui/StarIcon';
import { ForkIcon } from '@components/ui/icon/library/ui/ForkIcon';
import { EyeIcon } from '@components/ui/icon/library/ui/EyeIcon';
import { BugIcon } from '@components/ui/icon/library/ui/BugIcon';
import { RepoData } from '@lib/services/third-party/github';
import { str } from '@lib/services/strings';
import { compactNumber } from '@lib/utils/number';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: RepoData
}

export const GitHubRepoStatsView: React.FC<Props> = ({ data, className, ...props }) => {
  const { stars, forks, openIssues, watchers } = data;

  return (
    <div className={clsx('grid grid-cols-2 tablet:grid-cols-4 gap-[4rem] desktop:gap-[6rem] border border-solid border-gray-400 rounded-[4px] px-[40px] py-[20px]', className)} {...props}>
      <div className="flex flex-col items-center self-start">
        <Icon icon={StarIcon} size="lg" className="fill-stats-stars" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(stars)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.github.stars')}
        </h5>
      </div>

      <div className="flex flex-col items-center self-start">
        <Icon icon={ForkIcon} size="lg" className="fill-stats-forks" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(forks)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.github.forks')}
        </h5>
      </div>

      <div className="flex flex-col items-center self-start">
        <Icon icon={EyeIcon} size="lg" className="fill-stats-watchers" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(watchers)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.github.watchers')}
        </h5>
      </div>

      <div className="flex flex-col items-center self-start">
        <Icon icon={BugIcon} size="lg" className="fill-stats-issues" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(openIssues)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.github.open_issues')}
        </h5>
      </div>
    </div>
  );
};
