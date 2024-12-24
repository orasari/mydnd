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
  top: 0;
  height: 60px;
  text-align: center;
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
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;
