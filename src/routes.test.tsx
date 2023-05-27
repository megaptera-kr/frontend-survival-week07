import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes ', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [`${path}`] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      // Text Check
      expect(screen.getByText(/원하시는 주문을 터치해주세요/)).toBeInTheDocument();

      // Button Check
      expect(screen.getByRole('button', { name: '매장 주문' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '전체 포장' })).toBeInTheDocument();
    });
  });

  context('when the current path is "/order"', () => {
    it('renders the order page', async () => {
      renderRouter('/order');

      await waitFor(() => {
        // Text Check
        expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/식당 이름을 입력해주세요/)).toBeInTheDocument();

        // Button Check
        expect(screen.getByRole('button', { name: '취소' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
      });
    });
  });

  context('when the current path is "/complete"', () => {
    it('renders the order page', async () => {
      renderRouter('/order/complete');

      await waitFor(() => {
        // Text Check
        expect(screen.getByText(/주문이 완료되었습니다!/)).toBeInTheDocument();
        expect(screen.getByText(/주문목록/)).toBeInTheDocument();

        // list check
        expect(screen.getByText(/짜장면/));
        expect(screen.getByText(/짬뽕/));

        // footer check
        expect(screen.getByText(/총 가격 2,000원/));
        expect(screen.getByRole('button', { name: '메인화면으로 돌아가기' }));
      });
    });
  });
});
