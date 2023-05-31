import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes/router';

interface Location {
  pathname: string
  state: { id: number }
}

const context = describe;

describe('App ', () => {
  const renderRouter = (paths: string[] | Location[]) => {
    const router = createMemoryRouter(routes, { initialEntries: paths });

    render((
      <RouterProvider router={router} />
    ));
  };

  context('URL 경로가 /인 경우', () => {
    it('메인 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/']);

      // Then
      screen.getByRole('heading', {
        name: /어서오세요, 메가의 민족입니다/,
      });
    });
  });

  context('URL 경로가 /list인 경우', () => {
    it('식당 목록 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/list']);

      // Then
      screen.getByRole('heading', {
        name: /식당 목록/,
      });
    });
  });

  context('URL 경로가 /detail인 경우', () => {
    it('location state가 없는 경우, 목록의 첫번째 식당이 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/detail']);

      // Then
      screen.getByText(/메가반점/);
    });

    it('location state의 id가 1에 해당하는 식당이 렌더링 되어야 합니다.', () => {
      // Given, When
      const location = { pathname: '/detail', state: { id: 1 } };
      renderRouter([location]);

      // Then
      screen.getByText(/메가반점/);
    });

    it('location state의 id가 2에 해당하는 식당이 렌더링 되어야 합니다.', () => {
      // Given, When
      const location = { pathname: '/detail', state: { id: 2 } };
      renderRouter([location]);

      // Then
      screen.getByText(/메리김밥/);
    });

    it('location state의 id가 3에 해당하는 식당이 렌더링 되어야 합니다.', () => {
      // Given, When
      const location = { pathname: '/detail', state: { id: 3 } };
      renderRouter([location]);

      // Then
      screen.getByText(/혹등고래카레/);
    });
  });

  context('URL 경로가 /cart인 경우', () => {
    it('점심 바구니 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/cart']);

      // Then
      screen.getByRole('heading', {
        name: /점심 바구니/,
      });
    });
  });

  context('URL 경로가 /order인 경우', () => {
    it('결제 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/order']);

      // Then
      screen.getByRole('heading', {
        name: /이대로 주문하시겠어요?/,
      });
    });
  });

  context('URL 경로가 /orderComplete인 경우', () => {
    it('결제 완료 페이지가 렌더링 되어야 합니다.', () => {
      // Given, When
      renderRouter(['/orderComplete']);

      // Then
      screen.getByRole('heading', {
        name: /주문 완료, 서둘러 배달가겠습니다!/,
      });
    });
  });
});
