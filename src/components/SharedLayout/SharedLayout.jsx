import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
      <Suspense fallback={<p></p>}>
        <Outlet />
      </Suspense>
  );
}
