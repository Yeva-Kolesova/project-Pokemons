import React, { useState } from 'react';
import {
  ExitText,
  HeaderWrapper,
  LogoWrapper,
  StyledExit,
  StyledHeader,
  UserInfoWrapper,
  UsernameText,
} from './Header.styled';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../reduxConfig/auth/selectors';
import { IoExitOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import icons from '../../images/icons.svg'
import ModalLogout from 'components/ModalLogout/ModalLogout';

function Header({closeModal = null}) {
  const userName = useSelector(selectUserName);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

const [isModalOpen, setIsModalOpen] = useState(false);

function handleExitClick() {
  !closeModal ? setIsModalOpen(true) : closeModal(false)
}

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to={'/dashboard'} >
            <svg width={17} height={17}>
              <use href={`${icons}#icon-Logo`}/>
            </svg>
            <p>Money Guard</p>
          </LogoWrapper>
          <UserInfoWrapper>
            <UsernameText>{userName}</UsernameText>

            {isModalOpen && <ModalLogout closeModal={setIsModalOpen} />}
            <StyledExit onClick={handleExitClick}>

              <IoExitOutline size={18} />
              {isTabletOrDesktop && <ExitText>Exit</ExitText>}
            </StyledExit>
          </UserInfoWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;
