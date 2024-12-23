import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Column } from '@components/Board/Board.styles';

interface DroppableColumnProps {
  id: string;
  children: React.ReactNode;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return <Column ref={setNodeRef}>{children}</Column>;
};

export default DroppableColumn;
