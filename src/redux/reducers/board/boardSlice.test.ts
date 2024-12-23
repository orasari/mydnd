import reducer, {
    addTicket,
    deleteTicket,
    moveTicket,
    updateTicketContent,
  } from './boardSlice';
  import { BoardState } from '@/types/Types';
  
  describe('boardSlice', () => {
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
  
    it('should handle addTicket', () => {
      const action = addTicket({ columnId: 'todo', content: 'New Ticket' });
      const nextState = reducer(initialState, action);
  
      const newTicketId = Object.keys(nextState.tickets).find(
        (id) => !initialState.tickets[id]
      );
  
      expect(newTicketId).toBeDefined();
      expect(nextState.tickets[newTicketId!].content).toBe('New Ticket');
      expect(nextState.columns.todo.ticketIds).toContain(newTicketId);
    });
  
    it('should handle deleteTicket', () => {
      const action = deleteTicket({ ticketId: 'ticket-1', columnId: 'todo' });
      const nextState = reducer(initialState, action);
  
      expect(nextState.tickets['ticket-1']).toBeUndefined();
      expect(nextState.columns.todo.ticketIds).not.toContain('ticket-1');
    });
  
    it('should handle moveTicket', () => {
      const action = moveTicket({
        ticketId: 'ticket-1',
        sourceColumnId: 'todo',
        destinationColumnId: 'inProgress',
      });
      const nextState = reducer(initialState, action);
  
      expect(nextState.columns.todo.ticketIds).not.toContain('ticket-1');
      expect(nextState.columns.inProgress.ticketIds).toContain('ticket-1');
    });
  
    it('should handle updateTicketContent', () => {
      const action = updateTicketContent({
        ticketId: 'ticket-1',
        content: 'Updated Content',
      });
      const nextState = reducer(initialState, action);
  
      expect(nextState.tickets['ticket-1'].content).toBe('Updated Content');
    });
  });
  