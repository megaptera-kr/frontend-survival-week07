import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';

import FilterableRestaurantTable from './FilterableRestaurantTable';

const context = describe;

describe('<FilterableRestaurantTable />', () => {
  context('fetch restaurants data', () => {
    it('render restaurant table', () => {
      render(<FilterableRestaurantTable
        restaurants={fixtures.restaurants}
        loading={false}
        error={false}
      />);

      screen.getByText(/메가반점/);
    });
  });

  context('when loading', () => {
    render(<FilterableRestaurantTable
      restaurants={[]}
      error={false}
      loading
    />);

    screen.getByText(/Loading../);
  });

  context('when error occurs', () => {
    render(<FilterableRestaurantTable
      restaurants={[]}
      loading={false}
      error
    />);

    screen.getByText(/불러오기 실패/);
  });
});
