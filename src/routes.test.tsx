import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes 테스트', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('intro page 렌더링', () => {
    it('renders the intro page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요./);
    });
  });

  context('order page 렌더링', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/주문내역/);
    });
  })
});
