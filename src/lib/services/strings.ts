import { ReactElement } from 'react';
import InlMessageFormat, { PrimitiveType, FormatXMLElementFn } from 'intl-messageformat';
import strings from '@data/strings.json';

export type ReactFormatFunction = (s: string) => ReactElement;
export type GetStringResourceValuesForReact = Record<string, PrimitiveType | FormatXMLElementFn<string, string | string[]> | ReactFormatFunction>;
export type GetStringResourceValues = Record<string, PrimitiveType | FormatXMLElementFn<string, string | string[]>>;

export type MessageKey = keyof typeof strings;

const getString = (key: MessageKey): InlMessageFormat => {
  const message = strings[key];
  if (!message) {
    throw new Error(`No string resource with key ${key} exists.`);
  }

  return new InlMessageFormat(message);
};

export type GetStringResourceFunction = (key: MessageKey, values?: GetStringResourceValuesForReact) => string;

export const str: GetStringResourceFunction = (key: MessageKey, values: GetStringResourceValuesForReact = {}): string => {
  return getString(key).format(values as GetStringResourceValues) as string;
};
