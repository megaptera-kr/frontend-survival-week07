import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders the homepage', () => {
      renderRouter('/');
      screen.getByText('어서오세요, 메가의 민족입니다');
    });
  });

  context('when the current path is "/restaurants"', () => {
    it('renders the restaurant list page', () => {
      renderRouter('/restaurants');
      screen.getByText('메가반점');
      screen.getByText('메리김밥');
      screen.getByText('혹등고래카레');
    });
  });

  context('when the current path is "/restaurants/1"', () => {
    it('renders the 메가반점 page', () => {
      renderRouter('/restaurants/1');
      screen.getByText('메가반점');
      screen.getByText('차돌짬뽕(9,000)');
    });
  });

  context('when the current path is "/cart"', () => {
    it('renders the cart page', () => {
      renderRouter('/cart');
      screen.getAllByText('장바구니');
      screen.getByText('점심 바구니');
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the order page', () => {
      renderRouter('/order');
      screen.getAllByText('이대로 주문하시겠어요?');
      screen.getByText('결제');
    });
  });

  context('when the current path is "/order-complete"', () => {
    it('renders the order complete page', () => {
      renderRouter('/order-complete');
      screen.getAllByText('주문 완료, 서둘러 배달가겠습니다!');
    });
  });
});
