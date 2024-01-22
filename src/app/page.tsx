import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Hero } from '@components/ui/hero';
import { WorkGrid } from '@components/work/workGrid';
import { ExperienceTimeline } from '@components/variations/experienceTimeline';
import { EducationTimeline } from '@components/variations/educationTimeline';
import { ImageCarousel } from '@components/ui/imageCarousel';
import { Button } from '@components/ui/button';
import { PostsGrid } from '@components/blog/postsGrid';
import { getSettings, getHomeData, getExperienceData, getEducationData } from '@lib/services/data';
import { getAllWorkMetadataForType, WorkType } from '@lib/services/work';
import { getAllPostsMetadata } from '@lib/services/blog';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: page.baseTitle
  };
};

// TODO: Implement this page.
const HomePage = async () => {
  const { hero, workGridType, articlesPreviewCount } = getHomeData();
  const experience = getExperienceData();
  const education = getEducationData();
  const work = (await getAllWorkMetadataForType(workGridType as WorkType)).slice(0, articlesPreviewCount);
  const posts = (await getAllPostsMetadata()).slice(0, articlesPreviewCount);

  return (
    <Fragment>
      <Hero>
        <Hero.Double>
          <Hero.Double.Side>
            <h1>
              {hero.title}
            </h1>

            <h5 className="font-light">
              {hero.description}
            </h5>

            <div>
              <Button color="primary" href={hero.ctaPrimary.url}>
                {hero.ctaPrimary.text}
              </Button>

              <Button color="white" href={hero.ctaSecondary.url}>
                {hero.ctaSecondary.text}
              </Button>
            </div>
          </Hero.Double.Side>

          <Hero.Double.Side>
            <ImageCarousel images={hero.carousel} firstImagePriority aspectRatio="aspect-square" />
          </Hero.Double.Side>
        </Hero.Double>
      </Hero>

      <WorkGrid id="work" work={work} />

      <ExperienceTimeline experience={experience} />

      <EducationTimeline education={education} />

      <PostsGrid posts={posts} withFeatured={false} />
    </Fragment>
  );
};

export default HomePage;
