import {
  act,
  render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import useRestaurantStore from '../../hooks/useRestaurantStore';
import Categories from './Categories';

const context = describe;

describe('Categories', () => {
  beforeEach(() => {
    container.clearInstances();

    const { result } = renderHook(() => useRestaurantStore());
    renderHook(() => act(() => {
      result.current[1].fetchRestaurants();
    }));
  });

  function renderCategories() {
    render(<Categories />);
  }
  context('데이터 불러오기 전', () => {
    it('"전체"버튼만 렌더링 된다', () => {
      renderCategories();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
    });
  });
  context('데이터 불러온 후', () => {
    it('"전체", "중식", "한식", "일식" 버튼이 렌더링 된다', async () => {
      renderCategories();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByRole('button', { name: '중식' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: '한식' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: '일식' })).toBeInTheDocument();
      });
    });
  });
});
