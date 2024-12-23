import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Ticket from './Ticket';
import { TicketProps } from '@/types/Types';
import { primaryTheme } from '../../styles/theme';

describe('Ticket Component', () => {
  const mockOnUpdate = jest.fn();
  const mockOnDelete = jest.fn();

  const ticketProps: TicketProps = {
    ticket: { id: 'ticket-1', content: 'Sample Ticket' },
    columnId: 'todo',
    onUpdate: mockOnUpdate,
    onDelete: mockOnDelete,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithTheme = (ui: React.ReactElement) => {
    return render(<ThemeProvider theme={primaryTheme}>{ui}</ThemeProvider>);
  };

  it('renders the ticket content', () => {
    renderWithTheme(<Ticket {...ticketProps} />);
    expect(screen.getByText('Sample Ticket')).toBeInTheDocument();
  });

  it('calls onUpdate when ticket is double-clicked', () => {
    renderWithTheme(<Ticket {...ticketProps} />);
    const ticketElement = screen.getByRole('button', {
      name: /Ticket: Sample Ticket/i,
    });

    fireEvent.doubleClick(ticketElement);
    expect(mockOnUpdate).toHaveBeenCalledWith('ticket-1', 'Sample Ticket');
  });

  it('calls onDelete when delete button is clicked', () => {
    renderWithTheme(<Ticket {...ticketProps} />);
    const deleteButton = screen.getByLabelText('Delete ticket');

    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith('ticket-1', 'todo');
  });
});
