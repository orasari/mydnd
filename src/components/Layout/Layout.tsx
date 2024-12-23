import React, { useEffect, useRef, useState } from 'react';
import { LayoutContainer, Header, Footer, Content } from './Layout.styles';
import ThemeToggle from '../Theme/ThemeToggle';
import throttle from 'lodash/throttle';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY || 0;
      setIsHeaderVisible(currentScrollY <= lastScrollY.current);
      lastScrollY.current = currentScrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LayoutContainer>
      <Header className={isHeaderVisible ? '' : 'hidden'}>
        <h1>My Kanban Board</h1>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <ThemeToggle aria-label="Toggle theme" />
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
