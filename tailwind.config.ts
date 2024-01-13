import { Config } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors';

const tailwindConfig: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      ...defaultColors
    },
    extend: {
    }
  },
  plugins: []
};

export default tailwindConfig;
