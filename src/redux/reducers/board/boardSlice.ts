import { BoardState } from '@/types/Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoardState = {
  columns: {
    todo: {
      id: 'todo',
      name: 'To Do',
      ticketIds: ['ticket-1', 'ticket-2'],
    },
    inProgress: { id: 'inProgress', name: 'In Progress', ticketIds: [] },
    done: { id: 'done', name: 'Done', ticketIds: [] },
  },
  tickets: {
    'ticket-1': { id: 'ticket-1', content: 'Implement Search Field' },
    'ticket-2': { id: 'ticket-2', content: 'CSS Animations' },
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
      const newTicketId = `ticket-${Date.now()}`;
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
