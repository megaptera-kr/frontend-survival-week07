import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../routes';

const context = describe;

describe('Home', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [`${path}`] });
    render(<RouterProvider router={router} />);
  }
  it('render page', () => {
    renderRouter('/');

    // Text Check
    expect(screen.getByText(/원하시는 주문을 터치해주세요/)).toBeInTheDocument();

    // Button Check
    expect(screen.getByRole('button', { name: '매장 주문' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '전체 포장' })).toBeInTheDocument();
  });

  context('when click 매장 주문 or 전체 포장', () => {
    it('click 매장 주문 버튼 ', async () => {
      renderRouter('/');
      const user = userEvent.setup();

      await user.click(screen.getByRole('button', { name: '매장 주문' }));

      await waitFor(() => {
        expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
        expect(screen.getByText(/주문내역/)).toBeInTheDocument();
        expect(screen.getByText(/총 결제 예상금액/)).toBeInTheDocument();

        expect(screen.getByRole('button', { name: '취소' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
      });
    });
    it('click 전체 포장 버튼 ', async () => {
      renderRouter('/');
      const user = userEvent.setup();

      await user.click(screen.getByRole('button', { name: '전체 포장' }));

      await waitFor(() => {
        expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
        expect(screen.getByText(/주문내역/)).toBeInTheDocument();
        expect(screen.getByText(/총 결제 예상금액/)).toBeInTheDocument();

        expect(screen.getByRole('button', { name: '취소' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
      });
    });
  });
});
