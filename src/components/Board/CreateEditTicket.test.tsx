import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateEditTicket from './CreateEditTicket';

describe('CreateEditTicket Component', () => {
  const mockOnSave = jest.fn();
  const mockOnDelete = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Create a New Ticket" header for create action', () => {
    render(
      <CreateEditTicket
        action="create"
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );
    expect(screen.getByText('Create a New Ticket')).toBeInTheDocument();
  });

  it('renders "Edit Ticket" header for edit action', () => {
    render(
      <CreateEditTicket
        action="edit"
        onSave={mockOnSave}
        onClose={mockOnClose}
        initialContent="Existing content"
      />
    );
    expect(screen.getByText('Edit Ticket')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Existing content')).toBeInTheDocument();
  });

  it('renders "Are you sure you want to delete this ticket?" header for delete action', () => {
    render(
      <CreateEditTicket
        action="delete"
        onDelete={mockOnDelete}
        onClose={mockOnClose}
      />
    );
    expect(
      screen.getByText('Are you sure you want to delete this ticket?')
    ).toBeInTheDocument();
  });

  it('calls onSave with trimmed content when save button is clicked', () => {
    render(
      <CreateEditTicket
        action="create"
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );

    const textarea = screen.getByLabelText('Ticket content');
    fireEvent.change(textarea, { target: { value: '  New Ticket Content  ' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(mockOnSave).toHaveBeenCalledWith('New Ticket Content');
  });

  it('disables save button when content is empty or whitespace', () => {
    render(
      <CreateEditTicket
        action="create"
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );

    const saveButton = screen.getByText('Save');
    expect(saveButton).toBeDisabled();

    const textarea = screen.getByLabelText('Ticket content');
    fireEvent.change(textarea, { target: { value: ' ' } });

    expect(saveButton).toBeDisabled();
  });

  it('calls onDelete when "Yes, Delete" button is clicked for delete action', () => {
    render(
      <CreateEditTicket
        action="delete"
        onDelete={mockOnDelete}
        onClose={mockOnClose}
      />
    );

    const deleteButton = screen.getByText('Yes, Delete');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('calls onClose when cancel button is clicked', () => {
    render(
      <CreateEditTicket
        action="create"
        onSave={mockOnSave}
        onClose={mockOnClose}
      />
    );

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
