import React, { JSX, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useBoardActions } from '@/hooks/useBoardActions';
import Modal from '@components/Modal/Modal';
import SearchBar from '@components/SearchBar/SearchBar';
import CreateEditTicket from './subcomponents/CreateEditTicket';
import { renderColumns } from './subcomponents/ColumnsRenderer';

import { BoardContainer, BoardContent, BoardMenu } from './Board.styles';
import { findTicketColumn } from '@/utils/boardUtils';
import { ActionTypeEnum } from '@/utils/enums';

const Board: React.FC = () => {
  const { addTicket, deleteTicket, updateTicketContent, moveTicket } =
    useBoardActions();

  const columns = useSelector((state: RootState) => state.board.columns);
  const tickets = useSelector((state: RootState) => state.board.tickets);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (content: JSX.Element) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleCreateTicket = (columnId: string) => {
    openModal(
      <CreateEditTicket
        action={ActionTypeEnum.CREATE}
        onSave={(content) => {
          addTicket(columnId, content);
          closeModal();
        }}
        onClose={closeModal}
      />
    );
  };

  const handleEditTicket = (ticketId: string, content: string) => {
    openModal(
      <CreateEditTicket
        action={ActionTypeEnum.EDIT}
        initialContent={content}
        onSave={(updatedContent) => {
          updateTicketContent(ticketId, updatedContent);
          closeModal();
        }}
        onClose={closeModal}
      />
    );
  };

  const handleDeleteTicket = (ticketId: string, columnId: string) => {
    openModal(
      <CreateEditTicket
        action={ActionTypeEnum.DELETE}
        onDelete={() => {
          deleteTicket(ticketId, columnId);
          closeModal();
        }}
        onClose={closeModal}
      />
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const ticketId = active.id as string;
    const sourceColumnId = findTicketColumn(ticketId, columns);
    const destinationColumnId = over.id as string;

    if (
      sourceColumnId &&
      destinationColumnId &&
      sourceColumnId !== destinationColumnId
    ) {
      moveTicket(ticketId, sourceColumnId, destinationColumnId);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <BoardContainer>
          <BoardMenu>
            <SearchBar onSearch={handleSearch} />
          </BoardMenu>
          <BoardContent>
            {renderColumns({
              columns,
              tickets,
              searchTerm,
              handleCreateTicket,
              handleEditTicket,
              handleDeleteTicket,
            })}
          </BoardContent>
        </BoardContainer>
      </DndContext>

      {isModalOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
    </>
  );
};

export default Board;
