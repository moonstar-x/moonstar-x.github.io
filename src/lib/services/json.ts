import data from '@data/data.json';

export type JsonData = typeof data;
export const getData = (): JsonData => {
  return data;
};

export type Socials = JsonData['socials']
export const getSocials = (): Socials => {
  return data.socials;
};
