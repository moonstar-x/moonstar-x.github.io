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
      gray: '#808080',
      lightGray: '#ddd',
      codeGray: '#f6f6f6',
      primary: '#3340FF',
      transparent: {
        4: 'rgba(0, 0, 0, 0.04)',
        50: 'rgba(0, 0, 0, 0.50)'
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
