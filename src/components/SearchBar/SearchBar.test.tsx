import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithTheme } from '../../utils/testUtils';

describe('SearchBar Component', () => {
  let onSearchMock: jest.Mock;

  beforeEach(() => {
    onSearchMock = jest.fn();
    renderWithTheme(<SearchBar onSearch={onSearchMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the input field with the correct placeholder', () => {
    const input = screen.getByPlaceholderText('Search tickets...');
    expect(input).toBeInTheDocument();
  });

  it('updates the input value when typing', () => {
    const input = screen.getByTestId('searchField') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test search' } });
    expect(input.value).toBe('Test search');
  });
});
