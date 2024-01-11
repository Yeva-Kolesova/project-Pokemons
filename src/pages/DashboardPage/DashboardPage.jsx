import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Balance from '../../components/Balance/Balance';
import Container from '../../components/Container/Container';
import {
  DashboardContainer, GradientLeftBottom, GradientLeftTop,
  GradientRight,
  LeftContainer,
  NavAndBalanceWrapper,
} from './DashboardPage.styled';
import { useMediaQuery } from 'react-responsive';
import { CurrencyPage } from '../CurrencyPage';

function DashboardPage() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <Header />
      <Container>
        <DashboardContainer>
          <GradientRight/>
          <GradientLeftBottom/>
          <GradientLeftTop/>
          <LeftContainer>
            <NavAndBalanceWrapper>
              <Navigation />
              <Balance />
            </NavAndBalanceWrapper>
            {isTabletOrDesktop && <CurrencyPage />}
          </LeftContainer>
          <Suspense fallback={<h2>Loading page suspense</h2>}>
            <Outlet />
          </Suspense>
        </DashboardContainer>
      </Container>
    </>
  );
}

export default DashboardPage;
