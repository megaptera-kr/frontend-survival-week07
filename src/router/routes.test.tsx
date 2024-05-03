import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import routes from './routes';

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
      screen.getByText('원하시는 주문을 터치해주세요');
    });
  });

  context('경로가 /order 이면', () => {
    beforeEach(() => {
      renderRouter('/order');
    });

    it('Order 페이지를 렌더링한다.', () => {
      screen.queryByText('원하시는 주문을 터치해주세요');
    });
  });

  context('경로가 /order/complete이면', () => {
    beforeEach(() => {
      renderRouter('/order/complete');
    });

    it('빈 페이지를 렌더링한다.', () => {
      expect(screen.queryByText('주문이 완료되었습니다!')).not.toBeInTheDocument();
    });
  });

  // TODO: 라우트 테스트 완료하기
  // context('경로가 /order/complete?orderId={orderId}이면', () => {
  //   beforeEach(() => {
  //     renderRouter(`/order/complete?orderId=${123456789}`);
  //   });

  //   it('Result 페이지를 렌더링한다.', () => {
  //     screen.getByText('주문이 완료되었습니다!');
  //   });
  // });
});
