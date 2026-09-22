import { FilteringWorkList } from '@components/work/FilteringWorkList';
import { WorkHero } from '@components/work/WorkHero';
import { getAllWorkMetadata } from '@core/services/data/work';
import type { WorkType } from '@core/services/data/work';
import { Fragment } from 'react';
import type { FC } from 'react';

const WorkPage: FC = async () => {
  const workMetadata = await getAllWorkMetadata({ sort: 'date' });
  const orderedWorkTypes: WorkType[] = ['research', 'art', 'hobby'];

  return (
    <Fragment>
      <WorkHero items={workMetadata} orderedWorkTypes={orderedWorkTypes} />
      <FilteringWorkList items={workMetadata} orderedWorkTypes={orderedWorkTypes} />
    </Fragment>
  );
};

export default WorkPage;
