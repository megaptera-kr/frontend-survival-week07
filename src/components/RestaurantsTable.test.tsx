import { render, screen } from '@testing-library/react';
import RestaurantTable from './RestaurantsTable';
import fixtures from '../../fixtures';

describe('RestauratnsTable', () => {
  const { restaurants } = fixtures;

  it('renders RestaurantsTable', () => {
    render((
      <RestaurantTable restaurants={restaurants} />
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });
});
