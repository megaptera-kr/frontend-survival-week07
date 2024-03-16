import { render, screen } from '@testing-library/react';

import CartItems from './CartItems';

import CartItemModel from '../models/CartItemModel';

import CartItemType from '../types/CartItemType';
import fixtures from '../../fixtures';

const context = describe;

describe('CartItems', () => {
  let mockCartItems: CartItemModel[];
  let mockPageId: string;

  beforeEach(() => {
    mockCartItems = [];
    mockPageId = 'order-detail';
    jest.clearAllMocks();
  });

  const rendering = (cartItems: CartItemModel[], pageId: string) => {
    render(<CartItems cartItems={cartItems} pageId={pageId} />);
  };

  context('cartItems is not exists and pageId is order-detail', () => {
    it('"선택한 메뉴가 없습니다" 문구가 화면에 표시된다', () => {
      rendering(mockCartItems, mockPageId);

      screen.getByText(/^선택한 메뉴가 없습니다$/);
    });
  });

  context('cartItems is not exists and pageId is not order-detail', () => {
    it('"선택한 메뉴가 없습니다" 문구가 화면에 표시된다', () => {
      mockPageId = 'not order-detail';
      rendering(mockCartItems, mockPageId);

      screen.getByText(/^주문 메뉴가 없습니다$/);
    });
  });

  context('cartItems is exists and pageId not order-detail', () => {
    it('메뉴명 수량 가격 정보가 화면에 표시된다.', () => {
      mockCartItems = fixtures.cartItems.map(
        (cartItem: CartItemType) => new CartItemModel({ ...cartItem }),
      );
      mockPageId = 'not order-detail';
      rendering(mockCartItems, mockPageId);

      screen.getByText('김밥');
      screen.getByText(/3개/);
      screen.getByText(/10,500원/);
    });
  });

  context('cartItems is exists and pageId is order-detail', () => {
    it('메뉴명 수량 가격 정보가 화면에 표시된다.', () => {
      mockCartItems = fixtures.cartItems.map(
        (cartItem: CartItemType) => new CartItemModel({ ...cartItem }),
      );
      mockPageId = 'not order-detail';
      rendering(mockCartItems, mockPageId);

      screen.getByText('김밥');
      screen.getByText(/3개/);
      screen.getByText(/10,500원/);
    });
  });
});
