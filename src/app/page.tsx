import React from 'react';
import { Metadata } from 'next';
import { getSettings } from '@lib/services/data';
import { DockerHubRepoStats } from '@components/work/workStats/byService/DockerHubRepoStats';

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

      <DockerHubRepoStats identifier="moonstarx/discord-tts-bot" />
    </div>
  );
};

export default HomePage;
