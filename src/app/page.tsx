import React from 'react';
import { Metadata } from 'next';
import { getSettings } from '@lib/services/data';
import { GitHubRepoStats } from '@components/work/workStats/byService/GitHubRepoStats';

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

      <GitHubRepoStats identifier="moonstar-x/discord-tts-bot" />
    </div>
  );
};

export default HomePage;
