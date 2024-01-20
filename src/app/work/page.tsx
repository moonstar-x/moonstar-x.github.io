import React from 'react';
import { Metadata } from 'next';
import { NoArticlesAvailable, WorkGrid } from '@components/work/workGrid';
import { getSettings } from '@lib/services/data';
import { getAllWorkMetadataByType, WorkType } from '@lib/services/work';
import { str } from '@lib/services/strings';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.work')} - ${page.baseTitle}`
  };
};

const WorkPage = async () => {
  const workByType = await getAllWorkMetadataByType();
  const count = Object.values(workByType)
    .reduce((acc, cur) => acc + cur.length, 0);

  return (
    <div className="flex flex-col gap-[4rem]">
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
