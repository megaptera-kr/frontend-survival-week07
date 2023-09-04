import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';
import fixtures from '../fixtures';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is the "/" page', () => {
    it('renders <Restaurants /> page', () => {
      renderRouter('/');
      screen.getByText('매장 주문');
      screen.getByText('전체 포장');
    });
  });

  context('when the current path is the "/order" page', () => {
    it('renders <Order /> page', () => {
      renderRouter('/order');
      screen.getByLabelText('검색');
      screen.getByText(/주문내역/);
      screen.getByText('주문하기');
    });
  });

  context('when the current path is the "/order/complete" page', () => {
    const { id } = fixtures.order;

    it('renders <Order /> page', async () => {
      renderRouter(`/order/complete?orderId=${id}`);

      await waitFor(() => {
        screen.getByText('주문이 완료되었습니다!');
        screen.getByText(new RegExp(id));
        screen.getByText(/메인화면/);
      });
    });
  });
});
