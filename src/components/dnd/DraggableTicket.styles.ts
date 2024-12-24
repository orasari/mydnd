import styled, { css } from 'styled-components';

interface DraggableDivProps {
  transform?: {
    x: number;
    y: number;
  };
}

export const DraggableDiv = styled.div<DraggableDivProps>`
  position: relative;
  cursor: grab;
  transition:
    transform 200ms ease,
    background-color 200ms ease;

  ${(props) =>
    props.transform &&
    css`
      transform: translate3d(${props.transform.x}px, ${props.transform.y}px, 0);
      transition: none;
      cursor: grabbing;
    `}
`;
