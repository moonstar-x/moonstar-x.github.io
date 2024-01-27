import React from 'react';
import { Metadata } from 'next';
import { NoArticlesAvailable, WorkGrid } from '@components/work/workGrid';
import { getAllWorkMetadata, getAllWorkMetadataByType, WorkType } from '@lib/services/work';
import { str } from '@lib/services/strings';
import { resolveMetadataObject } from '@lib/utils/metadata';
import { RouteDefs } from '@lib/constants/routes';

export const generateMetadata = async (): Promise<Metadata> => {
  const work = await getAllWorkMetadata({ sort: 'date' });

  return resolveMetadataObject(RouteDefs.work, {
    title: str('pages.titles.work'),
    images: work.map((work) => work.cover)
  });
};

const WorkPage = async () => {
  const workByType = await getAllWorkMetadataByType({ sort: 'name' });
  const count = Object.values(workByType)
    .reduce((acc, cur) => acc + cur.length, 0);

  return (
    <div className="flex flex-col gap-[4rem] my-[4rem]">
      {
        count < 1 ? (
          <NoArticlesAvailable />
        ) : Object.entries(workByType).map(([type, work], idx) => {
          if (!work.length) {
            return null;
          }

          return (
            <WorkGrid key={idx} work={work} type={type as WorkType} />
          );
        })
      }
    </div>
  );
};

export default WorkPage;
