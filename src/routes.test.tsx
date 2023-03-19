import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });

    render(<RouterProvider router={router} />);
  }
  context('when current page is "/"', () => {
    it('render HomePage', () => {
      renderRouter('/');
      screen.getByText(/어서오세요/);
    });
  });
  context('when current page is "/list"', () => {
    it('render RestaurantListPage', () => {
      renderRouter('/list');
      screen.getByText('메가반점');
      screen.getByText('메리김밥');
      screen.getByText('혹등고래카레');
    });
  });
  context('when current page is "/cart"', () => {
    it('render CartPage', () => {
      renderRouter('/cart');
      screen.getByText(/점심 바구니/);
    });
  });
  context('when current page is "/order"', () => {
    it('render OrderPage', () => {
      renderRouter('/order');
      screen.getByText(/이대로 주문하시겠어요?/);
    });
  });
  context('when current page is "/complete"', () => {
    it('render OrderPage', () => {
      renderRouter('/complete');
      screen.getByText(/주문 완료/);
    });
  });
});
