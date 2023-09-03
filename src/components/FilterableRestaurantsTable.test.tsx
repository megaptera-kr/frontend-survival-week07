import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';

describe('FilterableRestaurantsTable', () => {
  const { restaurants } = fixtures;

  it('restaurantsTable을 렌더링한다', () => {
    render(<FilterableRestaurantsTable restaurants={restaurants} />);

    screen.getByText(/메가반점/);
    screen.getByText(/메리김밥/);
  });
});
