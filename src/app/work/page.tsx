import { FilteringWorkList } from '@components/work/FilteringWorkList';
import { WorkHero } from '@components/work/WorkHero';
import { getAllWorkMetadataByType } from '@core/services/data/work';
import type { WorkType } from '@core/services/data/work';
import { Fragment } from 'react';
import type { FC } from 'react';

const WorkPage: FC = async () => {
  const workMetadataByType = await getAllWorkMetadataByType({ sort: 'date' });
  const orderedWorkTypes: WorkType[] = ['research', 'art', 'hobby'];

  return (
    <Fragment>
      <WorkHero items={workMetadataByType} orderedWorkTypes={orderedWorkTypes} />
      <FilteringWorkList items={workMetadataByType} orderedWorkTypes={orderedWorkTypes} />
    </Fragment>
  );
};

export default WorkPage;
