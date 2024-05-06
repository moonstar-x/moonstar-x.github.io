declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_ENABLE_DEV_CONTENT?: string;
      NEXT_CONTENT_LANG?: string;
      NEXT_REVALIDATE_TIME?: string;
      NEXT_BASE_URL?: string;

      NEXT_ANALYTICS_UMAMI_SRC?: string;
      NEXT_ANALYTICS_UMAMI_WEBSITE_ID?: string;
      NEXT_ANALYTICS_GOOGLE_TAG?: string;
    }
  }
}

declare module 'rehype-figure' {
  function fn(): void;
  export = fn;
}
