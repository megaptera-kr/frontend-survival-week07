import {
  render, screen, renderHook, act,
} from '@testing-library/react';
import fixtures from '../../fixtures';
import Cart from './Cart';
import useStore from '../hooks/useStore';
import { addCart } from '../reducers/uiReducer';

describe('Cart', () => {
  test('로컬 스토리지의 장바구니에 데이터가 담겨 있다면 해당 데이터를 그린다', () => {
    render(<Cart />);
    const { result: { current } } = renderHook(() => useStore());

    act(() => {
      fixtures.foods.forEach((menu) => {
        current.dispatch(addCart(menu));
      });
    });

    const [item] = screen.getAllByTestId('CartItem');

    expect(item).toBeInTheDocument();
  });

  test('로컬 스토리지의 장바구니에 담겨져있는 물품들의 가격에 합산이 버튼에 그려진다.', () => {
    render(<Cart />);
    const totalPrice = fixtures.foods.reduce((prev, curr) => prev + curr.price, 0).toLocaleString();

    const element = screen.getByTestId('Payment');

    expect(element).toHaveTextContent(`${totalPrice}`);
  });
});
