import { useSyncExternalStore } from 'react';

const MOBILE_QUERY = '(max-width: 1280px)';

const subscribe = (onStoreChange: VoidFunction): VoidFunction => {
  const query = matchMedia(MOBILE_QUERY);
  query.addEventListener('change', onStoreChange);
  return (): void => {
    query.removeEventListener('change', onStoreChange);
  };
};

const isMobileViewport = (): boolean => matchMedia(MOBILE_QUERY).matches;
const isMobileViewportOnServer = (): boolean => false;

// eslint-disable-next-line unicorn/consistent-boolean-name
export const useMobile = (): boolean => useSyncExternalStore(subscribe, isMobileViewport, isMobileViewportOnServer);
