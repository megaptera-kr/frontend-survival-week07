import { render, screen } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurant', () => {
  it('renders Restaurants information', () => {
    render(<Restaurants restaurants={restaurants} />);

    screen.getByText(/메가반점/);
    screen.getByText(/고래/);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
    screen.getByText(/3,000/);
  });
});
