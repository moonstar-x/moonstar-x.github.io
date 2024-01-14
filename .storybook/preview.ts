import type { Preview } from '@storybook/react';
import '@styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      // @ts-ignore
      storySort: (a, b) => {
        return a.title.localeCompare(b.title);
      }
    }
  }
};

export default preview;
