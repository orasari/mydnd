import styled from 'styled-components';

export const DraggableDiv = styled.div`
  position: relative;
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-drag:
  transition:
    transform 200ms ease,
    background-color 200ms ease;

  &:active {
    cursor: grabbing;
    transition: none;
  }
`;
