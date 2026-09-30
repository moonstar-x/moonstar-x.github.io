import { useSyncExternalStore } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const subscribe = (onStoreChange: VoidFunction): VoidFunction => {
  const query = matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener('change', onStoreChange);
  return (): void => {
    query.removeEventListener('change', onStoreChange);
  };
};

const shouldReduceMotion = (): boolean => matchMedia(REDUCED_MOTION_QUERY).matches;
const shouldReduceMotionOnServer = (): boolean => false;

export const useShouldReduceMotion = (): boolean => useSyncExternalStore(subscribe, shouldReduceMotion, shouldReduceMotionOnServer);
