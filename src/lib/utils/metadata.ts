import { Metadata } from 'next';
import { getSettings } from '@lib/services/data';
import { BASE_URL, CONTENT_LANG } from '@lib/config';

const MAX_IMAGES = 4;

interface Params {
  title?: string
  description?: string
  images?: string[]

  type?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
}

export const resolveMetadataObject = (path: string, params: Params = {}): Metadata => {
  const { page } = getSettings();

  const pageTitle = params.title ? `${params.title} | ${page.baseTitle}` : page.baseTitle;
  const pageDescription = params.description ?? page.defaultDescription;
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
      siteName: page.baseTitle,
      images: images,
      locale: CONTENT_LANG,
      type: params.type ?? 'website'
    },
    twitter: {
      card: params.twitterCard ?? 'summary',
      title: pageTitle,
      description: pageDescription,
      images: images
    },
    category: page.category
  };
};
