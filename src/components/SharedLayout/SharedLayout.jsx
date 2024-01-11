import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';

export function SharedLayout() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
  );
}
