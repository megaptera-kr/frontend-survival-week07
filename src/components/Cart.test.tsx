import {
  render, screen, renderHook, act,
} from '@testing-library/react';
import Cart from './Cart';
import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('Cart ', () => {
  const { result } = renderHook(() => useCartStore());
  const cartStore = result.current[1];
  function renderCart() {
    render(<Cart />);
  }

  beforeEach(() => {
    act(() => {
      cartStore.reset();
    });
  });

  context('when add cart menu', () => {
    it('add item test', async () => {
      renderCart();

      act(() => {
        cartStore.addItem({ id: '1', name: '짜장면', price: 1_000 });
      });

      expect(screen.getByText(/주문내역 1개/)).toBeInTheDocument();
      expect(screen.getByText(/총 결제 예상금액 1,000원/)).toBeInTheDocument();
      expect(screen.getByText(/짜장면 1,000원/)).toBeInTheDocument();
    });
  });

  context('when remove cart menu', () => {
    it('remove add after item"', async () => {
      renderCart();

      act(() => {
        cartStore.addItem({ id: '1', name: '짜장면', price: 1_000 });
      });

      const text = screen.getByText(/짜장면 1,000원/);

      expect(text).toBeInTheDocument();

      act(() => {
        cartStore.removeIndexItem(0);
      });

      expect(text).not.toBeInTheDocument();
    });
  });
});
