import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';

import Layout from './Layout';

describe('Layout', () => {
  it('Header와 Outlet을 렌더링 한다.', () => {
    function DummyOutlet() {
      return <div>outlet</div>;
    }
    const routes = [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <DummyOutlet />,
          },
        ],
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });

    render((
      <RouterProvider router={router} />
    ));

    screen.getByText(/메가테라 푸드코트 키오스크/);
    screen.getByText(/outlet/);
  });
});
