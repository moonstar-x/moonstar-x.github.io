import React from 'react';
import clsx from 'clsx';
import { Icon } from '@components/ui/icon';
import { CloudDownloadIcon } from '@components/ui/icon/library/ui/CloudDownloadIcon';
import { PackageData } from '@lib/services/third-party/npm';
import { str } from '@lib/services/strings';
import { compactNumber } from '@lib/utils/number';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: PackageData
}

export const NpmPackageStatsView: React.FC<Props> = ({ className, data, ...props }) => {
  const { downloads } = data;

  return (
    <div className={clsx('grid grid-cols-1 tablet:grid-cols-3 gap-[4rem] desktop:gap-[6rem] border border-solid border-gray-400 rounded-[4px] px-[40px] py-[20px]', className)} {...props}>
      <div className="flex flex-col items-center self-start">
        <Icon icon={CloudDownloadIcon} size="lg" className="fill-stats-pulls" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(downloads.lastWeek)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.npm.downloads.last_week')}
        </h5>
      </div>

      <div className="flex flex-col items-center self-start">
        <Icon icon={CloudDownloadIcon} size="lg" className="fill-stats-pulls" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(downloads.lastMonth)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.npm.downloads.last_month')}
        </h5>
      </div>

      <div className="flex flex-col items-center self-start">
        <Icon icon={CloudDownloadIcon} size="lg" className="fill-stats-pulls" />
        <h4 className="text-center mt-[8px]">
          {compactNumber(downloads.lastYear)}
        </h4>
        <h5 className="text-center font-normal typography-body1">
          {str('work.stats.npm.downloads.last_year')}
        </h5>
      </div>
    </div>
  );
};
