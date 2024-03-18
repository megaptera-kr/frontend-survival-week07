import { render, screen } from '@testing-library/react';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import RestaurantTable from './RestaurantTable';

jest.mock('../hooks/useFetchRestaurants');

const context = describe;

describe('RestaurantTable', () => {
  const mockCategoryName = '전체';
  const mockRestaurantName = '';

  context('검색 결과로 레스토랑 목록이 존재할 때', () => {
    it('레스토랑 목록이 정상적으로 표시된다.', () => {
      render(
        <RestaurantTable
          categoryName={mockCategoryName}
          restaurantName={mockRestaurantName}
        />,
      );

      screen.getByText('레스토랑');
      screen.getByText('메뉴');
      screen.getByText('메가반점');
    });
  });

  context('검색 결과로 레스토랑 목록이 존재하지 않을 때', () => {
    it('검색 결과가 없습니다 문구가 화면에 표시된다.', () => {
      (useFetchRestaurants as jest.Mock).mockReturnValue({ restaurants: [] });
      render(
        <RestaurantTable
          categoryName={mockCategoryName}
          restaurantName={mockRestaurantName}
        />,
      );

      screen.getByText('검색 결과가 없습니다');
    });
  });
});
