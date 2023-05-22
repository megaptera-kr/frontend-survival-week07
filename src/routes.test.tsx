import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path:string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }
  context('현재 경로가 "/"일 때', () => {
    it('홈페이지가 랜더링 된다.', () => {
      renderRouter('/');

      expect(screen.getByText(/매장 주문/)).toBeInTheDocument();
      expect(screen.getByText(/전체 포장/)).toBeInTheDocument();
    });
  });

  context('현재 경로가 "/order"일 때', () => {
    it('홈페이지가 랜더링 된다.', () => {
      renderRouter('/order');

      expect(screen.getByText(/OrderPage/)).toBeInTheDocument();
    });
  });

  context('현재 경로가 "/order/complete"일 때', () => {
    it('홈페이지가 랜더링 된다.', () => {
      renderRouter('/order/complete');

      expect(screen.getByText(/OrderCompletePage/)).toBeInTheDocument();
    });
  });
});
