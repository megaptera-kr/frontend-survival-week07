import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

jest.mock('../hooks/useFetchRestaurants');

test('RestaurantTable', () => {
  const mockCategoryName = '전체';
  const mockRestaurantName = '';

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
