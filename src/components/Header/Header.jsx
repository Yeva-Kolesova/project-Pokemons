import React from 'react';
import { HeaderWrapper, LogoWrapper, StyledExit, StyledHeader, UserInfoWrapper } from './Header.styled';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../reduxConfig/auth/selectors';
import { IoExitOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import icons from '../../images/icons.svg'

function Header() {
  const userName = useSelector(selectUserName);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper>
            <svg width={17} height={17}>
              <use href={`${icons}#icon-Logo`}/>
            </svg>
            <p>Money Guard</p>
          </LogoWrapper>
          <UserInfoWrapper>
            <span>{userName}</span>
            <StyledExit>
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
