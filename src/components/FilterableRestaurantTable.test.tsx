import { render } from '@testing-library/react';
import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('FilterableRestaurantTable', () => {
  it('renders FilterableRestaurantTable', () => {
    render((
      <FilterableRestaurantTable />
    ));
  });
});
