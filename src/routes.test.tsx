import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes', () => {
  const renderRouter = (path: string) => {
    const router = createMemoryRouter(routes, { initialEntries: [path] });

    render(<RouterProvider router={router} />);
  };

  context('현재 경로가 "/"일 경우', () => {
    it('"홈"페이지를 렌더링한다.', () => {
      renderRouter('/');

      screen.getByText('어서오세요, 메가의 민족입니다');
    });
  });

  context('현재 경로가 "/restaurants"일 경우', () => {
    it('레스토랑 목록 페이지를 렌더링한다.', () => {
      renderRouter('/restaurants');

      screen.getByText('메가반점');
      screen.getByText('메리김밥');
      screen.getByText('혹등고래카레');
    });
  });

  context('현재 경로가 "/restaurants/1"일 경우', () => {
    it('메가반점 페이지를 렌더링한다.', () => {
      renderRouter('/restaurants/1');

      screen.getByText('메가반점');
      screen.getByText('차돌짬뽕(9,000)');
    });
  });

  context('현재 경로가 "/cart"일 경우', () => {
    it('장바구니 페이지를 렌더링한다.', () => {
      renderRouter('/cart');

      screen.getAllByText('장바구니');
      screen.getByText('점심 바구니');
    });
  });

  context('현재 경로가 "/order"일 경우', () => {
    it('주문 페이지를 렌더링한다.', () => {
      renderRouter('/order');

      screen.getAllByText('이대로 주문하시겠어요?');
      screen.getByText('결제');
    });
  });

  context('현재 경로가 "/order-complete"일 경우', () => {
    it('결재 완료 페이지를 렌더링한다.', () => {
      renderRouter('/order-complete');

      screen.getAllByText('주문 완료, 서둘러 배달가겠습니다!');
    });
  });
});
