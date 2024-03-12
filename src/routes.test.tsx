import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';

const context = describe;

describe('routes', () => {
  context('when routes to /', () => {
    it('초기화면이 렌더링 된다.', async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      await screen.getByText('메가테라 푸드코트 키오스크');
      await screen.getByText('원하시는 주문을 터치해주세요');
      await screen.getByRole('button', {
        name: '매장 주문',
      });
      await screen.getByRole('button', {
        name: '전체 포장',
      });

      expect(await screen.queryByText('검색')).toBeNull();
      expect(await screen.queryByText('주문하기')).toBeNull();
    });
  });

  context('when routes to /order', () => {
    it('검색 입력란과, 카테고리 버튼과, 주문하기/취소 버튼이 보인다.', async () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/order'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      await screen.queryByText('검색');
      await screen.queryByText('식당 이름을 입력해주세요');

      await screen.getByRole('button', { name: '전체' });
      await screen.getByRole('button', { name: '중식' });
      await screen.getByRole('button', { name: '한식' });
      await screen.getByRole('button', { name: '일식' });

      await screen.getByRole('button', { name: '주문하기' });
      await screen.getByRole('button', { name: '취소' });
    });
  });

  context('when routes to /order/complete', () => {
    it('', () => {
      // TODO: ErrorPage
      expect(1).toBe(1);
    });
  });

  context('when routes to /order/complete?123', () => {
    it('', async () => {
      // TODO: How to test the case like this?
      // await screen.queryByText('주문이 완료되었습니다!');
      // await screen.queryByText('주문번호');
      // await screen.queryByText('주문목록');
      // await screen.queryByText('총가격');
      // await screen.queryByText('메인화면으로 돌아가기');
    });
  });
});
