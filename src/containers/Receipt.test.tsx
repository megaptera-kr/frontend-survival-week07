import {
  act, renderHook, screen, waitFor,
} from '@testing-library/react';
import fixtures from '../../fixtures';
import useStore from '../hooks/useStore';
import { renderRouter } from '../App.test';
import { clearReceipt, setReceipt } from '../actions/uiActions';

const context = describe;

describe('Receipt', () => {
  context('전역 스토어에 영수증 데이터가 있으면,', () => {
    beforeEach(() => {
      const { result: { current } } = renderHook(() => useStore());

      act(() => current.dispatch(setReceipt(fixtures.receipt)));
    });

    it('화면에 영수증 아이디를 그린다.', async () => {
      renderRouter('/order/complate');

      await waitFor(() => {
        const element = screen.getByTestId('ReceiptId');

        expect(element.textContent?.includes(fixtures.receipt.id)).toBeTruthy();
      });
    });
  });

  context('전역 스토어에 영수증 데이터가 없다면', () => {
    beforeEach(() => {
      const { result: { current } } = renderHook(() => useStore());
      act(() => current.dispatch(clearReceipt()));
    });
    it('주문 페이지로 보낸다', async () => {
      renderRouter('/order/complate');

      await waitFor(() => {
        expect(screen.getByTestId('OrderPage')).toBeInTheDocument();
      });
    });
  });
});
