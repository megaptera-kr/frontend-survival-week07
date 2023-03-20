import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders home page', () => {
      renderRouter('/');

      screen.getByText(/어서오세요/);
    });
  });

  context('when the current path is "/list"', () => {
    it('renders RestaurantList page', () => {
      renderRouter('/list');

      screen.getByText(/메가/);
    });
  });

  context('when the current path is "/restaurant/:id"', () => {
    it('renders RestaurantDetail page', () => {
      renderRouter('/restaurant/1');

      screen.getByText(/식당 이름/);
    });
  });

  context('when the current path is "/cart"', () => {
    it('renders Cart page', () => {
      renderRouter('/cart');

      screen.getByText(/점심 바구니/);
    });
  });

  context('when the current path is "/order"', () => {
    it('renders Order page', () => {
      renderRouter('/order');

      screen.getByText(/결제/);
    });
  });

  context('when the current path is "/ordercomplete"', () => {
    it('renders OrderComplete page', () => {
      renderRouter('/ordercomplete');

      screen.getByText(/주문 완료/);
    });
  });
});
