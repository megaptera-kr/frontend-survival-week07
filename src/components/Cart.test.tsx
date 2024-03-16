import { fireEvent, render, screen } from '@testing-library/react';

import { useNavigate } from 'react-router';

import Cart from './Cart';
import useCartStore from '../hooks/useCartStore';
import CartModel from '../models/CartModel';
import useCreateOrder from '../hooks/useCreateOrder';

const context = describe;

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));
jest.mock('../hooks/useCartStore');
jest.mock('../hooks/useCreateOrder');

describe('Cart', () => {
  const mockNavigate = jest.fn();
  const mockCartStore = {
    cart: jest.fn(),
    setOrderKind: jest.fn(),
    clearItems: jest.fn(),
  };
  const mockHandleOrderCreate = jest.fn();

  const rendering = () => render(<Cart />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('Cart 컴포넌트가 마운트 되면', () => {
    it('주문내역, 총 결제 예상 금액, 뒤로가기, 전체 취소, 주문하기 버튼이 표시된다.', () => {
      rendering();

      screen.getByText(/주문내역/);
      screen.getByText(/총 결제 예상금액/);
      screen.getByRole('button', { name: '뒤로가기' });
      screen.getByRole('button', { name: '전체취소' });
      screen.getByRole('button', { name: '주문하기' });
    });
  });

  context('뒤로가기 버튼이 클릭되면', () => {
    it('navigate 함수, cartStore 의 setOrderKind 함수가 호출된다.', () => {
      (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate);
      (useCartStore as jest.Mock).mockReturnValueOnce([
        { cart: new CartModel() },
        mockCartStore,
      ]);
      rendering();

      const 뒤로가기 = screen.getByRole('button', { name: '뒤로가기' });
      fireEvent.click(뒤로가기);

      expect(mockNavigate).toHaveBeenCalled();
      expect(mockCartStore.setOrderKind).toHaveBeenCalled();
    });
  });

  context('전체취소 버튼이 클릭되면', () => {
    it('navigate 함수는 호출되지 않고, cartStore 의 clearItems 함수가 호출된다.', () => {
      (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate);
      (useCartStore as jest.Mock).mockReturnValueOnce([
        { cart: new CartModel() },
        mockCartStore,
      ]);
      rendering();

      const 전체취소 = screen.getByRole('button', { name: '전체취소' });
      fireEvent.click(전체취소);

      expect(mockNavigate).not.toHaveBeenCalled();
      expect(mockCartStore.setOrderKind).not.toHaveBeenCalled();
      expect(mockCartStore.clearItems).toHaveBeenCalled();
    });
  });

  context('주문하기 버튼이 클릭되면', () => {
    it('handleOrderCreate 함수가 호출된다.', () => {
      (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate);
      (useCartStore as jest.Mock).mockReturnValueOnce([
        { cart: new CartModel() },
        mockCartStore,
      ]);
      (useCreateOrder as jest.Mock).mockReturnValueOnce({
        handleOrderCreate: mockHandleOrderCreate,
      });
      rendering();

      const 주문하기 = screen.getByRole('button', { name: '주문하기' });
      fireEvent.click(주문하기);

      expect(mockNavigate).not.toHaveBeenCalled();
      expect(mockCartStore.setOrderKind).not.toHaveBeenCalled();
      expect(mockCartStore.clearItems).not.toHaveBeenCalled();
      expect(mockHandleOrderCreate).toHaveBeenCalled();
    });
  });
});
