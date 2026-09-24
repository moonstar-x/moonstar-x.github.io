import { HomeExperienceEducationSection } from '@components/home/HomeExperienceEducationSection';
import { HomeFooter } from '@components/home/HomeFooter';
import { HomeHero } from '@components/home/HomeHero';
import { HomeWorkSection } from '@components/home/HomeWorkSection';
import { TechnologiesMarquee } from '@components/ui/TechnologiesMarquee';
import { RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadata } from '@core/services/data/work';
import { createPageMetadata } from '@core/utils/metadata';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import type { FC } from 'react';

const HomePage: FC = async () => {
  const config = await getConfig();
  const workMetadata = await getAllWorkMetadata({ sort: 'date' });
  const workTechnologies = workMetadata.flatMap((metadata) => metadata.technologies);

  return (
    <Fragment>
      <main className="flex-1">
        <HomeHero subCta={`${config.profile.location} · ${config.profile.timezone} · ${config.profile.languages}`} subtitle={config.profile.shortBio} />
        <TechnologiesMarquee technologies={workTechnologies} />
        <HomeWorkSection items={workMetadata} />
        <HomeExperienceEducationSection education={config.education} educationLanguagesBlurb={config.educationLanguages.blurb} experience={config.experience} />
      </main>
      <HomeFooter links={config.profile.socials} />
    </Fragment>
  );
};

export const generateMetadata = async (): Promise<Metadata> => await createPageMetadata(RouteDefs.home, {
  title: ''
});

export default HomePage;
