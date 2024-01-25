import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getEducationData, getExperienceData, getHomeData, getOwner, getSettings } from '@lib/services/data';
import { Hero } from '@components/ui/hero';
import { ShortBio } from '@components/ui/shortBio';
import { SectionHeader } from '@components/ui/sectionHeader';
import { ExperienceTimeline } from '@components/variations/experienceTimeline';
import { EducationTimeline } from '@components/variations/educationTimeline';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.about')} - ${page.baseTitle}`
  };
};

const AboutPage = () => {
  const { shortBio } = getOwner();
  const { sections } = getHomeData();
  const experience = getExperienceData();
  const education = getEducationData();

  return (
    <Fragment>
      <Hero>
        <Hero.Single>
          <ShortBio shortBio={shortBio} />
        </Hero.Single>
      </Hero>

      <SectionHeader title={sections.experience.title} subtitle={sections.experience.subtitle} />
      <ExperienceTimeline experience={experience} />

      <SectionHeader title={sections.education.title} subtitle={sections.education.subtitle} />
      <EducationTimeline education={education} />
    </Fragment>
  );
};

export default AboutPage;
