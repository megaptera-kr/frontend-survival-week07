import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import routes from './routes';

const context = describe;

const setupRouterProvider = (path: string) => {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render((<RouterProvider router={router} />));
};

describe('routes', () => {
  context('when the current path is “/”', () => {
    it('renders <HomePage />', () => {
      setupRouterProvider('/');

      screen.getByText(/원하시는 주문을 터치해주세요/);
      screen.getByRole('button', { name: /매장/ });
      screen.getByRole('button', { name: /포장/ });
    });
  });

  context('when the current path is “/order”', () => {
    it('renders <OrderPage />', () => {
      setupRouterProvider('/order');

      screen.getByText(/예상금액/);

      screen.getByRole('button', { name: /주문하기/ });
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders <OrderPage />', async () => {
      setupRouterProvider('/order/complete/?orderId="1111"');

      await waitFor(() => {
        screen.getByText(/주문이 완료되었습니다/);
        screen.getByRole('button', { name: /메인화면/ });
      });
    });
  });
});
