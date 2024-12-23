import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {
  const ProblematicComponent = () => {
    throw new Error('Test error');
  };

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Safe Component</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Safe Component')).toBeInTheDocument();
  });

  it('renders fallback UI when an error is thrown', () => {
    // Suppress error logs for this test
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Please try again later.')).toBeInTheDocument();

    // Restore original console error implementation
    consoleErrorSpy.mockRestore();
  });
});
