import data from '@data/data.json';

export type JsonData = typeof data;
export const getData = (): JsonData => {
  return data;
};

export type Socials = JsonData['socials']
export const getSocials = (): Socials => {
  return data.socials;
};

export type Owner = JsonData['owner']
export const getOwner = (): Owner => {
  return data.owner;
};

export type Settings = JsonData['settings'];
export const getSettings = (): Settings => {
  return data.settings;
};
