import { useState, useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';

export function useScreenScroll(headerHeight: number, delay: number) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY || 0;

      if (currentScrollY < headerHeight) {
        return;
      }

      setIsHeaderVisible(currentScrollY <= lastScrollY.current);
      lastScrollY.current = currentScrollY;
    }, delay);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight, delay]);

  return isHeaderVisible;
}
