// DraggableTicket.tsx
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import Ticket from '@components/Ticket/Ticket';
import { TicketType } from '@/types/Types';
import { DraggableDiv } from './DraggableTicket.styles';

interface DraggableTicketProps {
  id: string;
  ticket: TicketType;
  columnId: string;
  onUpdate: (id: string, content: string) => void;
  onDelete: (id: string, columnId: string) => void;
}

const DraggableTicket: React.FC<DraggableTicketProps> = ({
  id,
  ticket,
  columnId,
  onUpdate,
  onDelete,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  return (
    <DraggableDiv
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      transform={transform}
    >
      <Ticket
        ticket={ticket}
        onUpdate={onUpdate}
        columnId={columnId}
        onDelete={onDelete}
      />
    </DraggableDiv>
  );
};

export default DraggableTicket;
