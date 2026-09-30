declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_ANALYTICS_UMAMI_SRC?: string;
    NEXT_ANALYTICS_UMAMI_WEBSITE_ID?: string;
    NEXT_BASE_URL?: string;
    NEXT_CONTENT_LANG?: string;
    NEXT_REVALIDATE_TIME?: string;
    NEXT_SHOW_DRAFT_CONTENT?: string;
  }
}

declare module 'rehype-figure' {
  function function_(): void;
  export = function_;
}
