import { screen, render } from '@testing-library/react';
import { createMemoryRouter } from 'react-router-dom';

import { RouterProvider } from 'react-router';
import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path:string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
      <RouterProvider router={router} />,
    );
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요/);
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the order page', () => {
      renderRouter('/order');

      screen.getByText(/검색/);
    });
  });

  context('when the current path is "/order/complete"', () => {
    it('renders the order complete page', () => {
      renderRouter('/order/complete');

      screen.getByText(/주문이 완료되었습니다!/);
    });
  });
});
