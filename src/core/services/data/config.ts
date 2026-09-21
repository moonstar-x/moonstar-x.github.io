/* eslint-disable unicorn/max-nested-calls */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { z } from 'zod';

export interface Config {
  profile: {
    alias: string;
    languages: string;
    location: string;
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
    languages: z.string(),
    location: z.string(),
    shortBio: z.string(),
    socials: z.array(z.object({
      label: z.string(),
      url: z.string()
    })),
    timezone: z.string()
  })
});

export const getConfig = async (): Promise<Config> => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const configFile = path.join(dataDirectory, 'config.yml');
  const configContents = await fs.promises.readFile(configFile, 'utf8');

  return await ConfigSchema.parseAsync(yaml.parse(configContents));
};
