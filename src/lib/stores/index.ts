/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

export const createStore = (initial: unknown = null) => {
  const { subscribe, set } = writable(initial);

  return {
    subscribe,
    update: (data: any) => {
      set(data);
    }
  };
};

export const createPersistentStore = (localStorageKey: string, initial: unknown = null) => {
  const { subscribe, set } = writable(initial);

  return {
    subscribe,
    update: (data: any) => {
      set(data);
      localStorage?.setItem(localStorageKey, data);
    }
  };
};
