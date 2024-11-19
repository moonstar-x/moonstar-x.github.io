import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Hero } from '@components/ui/hero';
import { WorkGrid } from '@components/work/workGrid';
import { ExperienceTimeline } from '@components/variations/experienceTimeline';
import { EducationTimeline } from '@components/variations/educationTimeline';
import { ImageCarousel } from '@components/ui/imageCarousel';
import { Button } from '@components/ui/button';
import { PostsGrid } from '@components/blog/postsGrid';
import { ShortBio } from '@components/ui/shortBio';
import { SectionHeader } from '@components/ui/sectionHeader';
import { SectionCta } from 'src/components/ui/sectionCta';
import { getHomeData, getExperienceData, getEducationData, getOwner } from '@lib/services/data';
import { getAllWorkMetadata } from '@lib/services/work';
import { getAllPostsMetadata } from '@lib/services/blog';
import { resolveMetadataObject } from '@lib/utils/metadata';
import { RouteDefs } from '@lib/constants/routes';

export const generateMetadata = (): Metadata => {
  const { hero } = getHomeData();

  return resolveMetadataObject(RouteDefs.home, {
    images: hero.carousel
  });
};

const HomePage = async () => {
  const { hero, articlesPreviewCount, sections } = getHomeData();
  const experience = getExperienceData();
  const education = getEducationData();
  const { shortBio } = getOwner();
  const work = (await getAllWorkMetadata({ sort: 'date' })).slice(0, articlesPreviewCount);
  const posts = (await getAllPostsMetadata()).slice(0, articlesPreviewCount);

  return (
    <Fragment>
      <Hero>
        <Hero.Double>
          <Hero.Double.Side>
            <h1>
              {hero.title}
            </h1>

            <h5 className="mt-[2rem] font-light">
              {hero.description}
            </h5>

            <div className="mt-[2rem] flex flex-col desktop:flex-row gap-[1rem] tablet:gap-[2rem]">
              <Button color="primary" href={hero.ctaPrimary.url}>
                {hero.ctaPrimary.text}
              </Button>

              <Button color="white" href={hero.ctaSecondary.url}>
                {hero.ctaSecondary.text}
              </Button>
            </div>
          </Hero.Double.Side>

          <Hero.Double.Side className="self-center">
            <ImageCarousel images={hero.carousel} firstImagePriority aspectRatio="aspect-square" />
          </Hero.Double.Side>
        </Hero.Double>
      </Hero>

      <SectionHeader id="work" className="pt-0" title={sections.work.title} subtitle={sections.work.subtitle} />
      <WorkGrid work={work} />
      <SectionCta href={RouteDefs.work} text={sections.work.cta} />

      <SectionHeader title={sections.experience.title} subtitle={sections.experience.subtitle} />
      <ExperienceTimeline className="!max-w-[1024px]" experience={experience} />

      <SectionHeader title={sections.education.title} subtitle={sections.education.subtitle} />
      <EducationTimeline className="!max-w-[1024px]" education={education} />

      <SectionHeader title={sections.blog.title} subtitle={sections.blog.subtitle} />
      <PostsGrid posts={posts} withFeatured={false} />
      <SectionCta href={RouteDefs.blog} text={sections.blog.cta} />

      <ShortBio className="py-[4rem] mt-[2rem] tablet:mt-[4rem]" shortBio={shortBio} withBackground />
    </Fragment>
  );
};

export default HomePage;
