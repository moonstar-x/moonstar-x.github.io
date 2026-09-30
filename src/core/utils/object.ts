export const hasProperty = (data: unknown, property: string): data is Record<string, unknown> => typeof data === 'object' && data !== null && Object.hasOwn(data, property);

export type Entries<T extends object> = Array<{ [K in keyof T]-?: [K, Exclude<T[K], undefined>] }[keyof T]>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
export const objectEntries = <T extends object>(data: T): Entries<T> => Object.entries(data) as Entries<T>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
export const objectFromEntries = <K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>): Record<K, V> => Object.fromEntries(entries) as Record<K, V>;
