import React from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getSettings } from '@lib/services/data';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.not_found')} - ${page.baseTitle}`
  };
};

// TODO: Implement this page.
const NotFoundPage = () => {
  return (
    <div className="bg-red-300 text-blue-300">
      NOT FOUND PAGE
    </div>
  );
};

export default NotFoundPage;
