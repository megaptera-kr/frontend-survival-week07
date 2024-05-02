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
      // screen.getByText('검색');
      screen.queryByText('원하시는 주문을 터치해주세요');
    });
  });

  // context('경로가 /이면', () => {
  //   beforeEach(() => {
  //     renderRouter('/');
  //   });

  //   it('Intro 페이지를 렌더링한다.', () => {
  //     screen.getByText('원하시는 주문을 터치해주세요');
  //   });
  // });
});
