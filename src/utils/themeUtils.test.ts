import { getAccentColor, getPrimaryColor, getLightColor } from './themeUtils';
import { DefaultTheme } from 'styled-components';

// Mock theme object
const mockTheme: DefaultTheme = {
  colors: {
    accentBlue: '#5b9bd5',
    accentRed: '#f44336',
    accentNavy: '#3b5998',
    defaultColor: '#e0e0e0',
    primaryBlue: '#2b5797',
    primaryRed: '#d32f2f',
    primaryNavy: '#1a3e6e',
    defaultPrimary: '#cfd8dc',
    lightBlue: '#bbdefb',
    lightRed: '#ffcdd2',
    lightNavy: '#90caf9',
    defaultLight: '#f5f5f5',
  },
};

describe('themeUtils', () => {
  describe('getAccentColor', () => {
    it('returns the correct accent color for column-1', () => {
      expect(getAccentColor('column-1', mockTheme)).toBe('#5b9bd5');
    });

    it('returns the correct accent color for column-2', () => {
      expect(getAccentColor('column-2', mockTheme)).toBe('#f44336');
    });

    it('returns the correct accent color for column-3', () => {
      expect(getAccentColor('column-3', mockTheme)).toBe('#3b5998');
    });

    it('returns the default accent color for an unknown column ID', () => {
      expect(getAccentColor('unknown-column', mockTheme)).toBe('#e0e0e0');
    });
  });

  describe('getPrimaryColor', () => {
    it('returns the correct primary color for column-1', () => {
      expect(getPrimaryColor('column-1', mockTheme)).toBe('#2b5797');
    });

    it('returns the correct primary color for column-2', () => {
      expect(getPrimaryColor('column-2', mockTheme)).toBe('#d32f2f');
    });

    it('returns the correct primary color for column-3', () => {
      expect(getPrimaryColor('column-3', mockTheme)).toBe('#1a3e6e');
    });

    it('returns the default primary color for an unknown column ID', () => {
      expect(getPrimaryColor('unknown-column', mockTheme)).toBe('#cfd8dc');
    });
  });

  describe('getLightColor', () => {
    it('returns the correct light color for column-1', () => {
      expect(getLightColor('column-1', mockTheme)).toBe('#bbdefb');
    });

    it('returns the correct light color for column-2', () => {
      expect(getLightColor('column-2', mockTheme)).toBe('#ffcdd2');
    });

    it('returns the correct light color for column-3', () => {
      expect(getLightColor('column-3', mockTheme)).toBe('#90caf9');
    });

    it('returns the default light color for an unknown column ID', () => {
      expect(getLightColor('unknown-column', mockTheme)).toBe('#f5f5f5');
    });
  });
});
