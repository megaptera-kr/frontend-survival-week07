import { render, screen, fireEvent } from '@testing-library/react';

import useCartStore from '../hooks/useCartStore';
import CartItem from './CartItem';

import CartItemModel from '../models/CartItemModel';

const context = describe;

jest.mock('../hooks/useCartStore');

describe('CartItem', () => {
  const obj = {
    menuId: 1,
    menuName: '김밥',
    menuPrice: 3500,
    restaurantId: 1,
    restaurantName: '합정 김밥집',
    categoryName: '한식',
    quantity: 3,
  };
  let mockCartItem: CartItemModel;
  let mockPageId: string;

  beforeEach(() => {
    mockCartItem = new CartItemModel({ ...obj });
    mockPageId = 'cartItems';
  });

  const rendering = (pageId: string) => {
    render(<CartItem item={mockCartItem} pageId={pageId} />);
  };

  context('CartItem 컴포넌트가 마운트되면', () => {
    it('cartItem 정보가 정상적으로 표시된다.', () => {
      rendering(mockPageId);

      screen.getByText('김밥');
      screen.getByText('3개');
      screen.getByText('10,500원');
    });
  });

  context('pageId 가 cartItems 일 때', () => {
    it('"X" 버튼이 표시된다.', () => {
      rendering(mockPageId);
      screen.getByRole('button', { name: 'X' });
    });
  });

  context('pageId 가 cartItems 가 아닐 때', () => {
    it('"X" 버튼이 표시되지 않는다.', () => {
      mockPageId = 'not cartItem';
      rendering(mockPageId);

      const button = screen.queryByRole('button', { name: 'X' });
      expect(button).not.toBeInTheDocument();
    });
  });

  context('X 버튼을 클릭 했을 때', () => {
    it('cartStore 의 deleteItem 메서드가 호출된다.', () => {
      const mockCartStoreInstance = {
        cart: jest.fn(),
        deleteItem: jest.fn(),
      };
      (useCartStore as jest.Mock).mockReturnValueOnce([
        mockCartStoreInstance.cart,
        mockCartStoreInstance,
      ]);

      rendering(mockPageId);

      const button = screen.getByRole('button', { name: 'X' });
      fireEvent.click(button);

      expect(mockCartStoreInstance.deleteItem).toHaveBeenCalled();
    });
  });
});
