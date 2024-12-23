import React, { useState } from 'react';

interface CreateEditTicketProps {
  action: 'create' | 'edit' | 'delete';
  onSave?: (content: string) => void; // Optional for create/edit
  onDelete?: () => void; // Only for delete action
  onClose: () => void;
  initialContent?: string; // For edit action
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
      {action === 'create' && <h2>Create a New Ticket</h2>}
      {action === 'edit' && <h2>Edit Ticket</h2>}
      {action === 'delete' && (
        <h2>Are you sure you want to delete this ticket?</h2>
      )}

      {(action === 'create' || action === 'edit') && (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={
            action === 'create'
              ? 'Enter ticket content'
              : 'Update ticket content'
          }
          aria-label="Ticket content"
          required
        />
      )}

      <div className="modal-actions">
        {action === 'create' || action === 'edit' ? (
          <button onClick={handleSave} disabled={!content.trim()}>
            Save
          </button>
        ) : (
          <button onClick={onDelete}>Yes, Delete</button>
        )}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateEditTicket;
