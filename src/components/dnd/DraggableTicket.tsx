import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import Ticket from '@components/Ticket/Ticket';
import { TicketType } from '@/types/Types';

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

  const style: React.CSSProperties = {
    position: 'relative',
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: transform
      ? 'none'
      : 'transform 200ms ease, background-color 200ms ease',
    cursor: transform ? 'grabbing' : 'grab',
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <Ticket
        ticket={ticket}
        onUpdate={onUpdate}
        columnId={columnId}
        onDelete={onDelete}
      />
    </div>
  );
};

export default DraggableTicket;
