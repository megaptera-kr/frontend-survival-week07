import { render, screen } from '@testing-library/react';

import { withRoutes } from './tests/helper';
import PATH from './constants/path';

const context = describe;

describe('Router', () => {
  context('when the current path is "/"', () => {
    it('renders the Home Page', () => {
      render(withRoutes());

      expect(screen.getByRole('heading', { level: 1, name: '어서오세요, 메가의 민족입니다' })).toBeInTheDocument();
    });
  });

  context('when the current path is "/restaurants"', () => {
    it('renders the Restaurants Page', () => {
      render(withRoutes(PATH.restaurants));

      expect(screen.getByRole('heading', { level: 1, name: '식당 목록' })).toBeInTheDocument();
    });
  });

  context('when the current path is "/restaurants/:id"', () => {
    it('renders the Restaurants Detail Page', () => {
      render(withRoutes(`${PATH.restaurants}/1`));

      expect(screen.getByRole('heading', { level: 1, name: '식당 상세' })).toBeInTheDocument();
    });
  });

  context('when the current path is "/cart"', () => {
    it('renders the Cart Page', () => {
      render(withRoutes(PATH.cart));

      expect(screen.getByRole('heading', { level: 1, name: '장바구니' })).toBeInTheDocument();
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the Order Page', () => {
      render(withRoutes(PATH.order));

      expect(screen.getByRole('heading', { level: 1, name: '이대로 주문하시겠어요?' })).toBeInTheDocument();
    });
  });

  context('when the current path is "/order/completed"', () => {
    it('renders the Order Completed Page', () => {
      render(withRoutes(PATH.orderCompleted));

      expect(screen.getByRole('heading', { level: 1, name: '주문 완료, 서둘러 배달가겠습니다!' })).toBeInTheDocument();
    });
  });

  context('when not the specified path"', () => {
    it('renders the Not Found Page', () => {
      render(withRoutes('/some'));

      expect(screen.getByRole('heading', { level: 1, name: 'Not Found Page' })).toBeInTheDocument();
    });
  });
});
