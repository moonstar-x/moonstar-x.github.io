import { FilteringWorkList } from '@components/work/FilteringWorkList';
import { WorkFooter } from '@components/work/WorkFooter';
import { WorkHero } from '@components/work/WorkHero';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadataByType } from '@core/services/data/work';
import type { WorkType } from '@core/services/data/work';
import { Fragment } from 'react';
import type { FC } from 'react';

const WorkPage: FC = async () => {
  const config = await getConfig();
  const workMetadataByType = await getAllWorkMetadataByType({ sort: 'date' });
  const orderedWorkTypes: WorkType[] = ['research', 'art', 'hobby'];

  return (
    <Fragment>
      <WorkHero items={workMetadataByType} orderedWorkTypes={orderedWorkTypes} />
      <FilteringWorkList items={workMetadataByType} orderedWorkTypes={orderedWorkTypes} />
      <WorkFooter links={config.profile.socials} />
    </Fragment>
  );
};

export default WorkPage;
