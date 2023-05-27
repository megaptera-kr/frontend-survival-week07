import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import {
  act, render, renderHook, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routes from '../routes';
import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('Order ', () => {
  const { result } = renderHook(() => useCartStore());
  const cartStore = result.current[1];
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [`${path}`] });
    render(<RouterProvider router={router} />);
  }

  function resetCart() {
    cartStore.reset();
  }

  beforeEach(() => {
    act(() => {
      resetCart();
    });
  });

  it('when render component', async () => {
    renderRouter('/order');

    await waitFor(() => {
      // Search Filter Field
      expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/식당 이름을 입력해주세요/)).toBeInTheDocument();

      // Category Filter Field
      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();

      // Menu Field
      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
    });
  });

  context('when filter text restaurants', () => {
    it('write filterText "김"', async () => {
      renderRouter('/order');

      await waitFor(async () => {
        const user = userEvent.setup();
        await user.click(screen.getByPlaceholderText(/식당 이름을 입력해주세요/));
        await user.keyboard('김');
      });
    });
  });

  context('when filter category restaurants', () => {
    it('click category by "중식"', async () => {
      renderRouter('/order');

      await waitFor(() => {
        const button = screen.getByRole('button', { name: '중식' });
        userEvent.click(button);

        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      });
    });
  });

  // context('when add cart menu', () => {
  //   it('click 짜장면, 짬뽕 menu"', async () => {
  //     renderRouter('/order');

  //     await waitFor(async () => {
  //       await userEvent.click(screen.getByRole('button', { name: '짜장면(8,000원)' }));
  //       await userEvent.click(screen.getByRole('button', { name: '짬뽕(8,000원)' }));

  //       expect(screen.getByText(/짜장면 8,000원/)).toBeInTheDocument();
  //       expect(screen.getByText(/짬뽕 8,000원/)).toBeInTheDocument();

  //       expect(screen.getByText(/주문내역 2개/)).toBeInTheDocument();
  //       expect(screen.getByText(/총 결제 예상금액 16,000원/)).toBeInTheDocument();
  //     });
  //   });
  // });

  // context('when remove cart menu', () => {
  //   it('remove 짜장면, 짬뽕 menu"', async () => {
  //     renderRouter('/order');

  //     await waitFor(async () => {
  //       await userEvent.click(screen.getByRole('button', { name: '짜장면(8,000원)' }));
  //       await userEvent.click(screen.getByRole('button', { name: '짬뽕(8,000원)' }));

  //       expect(screen.getByText(/짜장면 8,000원/)).toBeInTheDocument();
  //       expect(screen.getByText(/짬뽕 8,000원/)).toBeInTheDocument();

  //       await userEvent.click(screen.getAllByRole('button', { name: 'X' })[1]);
  //       await userEvent.click(screen.getAllByRole('button', { name: 'X' })[0]);

  //       expect(screen.getByText(/주문내역 0개/)).toBeInTheDocument();
  //       expect(screen.getByText(/총 결제 예상금액 0원/)).toBeInTheDocument();
  //     });
  //   });
  // });

  // context('when click 취소 button ', () => {
  //   it('click cancel button"', async () => {
  //     renderRouter('/order');

  //     await waitFor(async () => {
  //       await userEvent.click(screen.getByRole('button', { name: '짜장면(8,000원)' }));
  //       await userEvent.click(screen.getByRole('button', { name: '짬뽕(8,000원)' }));

  //       expect(cartStore.cart).toHaveLength(2);

  //       await userEvent.click(screen.getByRole('button', { name: '취소' }));

  //       expect(screen.getByRole('button', { name: '전체 포장' })).toBeInTheDocument();
  //       expect(cartStore.cart).toHaveLength(0);
  //     });
  //   });
  // });

  // context('when click 주문하기 button', () => {
  //   it('click order button"', async () => {
  //     renderRouter('/order');

  //     await waitFor(async () => {
  //       const button = screen.getByRole('button', { name: '주문하기' });
  //       userEvent.click(button);
  //       await waitFor(() => {
  //         expect(screen.getByText(/주문이 완료되었습니다!/));
  //         expect(screen.getByText(/주문번호/));

  //         expect(screen.getByText(/짜장면 1,000원/));
  //         expect(screen.getByText(/짬뽕 1,000원/));

  //         expect(screen.getByText(/총 가격 2,000원/));

  //         expect(screen.getByRole('button', { name: '메인화면으로 돌아가기' }));
  //       });
  //     });
  //   });
  // });
});
