import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../styles/theme';

export const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={primaryTheme}>{ui}</ThemeProvider>);
};
