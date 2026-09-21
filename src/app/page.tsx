import { Hero } from '@components/ui/Hero';
import { getConfig } from '@core/services/data/config';
import type { FC } from 'react';

const HomePage: FC = async () => {
  const config = await getConfig();

  return (
    <Hero subCta={config.hero.subCta} subtitle={config.hero.subtitle} />
  );
};

export default HomePage;
