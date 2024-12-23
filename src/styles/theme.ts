import { DefaultTheme } from 'styled-components';

const primaryTheme: DefaultTheme = {
  colors: {
    primaryBlue: '#4091D4',
    lightBlue: '#BFE1F5',
    accentBlue: '#5BB0DC',

    primaryRed: '#e12855',
    lightRed: '#f6bec4',
    accentRed: '#e66979',

    primaryNavy: '#0f233c',
    lightNavy: '#bac3c8',
    accentNavy: '#4b5f73',

    background: '#FFFFFF',
    text: '#000000',
    textContrast: '#FFFFFF',
    grey: '#f3f3f3',
  },
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Poppins", sans-serif',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '2rem',
    xxlarge: '2.5rem',
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  borderRadius: '8px',
};

const darkTheme: DefaultTheme = {
  colors: {
    primaryBlue: '#2d3690',
    lightBlue: '#282c55',
    accentBlue: '#3e458b',

    primaryRed: '#8f2d35',
    lightRed: '#4e262a',
    accentRed: '#74393e',

    primaryNavy: '#8f6f2d',
    lightNavy: '#997b3b',
    accentNavy: '#735a26',

    background: '#211f1f',
    text: '#f3f4f5',
    textContrast: '#FFFFFF',
    grey: '#000000',
  },
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Poppins", sans-serif',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '2rem',
    xxlarge: '2.5rem',
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  borderRadius: '8px',
};

export { primaryTheme, darkTheme };
