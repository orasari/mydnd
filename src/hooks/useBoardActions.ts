import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  addTicket,
  deleteTicket,
  moveTicket,
  updateTicketContent,
} from '../redux/reducers/boardSlice';
import { DragEndEvent } from '@dnd-kit/core';

export const useBoardActions = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.board.columns);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const ticketId = active.id as string;
    const sourceColumnId = Object.keys(columns).find((columnId) =>
      columns[columnId].ticketIds.includes(ticketId)
    );

    const destinationColumnId = over.id as string;

    if (sourceColumnId === destinationColumnId) return;

    if (sourceColumnId && destinationColumnId) {
      dispatch(
        moveTicket({
          ticketId,
          sourceColumnId,
          destinationColumnId,
        })
      );
    }
  };

  return {
    addTicket: (columnId: string, content: string) =>
      dispatch(addTicket({ columnId, content })),
    deleteTicket: (ticketId: string, columnId: string) =>
      dispatch(deleteTicket({ ticketId, columnId })),
    moveTicket: (
      ticketId: string,
      sourceColumnId: string,
      destinationColumnId: string
    ) =>
      dispatch(moveTicket({ ticketId, sourceColumnId, destinationColumnId })),
    updateTicketContent: (ticketId: string, content: string) =>
      dispatch(updateTicketContent({ ticketId, content })),
    handleDragEnd,
  };
};
