import React from 'react';
import { StyledIcon, StyledLink, StyledNavigation } from './Navigation.styled';
import icons from '../../images/icons.svg'
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navigation() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <StyledNavigation>
      <StyledLink to={'/home'}>
          <StyledIcon width={38} height={38}>
            <use href={`${icons}#icon-home_bcg`}/>
          </StyledIcon>
        {isTabletOrDesktop && <p>Home</p>}
      </StyledLink>
      <StyledLink to={'/statistics'}>
          <StyledIcon width={38} height={38}>
            <use href={`${icons}#icon-stat_bcg`}/>
          </StyledIcon>
        {isTabletOrDesktop && <p>Statistics</p>}
      </StyledLink>
      {!isTabletOrDesktop && <StyledLink to={'/currency'}>
      <StyledIcon width={38} height={38}>
        <use href={`${icons}#icon-currency_bcg`}/>
      </StyledIcon>
    </StyledLink>}
    </StyledNavigation>
  );
}

export default Navigation;
