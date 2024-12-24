import React, { useState } from 'react';
import { ActionTypeEnum } from '../../../utils/enums';

interface CreateEditTicketProps {
  action: ActionTypeEnum;
  onSave?: (content: string) => void;
  onDelete?: () => void;
  onClose: () => void;
  initialContent?: string;
}

const CreateEditTicket: React.FC<CreateEditTicketProps> = ({
  action,
  onSave,
  onDelete,
  onClose,
  initialContent = '',
}) => {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    if (onSave && content.trim()) {
      onSave(content.trim());
    }
  };

  return (
    <div className="modal-content">
      {action === ActionTypeEnum.CREATE && <h2>Create a New Ticket</h2>}
      {action === ActionTypeEnum.EDIT && <h2>Edit Ticket</h2>}
      {action === ActionTypeEnum.DELETE && (
        <h2>Are you sure you want to delete this ticket?</h2>
      )}

      {(action === ActionTypeEnum.CREATE || action === ActionTypeEnum.EDIT) && (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={
            action === ActionTypeEnum.CREATE
              ? 'Enter ticket content'
              : 'Update ticket content'
          }
          aria-label="Ticket content"
          required
        />
      )}

      <div className="modal-actions">
        {action === ActionTypeEnum.CREATE || action === ActionTypeEnum.EDIT ? (
          <button
            onClick={handleSave}
            disabled={!content.trim()}
            data-testid="save-btn"
          >
            Save
          </button>
        ) : (
          <button onClick={onDelete} data-testid="delete-btn">
            Yes, Delete
          </button>
        )}
        <button onClick={onClose} data-testid="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateEditTicket;
