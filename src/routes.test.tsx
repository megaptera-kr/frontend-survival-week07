import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요/);
      screen.getByText(/매장 주문/);
      screen.getByText(/전체 포장/);
    });
  });

  context('when the current path is “/order"', () => {
    it('renders the about page', () => {
      renderRouter('/order');

      screen.getByText(/검색/);
    });
  });

  context('when the current path is “/order/complete', () => {
    it('renders the logout page', () => {
      renderRouter('/order/complete');

      screen.getByText(/주문이 완료되었습니다./);
      screen.getByText(/주문번호/);
      screen.getByText(/주문목록/);
      screen.getByText(/총가격/);
      screen.getByText(/메인화면으로 돌아가기/);
    });
  });
});
