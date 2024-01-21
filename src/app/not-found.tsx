import React from 'react';
import { Metadata } from 'next';
import { PageNotFoundError } from '@components/ui/pageNotFoundError';
import { getSettings } from '@lib/services/data';
import { str } from '@lib/services/strings';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.not_found')} - ${page.baseTitle}`
  };
};

const NotFoundPage = () => {
  return (
    <PageNotFoundError />
  );
};

export default NotFoundPage;
