import { Hero } from '@components/ui/Hero';
import { getConfig } from '@core/services/data/config';
import type { FC } from 'react';

const HomePage: FC = async () => {
  const config = await getConfig();

  return (
    <Hero subCta={`${config.profile.location} · ${config.profile.timezone} · ${config.profile.languages}`} subtitle={config.profile.shortBio} />
  );
};

export default HomePage;
