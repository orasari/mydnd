import React from 'react';
import { ModalContent, ModalOverlay } from './Modal.styles';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <ModalOverlay onClick={onClose} data-testid="mnodal-overlay">
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
