import React, { JSX, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useBoardActions } from '@/hooks/useBoardActions';
import Modal from '@components/Modal/Modal';
import {
  BoardContainer,
  ColumnHeader,
  TicketList,
  TicketCounter,
  ColumnTitle,
  BoardMenu,
  BoardContent,
} from './Board.styles';
import CreateEditTicket from './CreateEditTicket';
import DraggableTicket from '@components/dnd/DraggableTicket';
import DroppableColumn from '@components/dnd/DroppableColumns';
import SearchBar from '@components/SearchBar/SearchBar';

const Board = () => {
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
        action="create"
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
        action="edit"
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
        action="delete"
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
    const sourceColumnId = Object.keys(columns).find((columnId) =>
      columns[columnId].ticketIds.includes(ticketId)
    );
    const destinationColumnId = over.id as string;

    if (
      sourceColumnId &&
      destinationColumnId &&
      sourceColumnId !== destinationColumnId
    ) {
      moveTicket(ticketId, sourceColumnId, destinationColumnId);
    }
  };

  const getFilteredTicketIds = (ticketIds: string[]) => {
    return ticketIds.filter((ticketId) =>
      tickets[ticketId].content.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <BoardContainer>
          <BoardMenu>
            <SearchBar onSearch={(term) => setSearchTerm(term.toLowerCase())} />
          </BoardMenu>
          <BoardContent>
            {Object.values(columns).map((column) => {
              const filteredTicketIds = getFilteredTicketIds(column.ticketIds);

              return (
                <DroppableColumn key={column.id} id={column.id}>
                  <ColumnHeader columnId={column.id}>
                    <ColumnTitle>
                      {column.name}
                      <TicketCounter>
                        ({filteredTicketIds.length})
                      </TicketCounter>
                    </ColumnTitle>
                    <button
                      className="add-ticket"
                      onClick={() => handleCreateTicket(column.id)}
                      aria-label={`Add ticket to ${column.name}`}
                    >
                      +
                    </button>
                  </ColumnHeader>
                  <TicketList>
                    {filteredTicketIds.map((ticketId) => (
                      <DraggableTicket
                        key={ticketId}
                        id={ticketId}
                        ticket={tickets[ticketId]}
                        columnId={column.id}
                        onUpdate={(id, content) =>
                          handleEditTicket(id, content)
                        }
                        onDelete={(id) => handleDeleteTicket(id, column.id)}
                      />
                    ))}
                  </TicketList>
                </DroppableColumn>
              );
            })}
          </BoardContent>
        </BoardContainer>
      </DndContext>
      {isModalOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
    </>
  );
};

export default Board;
