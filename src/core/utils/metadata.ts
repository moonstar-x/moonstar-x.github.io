import { APP_CONTENT_LANG, BASE_URL } from '@core/config/app';
import { getConfig } from '@core/services/data/config';
import type { Metadata } from 'next';

const MAX_IMAGES = 4;
const SITE_CATEGORY = 'technology';

const OPEN_GRAPH_LOCALE_MAP: Record<string, string> = {
  en: 'en_US'
};
const openGraphLocale = OPEN_GRAPH_LOCALE_MAP[APP_CONTENT_LANG] ?? APP_CONTENT_LANG;

export interface Params {
  description?: string;
  images?: string[];
  noIndex?: boolean;
  title?: string;

  twitterCard?: 'summary' | 'summary_large_image';
  type?: 'article' | 'website';
}

export const createPageMetadata = async (path: string, params: Params = {}): Promise<Metadata> => {
  const config = await getConfig();

  const pageTitle = params.title !== undefined && params.title !== '' ? `${params.title} | ${config.profile.pageTitle}` : config.profile.pageTitle;
  const pageDescription = params.description ?? config.profile.shortBio;
  const images = params.images?.slice(0, MAX_IMAGES);

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(BASE_URL),
    ...params.noIndex === true
      ? { robots: { index: false, follow: false } }
      : { alternates: { canonical: path } },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      siteName: config.profile.pageTitle,
      images,
      locale: openGraphLocale,
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
