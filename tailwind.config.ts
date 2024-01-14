import { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#3340FF',
      transparent: {
        4: 'rgba(0, 0, 0, 0.04)',
        50: 'rgba(0, 0, 0, 0.50)'
      }
    },
    extend: {
    }
  },
  plugins: []
};

export default tailwindConfig;
