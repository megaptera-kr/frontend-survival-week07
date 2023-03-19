import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const context = describe;

describe('App', () => {
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

  context('when the current path is “/restaurants”', () => {
    it('renders the restaurants” page', () => {
      renderRouter('/restaurants');

      screen.getByText(/혹등고래카레/);
    });
  });

  context('when the current path is “/restaurants/detail/:id”', () => {
    it('renders the restaurantsDetail page', () => {
      renderRouter('/restaurants/detail/1');

      screen.getByText(/메가반점/);
    });
  });

  context('when the current path is “/cart”', () => {
    it('renders the cart” page', () => {
      renderRouter('/cart');

      screen.getByText(/점심 바구니/);
    });
  });

  context('when the current path is “/order', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/주문하시겠어요?/);
    });
  });

  context('when the current path is “/order-complete', () => {
    it('renders the orderComplete page', () => {
      renderRouter('/order-complete');

      screen.getByText(/주문 완료/);
    });
  });
});
