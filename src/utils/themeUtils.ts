import { DefaultTheme } from 'styled-components';

export const getAccentColor = (
  columnId: string,
  theme: DefaultTheme
): string => {
  switch (columnId) {
    case 'column-1':
      return theme.colors.accentBlue;
    case 'column-2':
      return theme.colors.accentRed;
    case 'column-3':
      return theme.colors.accentNavy;
    default:
      return theme.colors.background;
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
      return theme.colors.text;
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
      return theme.colors.text;
  }
};
