import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from '../routesConfig/PrivateRoute';
import { RestrictedRoute } from '../routesConfig/RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../reduxConfig/auth/selectors';
import { refreshUser } from '../reduxConfig/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const HomePage = lazy(() => import('../pages/HomePage'));
  const CurrencyPage = lazy(() => import('../pages/CurrencyPage'));
  const DashboardPage = lazy(() =>
    import('../pages/DashboardPage/DashboardPage')
  );
  const LoginPage = lazy(() => import('../pages/LoginPage'));
  const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
  const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LoginPage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={<RegistrationPage />}
            />
          }
        />
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<DashboardPage />} />
        <Route
          path='register'
          element={<RestrictedRoute redirectTo='/dashboard' component={<RegistrationPage />} />}
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
          path='login'
          element={
            <RestrictedRoute redirectTo='/dashboard' component={<LoginPage />}
            />
          } />
        <Route
          path="dashboard"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          {<Route path="currency" element={<CurrencyPage />} />}
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
