import { HomeHero } from '@components/home/HomeHero';
import { TechnologiesMarquee } from '@components/ui/TechnologiesMarquee';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadata } from '@core/services/data/work';
import { Fragment } from 'react';
import type { FC } from 'react';

const HomePage: FC = async () => {
  const config = await getConfig();
  const workMetadata = await getAllWorkMetadata();
  const workTechnologies = workMetadata.flatMap((metadata) => metadata.technologies);

  return (
    <Fragment>
      <HomeHero subCta={`${config.profile.location} · ${config.profile.timezone} · ${config.profile.languages}`} subtitle={config.profile.shortBio} />
      <TechnologiesMarquee technologies={workTechnologies} />
    </Fragment>
  );
};

export default HomePage;
