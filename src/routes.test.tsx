import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders the homepage', () => {
      renderRouter('/');
      screen.getByText(/어서오세요/);
    });
  });

  context('when the current path is "/restaurants"', () => {
    it('renders restaurants list', () => {
      renderRouter('/restaurants');
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
      screen.getByText(/혹등고래카레/);
    });
  });

  context('when the current path is "/restaurant/1"', () => {
    it('renders restaurant menus', () => {
      renderRouter('/restaurants/1');
    });
  });

  context('when the current path is "/cart"', () => {
    it('renders cart', () => {
      renderRouter('/cart');
      screen.getByText(/점심 바구니/);
    });
  });

  context('when the current path is "/order"', () => {
    it('renders order check page', () => {
      renderRouter('/order');
      screen.getByText(/결제/);
    });
  });

  context('when the current path is "/order_complete"', () => {
    it('renders order complete message', () => {
      renderRouter('/order_complete');
      screen.getByText(/주문 완료/);
    });
  });
});
