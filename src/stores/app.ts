import { createPersistentStore } from '.';

const storedLocale = localStorage.getItem('locale') || 'en';
export const locale = createPersistentStore('locale', storedLocale);
