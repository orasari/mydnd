import React from 'react';
import { Content, TicketWrapper, DeleteButton } from './Ticket.styles';
import { TicketProps } from '@/types/Types';

const Ticket = ({ ticket, columnId, onUpdate, onDelete }: TicketProps) => {
  const handleDoubleClick = () => {
    onUpdate(ticket.id, ticket.content);
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(ticket.id, columnId);
  };

  return (
    <TicketWrapper
      onDoubleClick={handleDoubleClick}
      role="button"
      tabIndex={0}
      aria-label={`Ticket: ${ticket.content}`}
      $columnId={columnId}
    >
      <DeleteButton
        onPointerDown={(event) => event.stopPropagation()}
        onClick={handleDelete}
        aria-label="Delete ticket"
      >
        x
      </DeleteButton>
      <Content aria-live="polite">
        <p>{ticket.content}</p>
      </Content>
    </TicketWrapper>
  );
};

export default Ticket;
