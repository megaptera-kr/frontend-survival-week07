import { screen, waitFor } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { useRender } from './testHelper';

import routes from './routes';

import PATHNAME from './constants/pathname';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });

    useRender(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the intro page', () => {
      renderRouter(PATHNAME.Home);

      screen.getByText(/원하시는 주문을 터치해주세요/);
    });
  });

  context('when the current path is “/order”', () => {
    it('renders the order page', () => {
      renderRouter(PATHNAME.Order);

      screen.getByText(/메가테라 푸드코트 키오스크/);
    });
  });

  context('when the current path is “/order/complete”', () => {
    it('renders the order result page', async () => {
      renderRouter(`${PATHNAME.OrderComplete}?orderId="ID"`);

      await waitFor(() => {
        screen.getByText(/주문이 완료되었습니다!/);
      });
    });
  });
});
