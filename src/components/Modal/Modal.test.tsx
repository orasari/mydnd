import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { renderWithTheme } from '../../utils/testUtils';

describe('Modal Component', () => {
  it('renders children inside the modal', () => {
    renderWithTheme(
      <Modal onClose={() => {}}>
        <div data-testid="modal-id">test modal</div>
      </Modal>
    );

    expect(screen.getByTestId('modal-id')).toBeInTheDocument();
    expect(screen.getByText('test modal')).toBeInTheDocument();
  });

  it('calls onClose when the overlay is clicked', () => {
    const handleClose = jest.fn();

    renderWithTheme(
      <Modal onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('mnodal-overlay'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does NOT call onClose when modal content is clicked', () => {
    const handleClose = jest.fn();

    renderWithTheme(
      <Modal onClose={handleClose}>
        <div data-testid="modal-inside-content">Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('modal-inside-content'));
    expect(handleClose).not.toHaveBeenCalled();
  });
});
