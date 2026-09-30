export const APP_CONTENT_LANG: string = process.env.NEXT_CONTENT_LANG ?? 'en';
export const SHOULD_SHOW_DRAFT_CONTENT: boolean = process.env.NEXT_SHOW_DRAFT_CONTENT === 'true';
export const REVALIDATE_TIME: number = Math.trunc(Number(process.env.NEXT_REVALIDATE_TIME ?? '600'));

export const BASE_URL: string = process.env.NEXT_BASE_URL ?? 'http://localhost:3000';

export const ANALYTICS_UMAMI_SRC: string | undefined = process.env.NEXT_ANALYTICS_UMAMI_SRC;
export const ANALYTICS_UMAMI_WEBSITE_ID: string | undefined = process.env.NEXT_ANALYTICS_UMAMI_WEBSITE_ID;
