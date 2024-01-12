import React, { useState } from 'react';
import { HeaderWrapper, LogoWrapper, StyledExit, StyledHeader, UserInfoWrapper } from './Header.styled';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../reduxConfig/auth/selectors';
import { IoExitOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import icons from '../../images/icons.svg'
import ModalLogout from 'components/ModalLogout/ModalLogout';

function Header() {
  const userName = useSelector(selectUserName);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to={'/'} >
            <svg width={17} height={17}>
              <use href={`${icons}#icon-Logo`}/>
            </svg>
            <p>Money Guard</p>
          </LogoWrapper>
          <UserInfoWrapper>
            <span>{userName}</span>
           
            {isModalOpen && <ModalLogout closeModal={setIsModalOpen} />}
            <StyledExit onClick={() => setIsModalOpen(true)}>
            
              <IoExitOutline size={18} />
              {isTabletOrDesktop && <p>Exit</p>}
            </StyledExit>
          </UserInfoWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;
