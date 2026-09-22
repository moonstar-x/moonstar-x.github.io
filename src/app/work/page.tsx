import { WorkHero } from '@components/work/WorkHero';
import { getAllWorkMetadata } from '@core/services/data/work';
import type { FC } from 'react';

const WorkPage: FC = async () => {
  const workMetadata = await getAllWorkMetadata({ sort: 'date' });

  return (
    <WorkHero items={workMetadata} />
  );
};

export default WorkPage;
