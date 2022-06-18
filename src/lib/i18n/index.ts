import { IntlMessageFormat } from 'intl-messageformat/intl-messageformat.esm';
import { locale as localeStore } from '../stores/app';
import en from './strings/en';
import es from './strings/es';
import fr from './strings/fr';

export const supportedLocales: Record<string, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français'
};
export const [defaultLocale] = Object.keys(supportedLocales);
let currentLocale = defaultLocale;

const strings: Record<string, Record<string, string>> = {
  en,
  es,
  fr
};

const getMessage = (key: string, locale: string): IntlMessageFormat => {
  const stringsForLocale = strings[locale];

  if (!stringsForLocale) {
    throw new Error(`No strings for locale ${locale} exist.`);
  }

  const content = stringsForLocale[key] || strings[defaultLocale][key];

  if (!content) {
    throw new Error(`No message for key ${key} exists.`);
  }

  return new IntlMessageFormat(content);
};

const translate = (key: string, locale: string, values = {}): string => {
  return getMessage(key, locale).format(values) as string;
};

export const t = (key: string, values = {}): string => {
  return translate(key, currentLocale, values);
};

localeStore.subscribe((value) => {
  currentLocale = value as string;
});
