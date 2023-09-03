import { screen, render } from '@testing-library/react';

import Basket from './Basket';

import { Menu } from '../types/restaurants';

const state: {
  basket: Menu[]
  totalCount: number
  totalPrice: number
} = {
  basket: [],
  totalCount: 0,
  totalPrice: 0,
};

jest.mock('../hooks/useBasketStore', () => () => [state, {
  removeMenu: jest.fn(),
}]);

const context = describe;

describe('Basket', () => {
  context('장바구니에 아무것도 없을 때', () => {
    it('비어있는 장바구니를 렌더링 한다.', () => {
      render(<Basket />);

      screen.getByText(/주문내역 0개/);
      screen.getByText(/예상금액 0원/);
    });
  });

  context('장바구니에 메뉴가 있을 때', () => {
    beforeEach(() => {
      state.basket = [
        { id: '1', name: '짜장면', price: 7000 },
        { id: '2', name: '짬뽕', price: 7000 },
      ];
      state.totalCount = 2;
      state.totalPrice = 14000;
    });

    it('주문내역에 담은 음식의 개수와 총 결제 예상금액을 보여준다', () => {
      render(<Basket />);

      screen.getByText(/주문내역 2개/);
      screen.getByText(/예상금액 14,000원/);
    });

    it('장바구니에 담긴 메뉴를 렌더링 한다.', () => {
      render(<Basket />);

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });
});
