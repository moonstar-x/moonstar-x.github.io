import { REVALIDATE_TIME } from '@lib/config';

type FetchOptions = Parameters<typeof fetch>[1]

export const fetchHttp = async <T>(url: string, searchParams?: Record<string, string>, options: FetchOptions = {}): Promise<T> => {
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
  return response.json();
};
