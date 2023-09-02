import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from '.';

const context = describe;

describe('App', () => {
  function renderRouter(path:string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');
      screen.getByText(/메가테라 푸드코트 키오스크/);
      screen.getByText(/원하시는 주문을 터치해주세요/);
      screen.getByRole('button', { name: /매장 주문/ });
      screen.getByRole('button', { name: /전체 포장/ });
    });
  });
});
