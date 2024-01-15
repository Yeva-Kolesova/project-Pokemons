import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import Balance from '../../components/Balance/Balance';
import Container from '../../components/Container/Container';
import {
  DashboardContainer,
  GradientLeftBottom,
  GradientLeftTop,
  GradientRightBottom,
  GradientRightTop,
  LeftContainer,
  NavAndBalanceWrapper,
  SectionContainer,
} from './DashboardPage.styled';
import { useMediaQuery } from 'react-responsive';
import CurrencyPage from '../CurrencyPage';
import { useDispatch } from 'react-redux';
import { allTransactionThunk, getTransactionsCategoriesThunk } from 'reduxConfig/transactions/operations';

function DashboardPage() {
  const dispatch = useDispatch();

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const location = useLocation();
  const currentPage = location.pathname
    .replace('dashboard', '')
    .replaceAll('/', '');

  useEffect(() => {
    dispatch(getTransactionsCategoriesThunk());
    dispatch(allTransactionThunk());
  }, [dispatch]);

  return (
    <SectionContainer>
      <Header />
      <Container>
        <DashboardContainer>
          <GradientLeftTop />
          <GradientLeftBottom />
          {isTabletOrDesktop && (
            <>
              <GradientRightBottom />
              <GradientRightTop />
            </>
          )}
          <LeftContainer>
            <NavAndBalanceWrapper>
              <Navigation />
              {!isTabletOrDesktop &&
                (currentPage === 'home' || currentPage === '') && <Balance />}
              {isTabletOrDesktop && <Balance />}
            </NavAndBalanceWrapper>
            {isTabletOrDesktop && <CurrencyPage />}
          </LeftContainer>
   {/*       <Suspense fallback={<Loader/>}>*/}
            <Outlet />
       {/*   </Suspense>*/}
        </DashboardContainer>
      </Container>
    </SectionContainer>
  );
}

export default DashboardPage;
