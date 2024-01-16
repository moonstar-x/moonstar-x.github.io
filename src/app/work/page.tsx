import React from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getSettings } from '@lib/services/data';
import { getAllWorkMetadata } from '@lib/services/work';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.work')} - ${page.baseTitle}`
  };
};

// TODO: Implement this page.
const WorkPage = async () => {
  const work = await getAllWorkMetadata();

  return (
    <div>
      <pre>
        {JSON.stringify(work, null, 2)}
      </pre>
    </div>
  );
};

export default WorkPage;
