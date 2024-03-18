import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';

import routes from './routes';
import fixtures from '../fixtures';

const mockUseLocationValue = {
  state: {
    orderKindType: '매장 주문',
    orderId: '123',
  },
};

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: jest.fn().mockImplementation(() => mockUseLocationValue),
}));

jest.mock('./hooks/useFetchCategories');

jest.mock('./hooks/useFetchRestaurants');

const context = describe;

describe('routes', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  context('when routes to /', () => {
    it('초기화면이 렌더링 된다.', () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      screen.getByText('메가테라 푸드코트 키오스크');
      screen.getByText('원하시는 주문을 터치해주세요');
      screen.getByRole('button', { name: '매장 주문' });
      screen.getByRole('button', { name: '전체 포장' });

      expect(screen.queryByText('검색')).toBeNull();
      expect(screen.queryByText('주문하기')).toBeNull();
    });
  });

  context('when routes to /order', () => {
    it('OrderPage 의 구성 요소가 정상적으로 보인다.', () => {
      const router = createMemoryRouter(routes, {
        initialEntries: ['/order'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      screen.queryByText('검색');
      screen.queryByText('식당 이름을 입력해주세요');
      screen.getByRole('button', { name: '전체' });
      screen.getByRole('button', { name: '중식' });
      screen.getByRole('button', { name: '한식' });
      screen.getByRole('button', { name: '일식' });
      screen.getByRole('button', { name: '뒤로가기' });
      screen.getByRole('button', { name: '전체취소' });
      screen.getByRole('button', { name: '주문하기' });

      const { restaurants } = fixtures;
      const restaurant = restaurants[0];
      screen.getByText(restaurant.name);
    });
  });

  context('when routes to /order/complete', () => {
    it('"주문 ID를 찾을 수 없습니다" 문구가 화면에 표시된다. ', () => {
      mockUseLocationValue.state.orderId = '';

      const router = createMemoryRouter(routes, {
        initialEntries: ['/order/complete'],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      screen.getByText('주문 ID를 찾을 수 없습니다');
    });
  });

  context('when routes to /order/complete?orderId=123', () => {
    it('주문번호가 정상적으로 표시된다.', () => {
      mockUseLocationValue.state.orderId = '1234';

      const router = createMemoryRouter(routes, {
        initialEntries: [
          `/order/complete?orderId=${mockUseLocationValue.state.orderId}`,
        ],
        initialIndex: 0,
      });

      render(<RouterProvider router={router} />);

      screen.queryByText(mockUseLocationValue.state.orderId);
    });
  });
});
