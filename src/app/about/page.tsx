import React from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getSettings } from '@lib/services/data';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.about')} - ${page.baseTitle}`
  };
};

// TODO: Implement this page.
const AboutPage = () => {
  return (
    <div>
      ABOUT
    </div>
  );
};

export default AboutPage;
