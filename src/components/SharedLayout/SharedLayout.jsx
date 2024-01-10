import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';

export function SharedLayout() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
