import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const tailwindConfig: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      figtree: ['Figtree', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      firaCode: ['Fira Code', 'monospace']
    },
    extend: {
      screens: {
        tablet: '768px',
        desktop: '1024px'
      }
    },
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#3340FF',
      transparent: {
        4: 'rgba(0, 0, 0, 0.04)',
        50: 'rgba(0, 0, 0, 0.50)'
      },
      gray: {
        100: '#fcfcfc',
        200: '#f6f6f6',
        300: '#e6e6e6',
        400: '#dddddd',
        500: '#aaaaaa',
        600: '#808080',
        700: '#666666'
      },
      brands: {
        facebook: '#0866FF',
        twitter: '#000000',
        linkedin: '#0A66C2',
        discord: '#5865F2',
        github: '#181717',
        dockerhub: '#2496ED',
        steam: '#000000',
        npm: '#CB3837'
      },
      tech: {
        nodejs: '#339933',
        mongo: '#47A248',
        docker: '#2496ED',
        javascript: '#F7DF1E',
        react: '#61DAFB',
        typescript: '#3178C6',
        svelte: '#FF3E00',
        lua: '#2C2D72',
        python: '#3776AB',
        markdown: '#000000',
        nextjs: '#000000',
        redis: '#DC382D',
        neo4j: '#4581C3',
        flask: '#000000',
        nginx: '#009639',
        githubActions: '#2088FF',
        jenkins: '#D24939',
        tailwind: '#06B6D4',
        sass: '#CC6699',
        opencv: '#5C3EE8',
        flutter: '#02569B',
        dart: '#0175C2',
        vite: '#646CFF',
        postgres: '#4169E1',
        express: '#000000',
        sqlite: '#003B57',
        jest: '#C21325',
        html: '#E34F26',
        css: '#1572B6',
        level: '#96DC75',
        selenium: '#43B02A',
        puppeteer: '#40B5A4',
        mariadb: '#003545'
      },
      status: {
        completed: '#6A4C93',
        maintained: '#8AC926',
        inDevelopment: '#FFCA3A',
        onHold: '#FF924C',
        deprecated: '#FF595E',
        abandoned: '#333'
      },
      stats: {
        stars: '#FFD97D',
        forks: '#957FEF',
        watchers: '#60D394',
        issues: '#EE6055',
        pulls: '#7FC8F8'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.default-transition': {
          transition: 'all ease 0.3s'
        }
      });
    }),

    plugin(({ addUtilities }) => {
      const headingFont = ['Poppins', 'sans-serif'].join(', ');
      const bodyFont = ['Figtree', 'sans-serif'].join(', ');
      const codeFont = ['Fira Code', 'monospace'].join(', ');

      addUtilities({
        '.typography-h1': {
          fontFamily: headingFont,
          fontWeight: '300',
          fontSize: '63px',
          letterSpacing: '-1.5px',
          '@media screen(desktop)': {
            fontSize: '93px'
          }
        },
        '.typography-h2': {
          fontFamily: headingFont,
          fontWeight: '300',
          fontSize: '48px',
          letterSpacing: '-0.5px',
          '@media screen(desktop)': {
            fontSize: '58px'
          }
        },
        '.typography-h3': {
          fontFamily: headingFont,
          fontWeight: '400',
          fontSize: '37px',
          letterSpacing: '0px',
          '@media screen(desktop)': {
            fontSize: '47px'
          }
        },
        '.typography-h4': {
          fontFamily: headingFont,
          fontWeight: '400',
          fontSize: '28px',
          letterSpacing: '0.25px',
          '@media screen(desktop)': {
            fontSize: '33px'
          }
        },
        '.typography-h5': {
          fontFamily: headingFont,
          fontWeight: '400',
          fontSize: '23px',
          letterSpacing: '0px'
        },
        '.typography-h6': {
          fontFamily: headingFont,
          fontWeight: '500',
          fontSize: '19px',
          letterSpacing: '0.15px'
        },
        '.typography-subtitle1': {
          fontFamily: headingFont,
          fontWeight: '400',
          fontSize: '16px',
          letterSpacing: '0.15px'
        },
        '.typography-subtitle2': {
          fontFamily: headingFont,
          fontWeight: '500',
          fontSize: '14px',
          letterSpacing: '0.1px'
        },
        '.typography-body1': {
          fontFamily: bodyFont,
          fontWeight: '400',
          fontSize: '17px',
          letterSpacing: '0.5px'
        },
        '.typography-body2': {
          fontFamily: bodyFont,
          fontWeight: '400',
          fontSize: '15px',
          letterSpacing: '0.25px'
        },
        '.typography-button': {
          fontFamily: bodyFont,
          fontWeight: '500',
          fontSize: '15px',
          letterSpacing: '1.25px'
        },
        '.typography-caption': {
          fontFamily: bodyFont,
          fontWeight: '400',
          fontSize: '13px',
          letterSpacing: '0.4px'
        },
        '.typography-overline': {
          fontFamily: bodyFont,
          fontWeight: '400',
          fontSize: '11px',
          letterSpacing: '1.5px'
        },
        '.typography-code': {
          fontFamily: codeFont,
          fontWeight: '400',
          fontSize: '17px',
          letterSpacing: '0.5px'
        }
      });
    })
  ]
};

export default tailwindConfig;
