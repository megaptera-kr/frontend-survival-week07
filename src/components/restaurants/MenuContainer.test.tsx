import {
  act, render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import useRestaurantStore from '../../hooks/useRestaurantStore';
import MenuContainer from './MenuContainer';

const context = describe;

describe('MenuContainer', () => {
  beforeEach(() => {
    container.clearInstances();

    const { result } = renderHook(() => useRestaurantStore());
    renderHook(() => act(() => {
      result.current[1].fetchRestaurants();
    }));
  });

  function renderMenuContainer() {
    render(<MenuContainer />);
  }
  context('데이터 불러오기 전', () => {
    it('"메뉴가 준비중 입니다."가 렌더링 된다.', () => {
      renderMenuContainer();

      expect(screen.getByText(/메뉴가 준비중 입니다./)).toBeInTheDocument();
    });
  });
  context('데이터 불러온 후', () => {
    it('"메뉴가 준비중 입니다."가 렌더링 된다.', async () => {
      renderMenuContainer();

      await waitFor(() => {
        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      });
    });
  });
});
