import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('render App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render((
      <RouterProvider router={router} />
    ));
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/원하시는 주문을 터치해주세요/);
    });

    context('when the current path is "/order"', () => {
      it('renders the About page', () => {
        renderRouter('/order');

        waitFor(() => {
          screen.getByText(/메가반점/);
          screen.getByText(/메리김밥/);
        });
      });
    });

    context('when the current path is "/order/complete"', () => {
      it('redirects to the home', () => {
        renderRouter('/order/complete?orderId=111');

        waitFor(() => {
          screen.getByText(/주문번호 111/);
          screen.getByText(/짜장면/);
          screen.getByText(/짬뽕/);
          screen.getByText(/총가격 13,000원/);
        });
      });
    });
  });
});
