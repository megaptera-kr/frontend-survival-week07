import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import fixture from '../fixture';
import routes from './routes';

const { order } = fixture;
jest.mock('../hook/useFetchOrder', () => () => order);

function renderRouter(path:string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
}

const context = describe;
describe('Routes', () => {
  context('경로가 /이면', () => {
    beforeEach(() => {
      renderRouter('/');
    });

    it('Intro 페이지를 렌더링한다.', () => {
      expect(screen.getByText('원하시는 주문을 터치해주세요')).toBeInTheDocument();
    });
  });

  context('경로가 /order 이면', () => {
    beforeEach(() => {
      renderRouter('/order');
    });

    it('Order 페이지를 렌더링한다.', () => {
      expect(screen.queryByText('원하시는 주문을 터치해주세요')).not.toBeInTheDocument();
    });
  });

  context('경로가 /order/complete?orderId={orderId}이면', () => {
    beforeEach(() => {
      renderRouter(`/order/complete?orderId=${order.id}`);
    });

    it('Result 페이지를 렌더링한다.', () => {
      expect(screen.getByText('주문이 완료되었습니다!')).toBeInTheDocument();
    });
  });
});
