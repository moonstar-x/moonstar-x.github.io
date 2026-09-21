declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_CONTENT_LANG?: string;
    NEXT_SHOW_DRAFT_CONTENT?: string;
  }
}

interface ObjectConstructor {
  fromEntries<K extends PropertyKey, V>(
    entries: Iterable<readonly [K, V]>
  ): Record<K, V>;
}
