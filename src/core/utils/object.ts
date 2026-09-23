export const hasProperty = (data: unknown, property: string): data is Record<string, unknown> => typeof data === 'object' && data !== null && Object.hasOwn(data, property);
