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

export type BlogData = JsonData['blog'];
export const getBlogData = (): BlogData => {
  return data.blog;
};

export type WorkData = JsonData['work'];
export const getWorkData = (): WorkData => {
  return data.work;
};

export type Experience = {
  title?: string
  company?: string
  description?: string
  location?: string
  dateStart?: string
  dateEnd?: string
}
export const getExperienceData = (): Experience[] => {
  return data.experience;
};

export type Education = {
  degree?: string
  university?: string
  description?: string
  grade?: string
  dateStart?: string
  dateEnd?: string
}
export const getEducationData = (): Education[] => {
  return data.education;
};
