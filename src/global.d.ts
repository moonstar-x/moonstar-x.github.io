declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_ENABLE_DEV_CONTENT?: string;
    }
  }
}

declare module 'rehype-figure' {
  function fn(): void;
  export = fn;
}
