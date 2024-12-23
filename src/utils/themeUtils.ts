import { DefaultTheme } from 'styled-components';

export const getAccentColor = (
  columnId: string,
  theme: DefaultTheme
): string => {
  switch (columnId) {
    case 'todo':
      return theme.colors.accentBlue;
    case 'inProgress':
      return theme.colors.accentRed;
    case 'done':
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
    case 'todo':
      return theme.colors.primaryBlue;
    case 'inProgress':
      return theme.colors.primaryRed;
    case 'done':
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
    case 'todo':
      return theme.colors.lightBlue;
    case 'inProgress':
      return theme.colors.lightRed;
    case 'done':
      return theme.colors.lightNavy;
    default:
      return theme.colors.defaultLight || theme.colors.lightBlue; // Fallback color
  }
};
