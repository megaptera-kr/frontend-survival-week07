import {
  act, fireEvent, render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import fixtures from '../../../fixtures';
import useCartStore from '../../hooks/useCartStore';
import CartContainer from './CartContainer';

const context = describe;

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));
describe('CartContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    container.clearInstances();
  });

  function renderCartContainer() {
    render(<CartContainer />);
  }
  context('카트에 추가된 메뉴가 없을 때', () => {
    it('주문내역 0개, 총 결제 예상금액 0원이 렌더링 된다.', () => {
      renderCartContainer();

      expect(screen.getByText(/주문 내역/)).toBeInTheDocument();
      expect(screen.getByText(/총 결제 예상금액/)).toBeInTheDocument();
    });
  });

  context('선택된 아이템 2개가 있고 사용자가 취소 버튼을 클릭하면', () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCartStore());
      renderHook(() => result.current[1].addOrderMenu(fixtures.foods[0]));
      renderHook(() => result.current[1].addOrderMenu(fixtures.foods[0]));
    });
    it('선택된 메뉴가 취소되고 메뉴가 사라진다.', async () => {
      renderCartContainer();
      const cancelButton = screen.getByRole('button', { name: '전체취소' });

      act(() => {
        fireEvent.click(cancelButton);
      });

      await waitFor(() => {
        expect(screen.queryByText(/짜장면/)).not.toBeInTheDocument();
      });
    });
  });

  context('선택된 아이템 2개가 있고 사용자가 취소 버튼을 클릭하면', () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCartStore());
      renderHook(() => result.current[1].addOrderMenu(fixtures.foods[0]));
      renderHook(() => result.current[1].addOrderMenu(fixtures.foods[0]));
    });
    it('선택된 메뉴가 주문되고 메뉴가 사라진다.', async () => {
      renderCartContainer();
      const orderButton = screen.getByRole('button', { name: '주문하기' });

      act(() => {
        fireEvent.click(orderButton);
      });

      await waitFor(() => {
        expect(screen.queryByText(/짜장면/)).not.toBeInTheDocument();
      });
    });
  });
});
