import { FilteringWorkList } from '@components/work/FilteringWorkList';
import { WorkFooter } from '@components/work/WorkFooter';
import { WorkHero } from '@components/work/WorkHero';
import { RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadataByType } from '@core/services/data/work';
import type { WorkType } from '@core/services/data/work';
import { createPageMetadata } from '@core/utils/metadata';
import type { Metadata } from 'next';
import { Fragment, Suspense } from 'react';
import type { FC } from 'react';

const WorkPage: FC = async () => {
  const config = await getConfig();
  const workMetadataByType = await getAllWorkMetadataByType({ sort: 'date' });
  const orderedWorkTypes: WorkType[] = ['research', 'art', 'hobby'];

  return (
    <Fragment>
      <main className="flex-1">
        <WorkHero className="page-horizontal-align" items={workMetadataByType} orderedWorkTypes={orderedWorkTypes} />
        <Suspense>
          <FilteringWorkList className="page-horizontal-align" items={workMetadataByType} orderedWorkTypes={orderedWorkTypes} />
        </Suspense>
      </main>
      <WorkFooter className="mt-4" links={config.profile.socials} />
    </Fragment>
  );
};

export const generateMetadata = async (): Promise<Metadata> => await createPageMetadata(RouteDefs.work, {
  title: 'The Work'
});

export default WorkPage;
