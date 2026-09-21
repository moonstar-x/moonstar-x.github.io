/* eslint-disable unicorn/max-nested-calls */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { z } from 'zod';

export interface Config {
  footer: {
    links: Array<{
      label: string;
      url: string;
    }>;
  };
  hero: {
    subCta: string;
    subtitle: string;
  };
  navbar: {
    title: string;
  };
}

const ConfigSchema: z.ZodType<Config> = z.object({
  footer: z.object({
    links: z.array(z.object({
      url: z.string(),
      label: z.string()
    }))
  }),
  hero: z.object({
    subtitle: z.string(),
    subCta: z.string()
  }),
  navbar: z.object({
    title: z.string()
  })
});

export const getConfig = async (): Promise<Config> => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const configFile = path.join(dataDirectory, 'config.yml');
  const configContents = await fs.promises.readFile(configFile, 'utf8');

  return await ConfigSchema.parseAsync(yaml.parse(configContents));
};
