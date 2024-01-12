import React from 'react';
import { StyledIcon, StyledLink, StyledNavigation } from './Navigation.styled';
import icons from '../../images/icons.svg';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const location = useLocation();
  const currentPage = location.pathname.replace('dashboard', '').replaceAll('/', '');


  return (
    <StyledNavigation>
      <StyledLink to={'home'} $current={currentPage === 'home' || currentPage === ''}>
        <StyledIcon width={38} height={38}>
          <use href={`${icons}#icon-home_bcg`} />
        </StyledIcon>
        {isTabletOrDesktop && <p>Home</p>}
      </StyledLink>
      <StyledLink to={'statistics'} $current={currentPage === 'statistics'}>
        <StyledIcon width={38} height={38}>
          <use href={`${icons}#icon-stat_bcg`} />
        </StyledIcon>
        {isTabletOrDesktop && <p>Statistics</p>}
      </StyledLink>
      {!isTabletOrDesktop && (
        <StyledLink to={'currency'} $current={currentPage === 'currency'}>
          <StyledIcon width={38} height={38}>
            <use href={`${icons}#icon-currency_bcg`} />
          </StyledIcon>
        </StyledLink>
      )}
    </StyledNavigation>
  );
}

export default Navigation;
