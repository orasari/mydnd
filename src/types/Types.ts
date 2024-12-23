export interface ColumnType {
  id: string;
  name: string;
  ticketIds: string[];
}

export interface TicketType {
  id: string;
  content: string;
}

export interface BoardState {
  columns: { [columnId: string]: ColumnType };
  tickets: { [ticketId: string]: TicketType };
}

export type TicketProps = {
  ticket: TicketType;
  columnId: string;
  onUpdate: (id: string, columnId: string) => void;
  onDelete: (id: string, columnId: string) => void;
};
