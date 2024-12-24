import React, { useState, useEffect } from 'react';
import { Container, Input, ClearButton } from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <Container>
      <Input
        data-testid="searchField"
        type="text"
        placeholder="Search tickets..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <ClearButton onClick={handleClear} aria-label="Clear search">
          x
        </ClearButton>
      )}
    </Container>
  );
};

export default SearchBar;
