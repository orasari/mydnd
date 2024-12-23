import { DefaultTheme } from 'styled-components';

export const getAccentColor = (
  columnId: string,
  theme: DefaultTheme
): string => {
  console.log('columnId ', columnId);
  switch (columnId) {
    case 'column-1':
      return theme.colors.accentBlue;
    case 'column-2':
      return theme.colors.accentRed;
    case 'column-3':
      return theme.colors.accentNavy;
    default:
      return theme.colors.defaultColor || theme.colors.accentBlue; // Fallback color
  }
};

export const getPrimaryColor = (
  columnId: string,
  theme: DefaultTheme
): string => {
  switch (columnId) {
    case 'column-1':
      return theme.colors.primaryBlue;
    case 'column-2':
      return theme.colors.primaryRed;
    case 'column-3':
      return theme.colors.primaryNavy;
    default:
      return theme.colors.defaultPrimary || theme.colors.primaryBlue; // Fallback color
  }
};

export const getLightColor = (
  columnId: string,
  theme: DefaultTheme
): string => {
  switch (columnId) {
    case 'column-1':
      return theme.colors.lightBlue;
    case 'column-2':
      return theme.colors.lightRed;
    case 'column-3':
      return theme.colors.lightNavy;
    default:
      return theme.colors.defaultLight || theme.colors.lightBlue; // Fallback color
  }
};
