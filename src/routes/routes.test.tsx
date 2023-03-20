import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import { RouterInfo } from './routes';

const context = describe;

describe('App', () => {
  function renderApp(path: string) {
    const router = createMemoryRouter(
      [
        {
          element: <Layout />,
          children: RouterInfo,
        },
      ],
      {
        initialEntries: [path],
      },
    );
    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders without crash', () => {
      renderApp('/');

      screen.getByText(/메가의 민족/);
    });
  });

  context('when the current path is "/list"', () => {
    it('renders without crash', () => {
      renderApp('/list');

      screen.queryAllByText(/식당 목록/);
    });
  });
});
