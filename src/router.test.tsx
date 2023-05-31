import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { router } from './router/router';

const context = describe;

interface Location {
  pathname: string;
  state: { id: number };
}
describe('router', () => {
  const renderRouter = (paths: string[] | Location[]) => {
    const routers = createMemoryRouter(router, { initialEntries: paths });
    render(<RouterProvider router={routers} />);
  };

  context('when the current path is "/" ', () => {
    it('render the home page', () => {
      // Given , when
      renderRouter(['/']);

      // then
      screen.getByText(/어서오세요, 메가의 민족입니다/);
    });
  });

  context('when the current path is "/list"', () => {
    it('render the restaurant list page', () => {
      // Given , when
      renderRouter(['/list']);

      // then
      screen.getByRole('heading', { name: '식당 목록' });
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
      screen.getByText(/혹등고래카레/);
    });
  });

  context('when the current path is "/detail"', () => {
    it('render the restaurant detail page', () => {
      // Given , when
      renderRouter(['/detail']);

      // then
      screen.getByText(/식당 이름/);
      screen.getByText(/종류/);
      screen.getByText(/메뉴/);
    });
    it('location state id 값이 1 일 경우 render the restaurant detail page', () => {
      // Given , when
      renderRouter([{ pathname: '/detail', state: { id: 1 } }]);

      // then
      screen.getByText(/메가반점/);
    });
    it('location state id 값이 2 일 경우 render the restaurant detail page', () => {
      // Given , when
      renderRouter([{ pathname: '/detail', state: { id: 2 } }]);

      // then
      screen.getByText(/메리김밥/);
    });
    it('location state id 값이 3 일 경우 render the restaurant detail page', () => {
      // Given , when
      renderRouter([{ pathname: '/detail', state: { id: 3 } }]);

      // then
      screen.getByText(/혹등고래카레/);
    });
  });

  context('when the current path is "/cart"', () => {
    it('render the cart page', () => {
      // Given , when
      renderRouter(['/cart']);

      // then
      screen.getByRole('heading', { name: '장바구니' });
      screen.getByRole('heading', { name: '점심 바구니' });
      screen.getByText(/합계/);
    });
  });

  context('when the current path is "/order"', () => {
    it('render the order page', () => {
      // Given , when
      renderRouter(['/order']);

      // then
      screen.getByRole('heading', { name: '이대로 주문하시겠어요?' });
      screen.getByText(/결제/);
    });
  });

  context('when the current path is "/complete"', () => {
    it('render the complete page', () => {
      // Given , when
      renderRouter(['/complete']);

      // then
      screen.getByRole('heading', {
        name: '주문 완료, 서둘러 배달가겠습니다!',
      });
    });
  });
});
