import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Ticket from './Ticket';
import { TicketProps } from '@/types/Types';
import { renderWithTheme } from '../../utils/testUtils';

describe('Ticket Component', () => {
  const mockOnUpdate = jest.fn();
  const mockOnDelete = jest.fn();

  const ticketProps: TicketProps = {
    ticket: { id: 'asd', content: 'My Ticket' },
    columnId: 'todo',
    onUpdate: mockOnUpdate,
    onDelete: mockOnDelete,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the ticket content', () => {
    renderWithTheme(<Ticket {...ticketProps} />);
    expect(screen.getByTestId('ticket-asd')).toBeInTheDocument();
  });

  it('calls onUpdate when ticket is double-clicked', () => {
    renderWithTheme(<Ticket {...ticketProps} />);
    const ticketElement = screen.getByTestId('ticket-asd');

    fireEvent.doubleClick(ticketElement);
    expect(mockOnUpdate).toHaveBeenCalledWith('asd', 'My Ticket');
  });

  it('calls onDelete when delete button is clicked', () => {
    renderWithTheme(<Ticket {...ticketProps} />);
    const deleteButton = screen.getByTestId('delete-asd');

    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith('asd', 'todo');
  });
});
