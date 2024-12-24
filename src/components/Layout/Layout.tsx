import React from 'react';
import { useScreenScroll } from '../../hooks/useScreenScroll';
import { LayoutContainer, Header, Footer, Content } from './Layout.styles';
import ThemeToggle from '../Theme/ThemeToggle';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isHeaderVisible = useScreenScroll(130, 100);

  return (
    <LayoutContainer>
      <Header className={isHeaderVisible ? '' : 'hidden'}>
        <h1>Minas Kanban Board</h1>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <ThemeToggle aria-label="Toggle theme" />
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
