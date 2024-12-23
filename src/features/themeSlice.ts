import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  currentTheme: 'primary' | 'dark';
}

const initialState: ThemeState = {
  currentTheme: 'primary',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.currentTheme =
        state.currentTheme === 'primary' ? 'dark' : 'primary';
    },
    setTheme(state, action: PayloadAction<'primary' | 'dark'>) {
      state.currentTheme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
