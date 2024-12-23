import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 480px;
  width: 90%;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xlarge};
  min-height: 120px;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  textarea {
    width: 100%;
    height: 100px;
    margin: 20px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
    padding: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    resize: none;
    outline: none;
    transition: border-color 0.3s ease;
    &:focus {
      border-color: ${({ theme }) => theme.colors.lightBlue};
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.1),
        0 0 0 2px ${({ theme }) => theme.colors.lightBlue};
    }
  }

  .modal-content {
    display: flex;
    height: 100%;
    position: relative;
    flex-grow: 1;
    flex-direction: column;
    /* margin: auto; */
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .modal-actions {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.small};

    button {
      background: ${({ theme }) => theme.colors.primaryNavy};
      color: ${({ theme }) => theme.colors.textContrast};
      padding: ${({ theme }) => theme.spacing.small}
        ${({ theme }) => theme.spacing.medium};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      border-radius: ${({ theme }) => theme.borderRadius};
      border: none;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      &:disabled {
        background: ${({ theme }) => theme.colors.disabledBackground};
        color: ${({ theme }) => theme.colors.disabledText};
        cursor: not-allowed;
        opacity: 0.6;
      }
    }
  }
`;
