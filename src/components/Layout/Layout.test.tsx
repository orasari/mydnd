import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider, useTheme } from 'styled-components';
import { primaryTheme } from '@/styles/theme';

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

  it('renders the Layout component correctly', () => {
    renderWithProviders(<div>Test Content</div>);

    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Board')).toBeInTheDocument();

    // Check for children
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Check for ThemeToggle
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument();
  });

  it('hides the header when scrolling down and shows it when scrolling up', () => {
    renderWithProviders(<div>Test Content</div>);

    const header = screen.getByRole('banner');
    expect(header).toBeVisible();

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(header).toHaveClass('hidden');

    fireEvent.scroll(window, { target: { scrollY: 50 } });
    expect(header).not.toHaveClass('hidden');
  });

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
