import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('routes', () => {
  // (테스트)헬퍼
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }
  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/어서오세요/);
    });
  });

  context('when the current path is "/list"', () => {
    it('renders the list page', () => {
      renderRouter('/list');

      screen.getAllByText(/식당 목록/);
    });
  });

  context('when the current path is "/detail/:id"', () => {
    it('renders the detail page', () => {
      renderRouter('/detail/1');

      screen.getByText(/식당 이름/);
    });
  });

  context('when the current path is "/cart"', () => {
    it('renders the cart page', () => {
      renderRouter('/cart');

      screen.getByText(/점심 바구니/);
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/결제/);
    });
  });

  context('when the current path is "/complete"', () => {
    it('renders the complete page', () => {
      renderRouter('/complete');

      screen.getByText(/주문 완료/);
    });
  });
});
