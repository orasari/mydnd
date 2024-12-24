import React from 'react';
import DroppableColumn from '@components/dnd/DroppableColumns';
import DraggableTicket from '@components/dnd/DraggableTicket';
import { getFilteredTicketIds } from '@/utils/boardUtils';

import {
  ColumnHeader,
  ColumnTitle,
  TicketList,
  TicketCounter,
} from './Board.styles';
import { ColumnType, TicketType } from '@/types/Types';

interface ColumnsRendererProps {
  columns: { [columnId: string]: ColumnType };
  tickets: { [ticketId: string]: TicketType };
  searchTerm: string;
  handleCreateTicket: (columnId: string) => void;
  handleEditTicket: (ticketId: string, content: string) => void;
  handleDeleteTicket: (ticketId: string, columnId: string) => void;
}

export const renderColumns: React.FC<ColumnsRendererProps> = ({
  columns,
  tickets,
  searchTerm,
  handleCreateTicket,
  handleEditTicket,
  handleDeleteTicket,
}) => {
  return (
    <>
      {Object.values(columns).map((column) => {
        const filteredTicketIds = getFilteredTicketIds(
          column.ticketIds,
          tickets,
          searchTerm
        );

        return (
          <DroppableColumn key={column.id} id={column.id}>
            <ColumnHeader $columnId={column.id}>
              <ColumnTitle>
                {column.name}
                <TicketCounter>({filteredTicketIds.length})</TicketCounter>
              </ColumnTitle>
              <button
                className="add-ticket"
                onClick={() => handleCreateTicket(column.id)}
                aria-label={`Add ticket to ${column.name}`}
              >
                +
              </button>
            </ColumnHeader>
            <TicketList>
              {filteredTicketIds.map((ticketId) => (
                <DraggableTicket
                  key={ticketId}
                  id={ticketId}
                  ticket={tickets[ticketId]}
                  columnId={column.id}
                  onUpdate={handleEditTicket}
                  onDelete={(id) => handleDeleteTicket(id, column.id)}
                />
              ))}
            </TicketList>
          </DroppableColumn>
        );
      })}
    </>
  );
};
