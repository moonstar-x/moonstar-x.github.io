import { APP_CONTENT_LANG, BASE_URL } from '@core/config/app';
import type { Config } from '@core/services/data/config';
import { getTechLabel } from '@core/services/data/tech';
import type { WorkMetadata } from '@core/services/data/work';

export type JsonLdNode = Record<string, unknown>;

const SCHEMA_CONTEXT = 'https://schema.org';

const withTrailingSlash = (path: string): string => path.endsWith('/') ? path : `${path}/`;

export const absoluteUrl = (path: string): string => new URL(path, BASE_URL).href;

const pageUrl = (path: string): string => absoluteUrl(withTrailingSlash(path));

const personId = (): string => `${pageUrl('/')}#person`;

const socialProfiles = (config: Config): string[] => config.profile.socials
  .map(({ url }) => url)
  .filter((url) => url.startsWith('https://'));

const makePerson = (config: Config): JsonLdNode => ({
  '@type': 'Person',
  '@id': personId(),
  name: config.profile.alias,
  url: pageUrl('/'),
  email: config.profile.email,
  description: config.profile.shortBio,
  jobTitle: config.experience[0]?.title,
  worksFor: config.experience[0] && {
    '@type': 'Organization',
    name: config.experience[0].company
  },
  homeLocation: {
    '@type': 'Place',
    name: config.profile.location
  },
  alumniOf: config.education.map((item) => ({
    '@type': 'CollegeOrUniversity',
    name: item.university
  })),
  sameAs: socialProfiles(config)
});

export const createHomeJsonLd = (config: Config, path: string): JsonLdNode => ({
  '@context': SCHEMA_CONTEXT,
  '@type': 'ProfilePage',
  '@id': `${pageUrl(path)}#profilepage`,
  url: pageUrl(path),
  name: config.profile.pageTitle,
  description: config.profile.shortBio,
  inLanguage: APP_CONTENT_LANG,
  mainEntity: makePerson(config)
});

export const createWorkJsonLd = (config: Config, metadata: WorkMetadata, path: string): JsonLdNode => {
  const githubUrl = metadata.links?.github;
  const url = pageUrl(path);

  return {
    '@context': SCHEMA_CONTEXT,
    '@graph': [
      {
        '@type': githubUrl === undefined ? 'CreativeWork' : 'SoftwareSourceCode',
        '@id': `${url}#work`,
        url,
        mainEntityOfPage: url,
        name: metadata.name,
        description: metadata.description,
        image: absoluteUrl(metadata.cover),
        datePublished: metadata.date.toISOString(),
        inLanguage: APP_CONTENT_LANG,
        keywords: metadata.technologies.map((technology) => getTechLabel(technology)).join(', '),
        author: { '@id': personId() },
        ...githubUrl !== undefined && { codeRepository: githubUrl }
      },
      makePerson(config)
    ]
  };
};

export interface BreadcrumbJsonLdItem {
  label: string;
  path: string;
}

export const createBreadcrumbJsonLd = (items: BreadcrumbJsonLdItem[]): JsonLdNode => ({
  '@context': SCHEMA_CONTEXT,
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.path)
  }))
});
