import React from 'react';
import { HeaderWrapper, LogoWrapper, StyledHeader, StyledLink, UserInfoWrapper } from './Header.styled';
import Container from '../Container/Container';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper>
            {/*<svg>
              <use/>
            </svg>*/}
            <p>Money Guard</p>
          </LogoWrapper>
          <UserInfoWrapper>
            <StyledLink>Name</StyledLink>
            {/* <svg>
              <use/>
            </svg>*/}
          </UserInfoWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}

export default Header;
