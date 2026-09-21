import {
  a11y,
  base,
  browser,
  ignores,
  react,
  sorted,
  stylistic,
  stylisticJsx,
  typescript
} from '@moonstar-x/eslint-config';
import storybook from 'eslint-plugin-storybook';

export default [
  ...ignores,
  {
    name: 'ignores',
    ignores: [
      '.next',
      'build',
      'next-env.d.ts'
    ]
  },
  ...base,
  ...typescript,
  ...browser,
  ...react,
  ...a11y(),
  ...stylistic,
  ...stylisticJsx,
  ...sorted
];
