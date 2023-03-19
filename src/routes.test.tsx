import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('Routes ', () => {
  function renderRouter(path:string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
      <RouterProvider router={router} />,
    );
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');
      screen.getByText('어서오세요, 메가의 민족입니다');
    });
  });

  context('when the current path is "/restaurants"', () => {
    it('renders the restaurants list page', () => {
      renderRouter('/restaurants');
      screen.getByText('메가반점');
      screen.getByText('메리김밥');
      screen.getByText('혹등고래카레');
    });
  });

  context('when the current path is "/cart"', () => {
    it('renders the cart page', () => {
      renderRouter('/cart');
      screen.getAllByText('장바구니');
      screen.getByText('점심 바구니');
    });
  });
});
