/* eslint-disable unicorn/max-nested-calls */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { z } from 'zod';

export interface EducationItem {
  bulletPoints: string[];
  dateEnd?: Date | undefined;
  dateStart: Date;
  degree: string;
  grade: string;
  university: string;
}

export interface ExperienceItem {
  company: string;
  dateEnd?: Date | undefined;
  dateStart: Date;
  description: string;
  location: string;
  title: string;
}

export interface Config {
  education: EducationItem[];
  educationLanguages: {
    blurb: string;
  };
  experience: ExperienceItem[];
  profile: {
    alias: string;
    email: string;
    languages: string;
    location: string;
    pageTitle: string;
    shortBio: string;
    socials: Array<{
      label: string;
      url: string;
    }>;
    timezone: string;
  };
}

const ConfigSchema: z.ZodType<Config> = z.object({
  profile: z.object({
    alias: z.string(),
    email: z.string(),
    languages: z.string(),
    location: z.string(),
    shortBio: z.string(),
    socials: z.array(z.object({
      label: z.string(),
      url: z.string()
    })),
    timezone: z.string(),
    pageTitle: z.string()
  }),
  experience: z.array(z.object({
    title: z.string(),
    company: z.string(),
    description: z.string(),
    location: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date().optional()
  })),
  education: z.array(z.object({
    degree: z.string(),
    university: z.string(),
    bulletPoints: z.array(z.string()),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date().optional(),
    grade: z.string()
  })),
  educationLanguages: z.object({
    blurb: z.string()
  })
});

export const getConfig = async (): Promise<Config> => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const configFile = path.join(dataDirectory, 'config.yml');
  const configContents = await fs.promises.readFile(configFile, 'utf8');

  return await ConfigSchema.parseAsync(yaml.parse(configContents));
};
