import { BoardState } from '@/types/Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: BoardState = {
  columns: {
    todo: {
      id: 'todo',
      name: 'To Do',
      ticketIds: ['test1'],
    },
    inProgress: { id: 'inProgress', name: 'In Progress', ticketIds: [] },
    done: { id: 'done', name: 'Done', ticketIds: [] },
  },
  tickets: {
    test1: { id: 'test1', content: 'Initial Ticket for testing :)' },
  },
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addTicket: (
      state,
      action: PayloadAction<{ columnId: string; content: string }>
    ) => {
      const uniqueId = uuidv4();
      const newTicketId = `ticket-${uniqueId}`;
      state.tickets[newTicketId] = {
        id: newTicketId,
        content: action.payload.content,
      };
      state.columns[action.payload.columnId].ticketIds.push(newTicketId);
    },
    deleteTicket: (
      state,
      action: PayloadAction<{ ticketId: string; columnId: string }>
    ) => {
      const { ticketId, columnId } = action.payload;
      delete state.tickets[ticketId];
      state.columns[columnId].ticketIds = state.columns[
        columnId
      ].ticketIds.filter((id) => id !== ticketId);
    },
    moveTicket: (
      state,
      action: PayloadAction<{
        ticketId: string;
        sourceColumnId: string;
        destinationColumnId: string;
      }>
    ) => {
      const { ticketId, sourceColumnId, destinationColumnId } = action.payload;
      state.columns[sourceColumnId].ticketIds = state.columns[
        sourceColumnId
      ].ticketIds.filter((id) => id !== ticketId);
      state.columns[destinationColumnId].ticketIds.push(ticketId);
    },
    updateTicketContent: (
      state,
      action: PayloadAction<{ ticketId: string; content: string }>
    ) => {
      const { ticketId, content } = action.payload;
      if (state.tickets[ticketId]) {
        state.tickets[ticketId].content = content;
      }
    },
  },
});

export const { addTicket, deleteTicket, moveTicket, updateTicketContent } =
  boardSlice.actions;
export default boardSlice.reducer;
