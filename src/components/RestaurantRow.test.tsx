import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import restaurants from '../../fixtures/restaurants';

describe('RestaurantRow', () => {
  it('renders Restaurant information', () => {
    render(<RestaurantRow restaurant={restaurants[0]} />);

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });
});
