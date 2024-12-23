import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider, useTheme } from 'styled-components';
import { primaryTheme } from '../../styles/theme';

jest.mock('../Theme/ThemeToggle', () => {
  const MockThemeToggle = () => <button>Toggle Theme</button>;
  MockThemeToggle.displayName = 'MockThemeToggle';
  return MockThemeToggle;
});

const ChildComponent = () => {
  const theme = useTheme();
  return (
    <div data-testid="theme-access">
      {theme ? 'Theme Available' : 'Theme Unavailable'}
    </div>
  );
};

describe('Layout Component', () => {
  const renderWithProviders = (children) =>
    render(
      <ThemeProvider theme={primaryTheme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    );

  it('cleans up scroll event listener on unmount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderWithProviders(<div>Test Content</div>);
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it('ensures the child component has access to the theme', () => {
    renderWithProviders(<ChildComponent />);

    expect(screen.getByTestId('theme-access')).toHaveTextContent(
      'Theme Available'
    );
  });
});
