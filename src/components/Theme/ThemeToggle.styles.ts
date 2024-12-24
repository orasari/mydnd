import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primaryNavy};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentNavy};
    scale: 1.1;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
