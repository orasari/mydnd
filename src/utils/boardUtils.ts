import { ColumnType, TicketType } from '@/types/Types';

export const findTicketColumn = (
  ticketId: string,
  columns: { [columnId: string]: ColumnType }
): string | undefined => {
  return Object.keys(columns).find((columnId) =>
    columns[columnId].ticketIds.includes(ticketId)
  );
};

export const getFilteredTicketIds = (
  ticketIds: string[],
  tickets: { [ticketId: string]: TicketType },
  searchTerm: string
) => {
  return ticketIds.filter((ticketId) =>
    tickets[ticketId].content.toLowerCase().includes(searchTerm)
  );
};
