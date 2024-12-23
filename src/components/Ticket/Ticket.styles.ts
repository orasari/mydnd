import { getAccentColor, getPrimaryColor } from '@/utils/themeUtils';
import styled from 'styled-components';

export const TicketWrapper = styled.div<{ columnId: string }>`
  position: relative;
  height: 120px;
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.small} 0;
  background-color: ${({ theme, columnId }) => getAccentColor(columnId, theme)};
  color: ${({ theme }) => theme.colors.textContrast};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover > button {
    opacity: 1;
  }

  > button {
    pointer-events: auto; /* Always enable pointer events */
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme, columnId }) =>
      getPrimaryColor(columnId, theme)};
  }

  &.dragging {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: ${({ theme }) => `calc(${theme.borderRadius} - 2px)`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xsmall};
  }
`;

export const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  max-height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textContrast};
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-top: 5px;

  p {
    line-height: inherit;
    display: inherit;
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    word-break: inherit;
    overflow-wrap: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  background: transparent;
  color: ${({ theme }) => theme.colors.textContrast};
  font-size: ${({ theme }) => theme.fontSizes.large};
  cursor: pointer;
  transition:
    color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0;
  border: none;
  opacity: 0;
  pointer-events: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
