import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/reducers/theme/themeSlice';
import { RootState } from '@/redux/store';
import { Button, IconWrapper } from './ThemeToggle.styles';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  return (
    <Button onClick={() => dispatch(toggleTheme())}>
      <IconWrapper>
        {currentTheme === 'primary' ? <FaMoon /> : <FaSun />}
      </IconWrapper>
      {currentTheme === 'primary' ? 'dark' : 'primary'} Theme
    </Button>
  );
};

export default ThemeToggle;
