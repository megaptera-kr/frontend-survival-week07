import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import routes from './router';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/어서오세요, 메가의 민족입니다/);
    });
  });

  context('when the current path is “/restaurant', () => {
    it('renders the restarant list page', () => {
      renderRouter('/restaurant');

      screen.getAllByText(/식당 목록/);
    });
  });

  context('when the current path is “/cart', () => {
    it('renders the cart page', () => {
      renderRouter('/cart');

      screen.getAllByText(/장바구니/);
    });
  });

  context('when the current path is “/order', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getAllByText(/이대로 주문하시겠어요?/);
    });
  });
});
