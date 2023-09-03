import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

describe('App', () => {
  function renderPage(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('Home Page', () => {
    it('Home Page를 렌더링 한다.', () => {
      renderPage('/');

      screen.getByText(/원하시는 주문을 터치해주세요/);
    });
  });

  context('Order Page', () => {
    it('Order Page를 렌더링 한다.', () => {
      renderPage('/order');
    });
  });

  context('OrderComplete Page', () => {
    it('OrderComplete Page를 렌더링 한다.', () => {
      renderPage('/order/complete');

      screen.getByText(/주문이 완료되었습니다!/);
    });
  });
});
