import {
  screen, renderHook, act, fireEvent, waitFor,
} from '@testing-library/react';
import fixtures from '../../fixtures';
import useStore from '../hooks/useStore';
import { renderRouter } from '../App.test';
import { addCart } from '../actions/uiActions';

const context = describe;

describe('Cart', () => {
  const routerRender = () => renderRouter('/order');

  context('전역 스토어의 장바구니 데이터가 담겨 있다면', () => {
    it('담긴 메뉴를 렌더링한다.', () => {
      routerRender();
      const { result: { current } } = renderHook(() => useStore());

      act(() => {
        fixtures.foods.forEach((menu) => {
          current.dispatch(addCart(menu));
        });
      });

      const [item] = screen.getAllByTestId('CartItem');

      expect(item).toBeInTheDocument();
    });

    it('담긴 메뉴의 개수를 표기한다.', () => {
      routerRender();
      const element = screen.getByTestId('CartCount');

      expect(element).toHaveTextContent(`${fixtures.foods.length}개`);
    });

    it('메뉴의 합산을 화면에 그린다.', () => {
      routerRender();
      const totalPrice = fixtures.foods.reduce((prev, curr) => prev + curr.price, 0).toLocaleString();

      const element = screen.getByTestId('CartPrice');

      expect(element).toHaveTextContent(`${totalPrice}`);
    });
  });

  it('취소 버튼을 누르면 메인 화면으로 돌아간다.', async () => {
    routerRender();

    const cancelBtn = screen.getByTestId('Cancel');

    fireEvent.click(cancelBtn);

    await waitFor(() => {
      expect(screen.getByTestId('HomePage')).toBeInTheDocument();
    });
  });
});
