import { REVALIDATE_TIME } from '@core/config/app';
import type { z } from 'zod';

type FetchOptions = Parameters<typeof fetch>[1];

export const fetchHttp = async <T>(Schema: z.ZodType<T>, url: string, searchParams?: Record<string, string>, options: FetchOptions = {}): Promise<T> => {
  const mergedOptions = {
    next: {
      revalidate: REVALIDATE_TIME
    },
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  };

  const searchQuery = searchParams ? new URLSearchParams(searchParams) : null;
  const finalUrl = searchQuery ? `${url}?${searchQuery.toString()}` : url;

  const response = await fetch(finalUrl, mergedOptions);

  if (!response.ok) {
    throw new Error(`Request to ${finalUrl} failed with status ${response.status} ${response.statusText}`);
  }

  const data: unknown = await response.json();

  return Schema.parse(data);
};
