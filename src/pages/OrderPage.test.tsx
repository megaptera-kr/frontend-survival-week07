import { render, screen } from '@testing-library/react';

import { useLocation, useNavigate } from 'react-router';
import useCartStore from '../hooks/useCartStore';

import OrderPage from './OrderPage';
import CartModel from '../models/CartModel';

const context = describe;

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));
jest.mock('../hooks/useCartStore');

describe('OrderPage', () => {
  let mockUseLocation = {
    state: {
      orderKindType: '',
    },
  };
  const mockUseNavigate = jest.fn();
  const mockCartStore = {
    cart: jest.fn(),
    setOrderKind: jest.fn(),
    clearItems: jest.fn(),
  };

  beforeEach(() => {
    mockUseLocation = {
      state: {
        orderKindType: '매장 주문',
      },
    };

    jest.clearAllMocks();
  });

  context('orderKindType 이 "매장 주문" 또는 "전체 포장"이 아닌 경우', () => {
    it('navigate 함수가 / 값으로 호출된다.', () => {
      mockUseLocation.state.orderKindType = '';
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);

      render(<OrderPage />);

      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
  });

  context('orderKindType 이 "매장 주문" 이거나 "전체 포장"인 경우', () => {
    it('navigate 함수가 호출되지 않고, cartStore 의 setOrderKind 함수가 호출된다.', () => {
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);
      (useCartStore as jest.Mock).mockReturnValue([
        { cart: new CartModel() },
        mockCartStore,
      ]);

      render(<OrderPage />);
      expect(mockCartStore.setOrderKind).toHaveBeenCalled();
    });
  });

  context('orderKindType 값이 정상적인 경우 "매장 주문" 인 경우', () => {
    it('[매장 주문] 주문입니다 가 화면에 표시된다.', () => {
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);
      render(<OrderPage />);

      screen.getByText('[매장 주문] 주문입니다');
    });
  });

  context('orderKindType 값이 정상적인 경우 "전체 포장" 인 경우', () => {
    it('[전체 포장] 주문입니다 가 화면에 표시된다.', () => {
      mockUseLocation.state.orderKindType = '전체 포장';
      (useLocation as jest.Mock).mockReturnValue(mockUseLocation);
      (useNavigate as jest.Mock).mockReturnValue(mockUseNavigate);
      render(<OrderPage />);

      screen.getByText('[전체 포장] 주문입니다');
    });
  });
});
