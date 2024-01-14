import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import tsConfig from '../tsconfig.json';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: (config) => {
    const aliases = tsConfig.compilerOptions.paths;

    Object.entries(aliases).forEach(([alias, [value]]) => {
      const matchedAlias = /^(@\w+)/.exec(alias)?.groups?.[1];
      const matchedPath = value.replace(/\/\*$/, '');

      if (matchedAlias) {
        if (config.resolve?.alias) {
          (config.resolve.alias as any)[matchedAlias] = path.resolve(__dirname, '..', matchedPath);
        }
      }
    });

    return config;
  }
};

export default config;
