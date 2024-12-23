import reducer, { toggleTheme, setTheme, ThemeState } from './themeSlice';

describe('themeReducer', () => {
  const initialState = {
    currentTheme: 'primary',
  };

  it('should return the initial state when no action is passed', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle toggleTheme', () => {
    // Toggle from 'primary' to 'dark'
    const darkState = reducer(initialState as ThemeState, toggleTheme());
    expect(darkState.currentTheme).toBe('dark');

    // Toggle back from 'dark' to 'primary'
    const primaryState = reducer(darkState, toggleTheme());
    expect(primaryState.currentTheme).toBe('primary');
  });

  it('should handle setTheme to "dark"', () => {
    const action = setTheme('dark');
    const nextState = reducer(initialState as ThemeState, action);
    expect(nextState.currentTheme).toBe('dark');
  });

  it('should handle setTheme to "primary"', () => {
    const action = setTheme('primary');
    const nextState = reducer({ currentTheme: 'dark' }, action);
    expect(nextState.currentTheme).toBe('primary');
  });
});
