import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  box-shadow: -1px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  &.hidden {
    transform: translateY(-100%);
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }

  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);

  &.hidden {
    transform: translateY(100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
