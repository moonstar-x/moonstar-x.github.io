import { writable } from 'svelte/store';

export const createPersistentStore = (localStorageKey, initial = null) => {
  const { subscribe, set } = writable(initial);

  return {
    subscribe,
    update: (data: any) => {
      set(data);
      localStorage.setItem(localStorageKey, data);
    }
  };
};
