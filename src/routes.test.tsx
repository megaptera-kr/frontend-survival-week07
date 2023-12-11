import { RouterProvider, createMemoryRouter } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';
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

      screen.getByText('매장주문');
      screen.getByText('전체포장');
    });
  });

  // context('when the current path is “/order', () => {
  //   it('renders the about page', () => {
  //     renderRouter('/order');

  //     // await waitFor(() => {
  //     //   screen.getByText(/메가반점/);
  //     //   screen.getByText(/메리김밥/);
  //     // });
  //   });
  // });

  // context('when the current path is “/order/complete', () => {
  //   it('renders the about page', () => {
  //     renderRouter('/order/complete');
  //     // await waitFor(() => {
  //     //   screen.getByText('주문이 완료되었습니다!');
  //     // });
  //   });
  // });
});
