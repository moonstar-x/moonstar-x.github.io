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
import { getSettings, getHomeData, getExperienceData, getEducationData, getOwner } from '@lib/services/data';
import { getAllWorkMetadata } from '@lib/services/work';
import { getAllPostsMetadata } from '@lib/services/blog';
import { RouteDefs } from '@lib/constants/routes';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: page.baseTitle
  };
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

      <SectionHeader title={sections.work.title} subtitle={sections.work.subtitle} />
      <WorkGrid id="work" work={work} />
      <SectionCta href={RouteDefs.work} text={sections.work.cta} />

      <SectionHeader title={sections.experience.title} subtitle={sections.experience.subtitle} />
      <ExperienceTimeline experience={experience} />

      <SectionHeader title={sections.education.title} subtitle={sections.education.subtitle} />
      <EducationTimeline education={education} />

      <SectionHeader title={sections.blog.title} subtitle={sections.blog.subtitle} />
      <PostsGrid posts={posts} withFeatured={false} />
      <SectionCta href={RouteDefs.blog} text={sections.blog.cta} />

      <ShortBio shortBio={shortBio} withBackground />
    </Fragment>
  );
};

export default HomePage;
