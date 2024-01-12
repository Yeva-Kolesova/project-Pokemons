import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Balance from '../../components/Balance/Balance';
import Container from '../../components/Container/Container';
import {
  DashboardContainer, GradientLeftBottom, GradientLeftTop,
  GradientRightBottom, GradientRightTop,
  LeftContainer,
  NavAndBalanceWrapper, SectionContainer,
} from './DashboardPage.styled';
import { useMediaQuery } from 'react-responsive';
import { CurrencyPage } from '../CurrencyPage';

function DashboardPage() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <SectionContainer>
      <Header />
      <Container>
        <DashboardContainer>
          <GradientRightBottom/>
          <GradientLeftBottom/>
          <GradientLeftTop/>
          <GradientRightTop/>
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
    </SectionContainer>
  );
}

export default DashboardPage;
