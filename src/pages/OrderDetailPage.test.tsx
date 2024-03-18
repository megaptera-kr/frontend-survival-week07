import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router';

import useReadOrder from '../hooks/useReadOrder';

import OrderDetailPage from './OrderDetailPage';

import ReceiptModel from '../models/ReceiptModel';
import { ORDER_TYPE_PACKAGE } from '../const/ConstOrder';
import CartItemModel from '../models/CartItemModel';
import fixtures from '../../fixtures';

const context = describe;

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));
jest.mock('../hooks/useReadOrder');

describe('OrderDetailPage', () => {
  const mockReceipt = new ReceiptModel({
    id: 'receiptId9999',
    orderKind: ORDER_TYPE_PACKAGE,
    totalPrice: 9999,
    status: '주문완료',
    menuItems: fixtures.cartItems.map((item) => new CartItemModel({ ...item })),
    createAt: new Date(),
    updateAt: new Date(),
  });

  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useLocation as jest.Mock).mockClear();
    (useNavigate as jest.Mock).mockClear();
    (useReadOrder as jest.Mock).mockClear();
  });

  context('orderId 가 존재하지 않을 때', () => {
    it('주문 ID를 찾을 수 없습니다 문구가 화면에 표시된다.', () => {
      (useLocation as jest.Mock).mockReturnValue({ state: { orderId: '' } });

      render(<OrderDetailPage />);

      screen.getByText('주문 ID를 찾을 수 없습니다');
    });
  });

  context('receipt 가 존재하지 않을 때', () => {
    it('Loading... 가 화면에 표시된다.', () => {
      (useLocation as jest.Mock).mockReturnValue({
        state: { orderId: mockReceipt.id },
      });
      (useReadOrder as jest.Mock).mockReturnValueOnce({ receipt: null });

      render(<OrderDetailPage />);

      screen.getByText('Loading...');
    });
  });

  context('주문이 완료되었을 때', () => {
    it('Order 상세정보가 화면에 표시된다.', () => {
      (useLocation as jest.Mock).mockReturnValue({
        state: { orderId: mockReceipt.id },
      });
      (useReadOrder as jest.Mock).mockReturnValueOnce({ receipt: mockReceipt });

      render(<OrderDetailPage />);

      screen.getByText('주문이 완료되었습니다!');
      screen.getByText('주문번호');
      screen.getByText(mockReceipt.id);
      screen.getByText(/총가격:/);
      screen.getByRole('button', { name: '메인화면으로 돌아가기' });
    });
  });

  context('메인화면으로 돌아가기 버튼을 클릭했을 때', () => {
    it('', () => {
      (useLocation as jest.Mock).mockReturnValue({
        state: { orderId: mockReceipt.id },
      });
      (useReadOrder as jest.Mock).mockReturnValueOnce({ receipt: mockReceipt });

      (useNavigate as jest.Mock).mockReturnValueOnce(mockNavigate);

      render(<OrderDetailPage />);

      const button = screen.getByRole('button', {
        name: '메인화면으로 돌아가기',
      });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
