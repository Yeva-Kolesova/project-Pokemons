import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { PrivateRoute } from '../routesConfig/PrivateRoute';
import { RestrictedRoute } from '../routesConfig/RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../reduxConfig/auth/selectors';
import { refreshUser } from '../reduxConfig/auth/operations';
import { useMediaQuery } from 'react-responsive';
import Loader from './Loader/Loader';
import { selectIsLoading } from '../reduxConfig/global/selectors';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import HomePage from '../pages/HomePage/HomePage';
import StatisticsPage from '../pages/StatisticPage/StatisticsPage';
import CurrencyPage from '../pages/CurrencyPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

/*  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const CurrencyPage = lazy(() => import('../pages/CurrencyPage'));
  const DashboardPage = lazy(() =>
    import('../pages/DashboardPage/DashboardPage')
  );
  const LoginPage = lazy(() => import('../pages/LoginPage'));
  const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
  const StatisticsPage = lazy(() =>
    import('../pages/StatisticPage/StatisticsPage')
  );*/
  return isRefreshing ? (
      <Loader visible={isLoading} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route
              path="currency"
              element={
                isTabletOrDesktop ? <Navigate to="/" /> : <CurrencyPage />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Loader visible={isLoading} />
    </>
  )
};
