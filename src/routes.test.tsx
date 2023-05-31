import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes 테스트', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('인트로 페이지 렌더링', () => {
    it('renders the intro page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요./);
    });
  });

  context('주문 페이지 렌더링', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/주문내역/);
    });
  });

  context('주문 완료 페이지 렌더링', () => {
    it('renders the order complete page', () => {
      renderRouter('/orderComplete');

      screen.getByText(/주문번호/);
    });
  });
});
