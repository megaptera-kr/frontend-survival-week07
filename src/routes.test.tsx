import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

describe('router', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the intro page', () => {
      renderRouter('/');
      screen.getByText('원하시는 주문을 터치해주세요');
      screen.getByText(/매장 주문/);
      screen.getByText(/전체 포장/);
    });
  });

  context('when the current path is “/order”', () => {
    it('renders the order page', () => {
      renderRouter('/order');
      screen.getByText(/전체/);
      screen.getByText(/검색/);
      screen.getByText(/취소/);
      screen.getByText(/주문하기/);
      screen.getByText(/주문내역/);
      screen.getByText(/예상금액/);
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders the order result page', () => {
      renderRouter('/order/complete');
      screen.getByText(/Loading.../);
    });
  });
});
