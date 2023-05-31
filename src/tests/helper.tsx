import {
  MemoryRouter, RouterProvider, Routes, createMemoryRouter,
} from 'react-router-dom';

import routes from '../routes';

export const withRouter = (routesEl: React.ReactElement, initialEntries = '/') => (
  <MemoryRouter initialEntries={[initialEntries]}>
    <Routes>
      {routesEl}
    </Routes>
  </MemoryRouter>
);

export const withRoutes = (initialEntries = '/') => {
  const router = createMemoryRouter(routes, { initialEntries: [initialEntries] });
  return <RouterProvider router={router} />;
};
