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
import Header from 'components/Header/Header';
import { useMediaQuery } from 'react-responsive';
import { Gradient } from 'components/AddTransactionModal/AddTransaction/AddTransaction.styled';

const ModalLogout = ({ closeModal }) => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
    <>
      <ModalWrapper onClick={onBackdropClick}>
        {!isTabletOrDesktop && <Header closeModal={closeModal}/>}
        <ModalContent>
          <Gradient />
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
    </>
  );
};

export default ModalLogout;
