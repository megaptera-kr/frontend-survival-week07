import { fireEvent, render, screen } from '@testing-library/react';
import FilterableRestaurantsTable from '.';
import fixture from '../../fixture';

// TODO: MSW 테스트 완료하기
const { restaurants } = fixture;
jest.mock('../../hook/useFetchRestaurants', () => () => restaurants);

const context = describe;
describe('FilterableRestaurantsTable 컴포넌트', () => {
  context('데이터 응답에 성공하여 올바르게 렌더링 된다면', () => {
    beforeEach(() => {
      render(<FilterableRestaurantsTable />);
    });

    it('식당 리스트를 렌더링한다.', () => {
      const restaurantRows = screen.getAllByRole('row');
      expect(restaurantRows).toHaveLength(restaurants.length);
    });
  });

  context('검색어에 "메"라고 입력하면', () => {
    beforeEach(() => {
      render(<FilterableRestaurantsTable />);
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메' },
      });
    });

    it('식당 이름에 "메"를 포함하는 식당이름만 렌더링된다.', () => {
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      expect(screen.queryByText(/데브부엌/)).not.toBeInTheDocument();
    });
  });

  context('한식 카테고리를 선택하면', () => {
    beforeEach(() => {
      render(<FilterableRestaurantsTable />);
      fireEvent.click(screen.getByText('한식'));
    });

    it('카테고리가 한식인 식당만 렌더링된다.', () => {
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      expect(screen.getByText(/데브부엌/)).toBeInTheDocument();
      expect(screen.queryByText(/메가반점/)).not.toBeInTheDocument();
    });
  });

  context('검색어가 "메"라고 입력하고 한식 카테고리를 선택하면', () => {
    beforeEach(() => {
      render(<FilterableRestaurantsTable />);
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메' },
      });
      fireEvent.click(screen.getByText('한식'));
    });

    it('카테고리가 한식이고 식당이름에 "메"를 포함하는 식당만 렌더링한다.', () => {
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      expect(screen.queryByText(/메가반점/)).not.toBeInTheDocument();
      expect(screen.queryByText(/데브부엌/)).not.toBeInTheDocument();
    });
  });
});
