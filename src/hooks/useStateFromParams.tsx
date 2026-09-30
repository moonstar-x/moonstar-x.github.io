import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import type { SetStateAction } from 'react';

export const useStateFromParams = <T extends string>(
  key: string,
  initialValue: null | T,
  parse: (raw: string) => null | T
): [null | T, (action: SetStateAction<null | T>) => void] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const raw = searchParams.get(key);
  const value = (raw === null ? null : parse(raw)) ?? initialValue;

  const setValue = useCallback((action: SetStateAction<null | T>): void => {
    const next = typeof action === 'function' ? action(value) : action;
    const params = new URLSearchParams(location.search);

    if (next === null || next === initialValue) {
      params.delete(key);
    } else {
      params.set(key, next);
    }

    const query = params.toString();
    router.replace(query === '' ? pathname : `${pathname}?${query}`, { scroll: false });
  }, [key, initialValue, value, pathname, router]);

  return [value, setValue];
};
