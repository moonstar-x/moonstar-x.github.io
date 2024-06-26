export const ENABLE_DEV_CONTENT = process.env.NEXT_ENABLE_DEV_CONTENT === 'true';

export const CONTENT_LANG = process.env.NEXT_CONTENT_LANG || 'en';

export const REVALIDATE_TIME = parseInt(process.env.NEXT_REVALIDATE_TIME ?? '600', 10);

export const BASE_URL = process.env.NEXT_BASE_URL || 'http://localhost:3000';

export const ANALYTICS_UMAMI_SRC = process.env.NEXT_ANALYTICS_UMAMI_SRC;
export const ANALYTICS_UMAMI_WEBSITE_ID = process.env.NEXT_ANALYTICS_UMAMI_WEBSITE_ID;
export const ANALYTICS_GOOGLE_TAG = process.env.NEXT_ANALYTICS_GOOGLE_TAG;
