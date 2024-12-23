import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: auto 0;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
`;

export const Input = styled.input`
  padding: 12px 16px;
  width: 100%;
  max-width: 600px;
  border-radius: 25px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.lightNavy};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.lightNavy};
    background-color: ${({ theme }) => theme.colors.background};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightNavy};
    font-style: italic;
  }
`;
