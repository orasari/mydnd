import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.secondary};
`;
