import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path id "/"', () => {
    it('renders the Home Page', () => {
      renderRouter('/');

      screen.getByText(/어서오세요, 메가의 민족입니다/);
    });
  });

  context('when the current path id "/restaurants"', () => {
    it('renders the HomePage', () => {
      renderRouter('/restaurants');

      screen.getAllByText(/식당 목록/);
    });
  });

  context('when the current path id "/cart"', () => {
    it('renders the CartPage', () => {
      renderRouter('/cart');

      screen.getAllByText(/장바구니/);
      screen.getByText(/점심 바구니/);
    });
  });

  context('when the current path id "/order"', () => {
    it('renders the OrderPage', () => {
      renderRouter('/order');

      screen.getByText('이대로 주문하시겠어요?');
    });
  });

  context('When the current path is "/order/complete")', () => {
    it('redirects to the OrderCompletePage', () => {
      renderRouter('/order/complete');

      screen.getByText(/주문 완료, 서둘러 배달가겠습니다!/);
    });
  });
});
