import { useCallback, useSyncExternalStore } from 'react';
import type { SetStateAction } from 'react';

const listeners = new Set<() => void>();

const subscribe = (listener: () => void): () => void => {
  listeners.add(listener);
  addEventListener('popstate', listener);

  return () => {
    listeners.delete(listener);
    removeEventListener('popstate', listener);
  };
};

const getSearchSnapshot = (): string => location.search;
const getServerSearchSnapshot = (): string => '';

export const useStateFromParams = <T extends string>(
  key: string,
  initialValue: null | T,
  parse: (raw: string) => null | T
): [null | T, (action: SetStateAction<null | T>) => void] => {
  const search = useSyncExternalStore(subscribe, getSearchSnapshot, getServerSearchSnapshot);

  const raw = new URLSearchParams(search).get(key);
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
    if (query === location.search.replace(/^\?/u, '')) {
      return;
    }

    history.pushState(history.state, '', query === '' ? location.pathname : `${location.pathname}?${query}`);
    listeners.forEach((listener) => {
      listener();
    });
  }, [key, initialValue, value]);

  return [value, setValue];
};
