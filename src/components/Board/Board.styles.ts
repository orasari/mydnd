import {
  getAccentColor,
  getLightColor,
  getPrimaryColor,
} from '@/utils/themeUtils';
import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Column = styled.div<{ $columnId: string }>`
  flex: 0 0 auto;
  width: 280px;
  min-height: 400px;
  background-color: ${({ theme, $columnId }) =>
    getLightColor($columnId, theme)};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.textContrast};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 240px;
  }
`;

export const ColumnHeader = styled.div<{ $columnId: string }>`
  position: relative;
  display: flex;
  border-bottom: 5px solid ${({ theme }) => theme.colors.background};
  background-color: ${({ theme, $columnId }) =>
    getPrimaryColor($columnId, theme)};
    .add-ticket {
      cursor: pointer;
      background: transparent;
      color: ${({ theme }) => theme.colors.textContrast};
      border: none;
      width: 50px;
      height: 100%;
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: font-size 0.3s ease, background-color 0.3s ease;
    
      &:hover {
        font-size: ${({ theme }) => theme.fontSizes.xxlarge};
        background: ${({ theme, $columnId }) => getAccentColor($columnId, theme)};
      }
    }    
    
  }
`;

export const ColumnTitle = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 12px;
`;

export const TicketList = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  min-height: 400px;
`;

export const TicketCounter = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textContrast};
`;

export const BoardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 60vh;
  scroll-behavior: smooth;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const BoardMenu = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
  justify-content: right;
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;
