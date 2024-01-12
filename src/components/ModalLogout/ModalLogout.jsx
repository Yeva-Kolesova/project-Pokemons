import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'reduxConfig/auth/operations';
import icons from '../../images/icons.svg';
import {
  ModalButton,
  ModalButtonCancel,
  ModalContent,
  ModalWrapper,
  StyledIcon,
  StyledTitle,
  Text,
} from './ModalLogout.styled';

const ModalLogout = ({ closeModal }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  return (
    <ModalWrapper onClick={onBackdropClick}>
      <ModalContent>
        <StyledIcon>
          <use href={`${icons}#icon-Logo`} />
        </StyledIcon>
        <StyledTitle>Money Guard</StyledTitle>
        <Text>Are you sure you want to log out?</Text>
        <ModalButton onClick={handleLogout}>logout</ModalButton>
        <ModalButtonCancel
          onClick={() => {
            closeModal(false);
          }}
        >
          cancel
        </ModalButtonCancel>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalLogout;
