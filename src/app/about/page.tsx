import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getEducationData, getExperienceData, getHomeData, getOwner } from '@lib/services/data';
import { Hero } from '@components/ui/hero';
import { ShortBio } from '@components/ui/shortBio';
import { SectionHeader } from '@components/ui/sectionHeader';
import { ExperienceTimeline } from '@components/variations/experienceTimeline';
import { EducationTimeline } from '@components/variations/educationTimeline';
import { SectionBlock } from '@components/ui/sectionBlock';
import { resolveMetadataObject } from '@lib/utils/metadata';
import { RouteDefs } from '@lib/constants/routes';

export const generateMetadata = (): Metadata => {
  const { shortBio } = getOwner();

  return resolveMetadataObject(RouteDefs.about, {
    title: str('pages.titles.about'),
    description: shortBio.paragraphs[0],
    images: [shortBio.image]
  });
};

const AboutPage = () => {
  const { shortBio, longerBioSections } = getOwner();
  const { sections } = getHomeData();
  const experience = getExperienceData();
  const education = getEducationData();

  return (
    <Fragment>
      <Hero>
        <Hero.Single>
          <ShortBio shortBio={shortBio} priority />
        </Hero.Single>
      </Hero>

      <div className="flex flex-col gap-[2rem] tablet:gap-[4rem] page-container !max-w-[1024px]">
        {
          longerBioSections.map((section, idx) => (
            <SectionBlock key={idx} title={section.title} subtitle={section.subtitle} paragraphs={section.paragraphs} />
          ))
        }
      </div>

      <SectionHeader className="!max-w-[1024px]" title={sections.experience.title} subtitle={sections.experience.subtitle} />
      <ExperienceTimeline className="!max-w-[1024px]" experience={experience} />

      <SectionHeader className="!max-w-[1024px]" title={sections.education.title} subtitle={sections.education.subtitle} />
      <EducationTimeline className="!max-w-[1024px] mb-[4rem]" education={education} />
    </Fragment>
  );
};

export default AboutPage;
