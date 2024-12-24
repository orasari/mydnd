import React from 'react';
import Board from '@components/Board/Board';
import Layout from '@components/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { primaryTheme, darkTheme } from '@/styles/theme';

const App: React.FC = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const selectedTheme = currentTheme === 'primary' ? primaryTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Layout>
        <Board />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
