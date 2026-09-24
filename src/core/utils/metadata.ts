import { APP_CONTENT_LANG, BASE_URL } from '@core/config/app';
import { getConfig } from '@core/services/data/config';
import type { Metadata } from 'next';

const MAX_IMAGES = 4;
const SITE_CATEGORY = 'technology';

export interface Params {
  description?: string;
  images?: string[];
  title?: string;

  twitterCard?: 'summary' | 'summary_large_image';
  type?: 'article' | 'website';
}

export const resolveMetadataObject = async (path: string, params: Params = {}): Promise<Metadata> => {
  const config = await getConfig();

  const pageTitle = params.title !== undefined && params.title !== '' ? `${params.title} | ${config.profile.pageTitle}` : config.profile.pageTitle;
  const pageDescription = params.description ?? config.profile.shortBio;
  const images = params.images?.slice(0, MAX_IMAGES);

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: path
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      siteName: config.profile.pageTitle,
      images,
      locale: APP_CONTENT_LANG,
      type: params.type ?? 'website'
    },
    twitter: {
      card: params.twitterCard ?? 'summary',
      title: pageTitle,
      description: pageDescription,
      images
    },
    category: SITE_CATEGORY
  };
};
