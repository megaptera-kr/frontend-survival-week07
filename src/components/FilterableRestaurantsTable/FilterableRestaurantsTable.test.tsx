import { render, screen } from '@testing-library/react';
import FilterableRestaurantsTable from '.';
import fixture from '../../fixture';

const { restaurants } = fixture;
jest.mock('../../hook/useFetchRestaurants', () => () => restaurants);

const context = describe;
describe('FilterableRestaurantsTable 컴포넌트', () => {
  beforeEach(() => {
    render(<FilterableRestaurantsTable />);
  });

  context('데이터 응답에 성공하여 올바르게 렌더링 된다면', () => {
    it('식당 리스트를 렌더링한다.', () => {
      const restaurantRows = screen.getAllByRole('row');
      expect(restaurantRows).toHaveLength(restaurants.length);
    });
  });

  // context('검색어에 "메"라고 입력하면', () => {
  //   it('식당 이름에 "메"를 포함하는 식당이름만 렌더링된다.', () => {

  //   });
  // });
});
