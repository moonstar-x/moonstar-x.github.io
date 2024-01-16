import React from 'react';
import { Metadata } from 'next';
import { getSettings } from '@lib/services/data';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: page.baseTitle
  };
};

// TODO: Implement this page.
const HomePage = () => {
  return (
    <div>
      HOME
    </div>
  );
};

export default HomePage;
