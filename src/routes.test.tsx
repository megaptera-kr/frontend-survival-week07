import {
  render, screen, waitFor,
} from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { container } from 'tsyringe';
import routes from './routes';

const context = describe;

describe('App', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  function renderRouter(path:string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }
  context('현재 경로가 "/"일 때', () => {
    it('주문 버튼 두 개가 랜더링 된다.', () => {
      renderRouter('/');

      expect(screen.getByText(/매장 주문/)).toBeInTheDocument();
      expect(screen.getByText(/전체 포장/)).toBeInTheDocument();
    });
  });

  context('현재 경로가 "/order"일 때', () => {
    it('메뉴 검색, 필터 버튼, 메뉴 테이블, 주문 내용이 랜더링 된다.', async () => {
      renderRouter('/order');

      expect(screen.getByText('검색')).toBeInTheDocument();
      expect(screen.getByLabelText('검색')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '일식' })).toBeInTheDocument();
      });
    });
  });

  context('현재 경로가 "/order/complete?orderId=12345678910"일 때', () => {
    it('주문번호가 랜더링 된다.', async () => {
      renderRouter('/order/complete?orderId=12345678910');

      await waitFor(() => {
        expect(screen.getByText('12345678910')).toBeInTheDocument();
      });
    });
  });
});
