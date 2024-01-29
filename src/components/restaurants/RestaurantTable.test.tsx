import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import restaurants from '../../../fixtures/restaurants';

describe('RestaurantTable', () => {
  it('render RestaurantTable', () => {
    render(<RestaurantTable restaurants={restaurants} />);
    screen.getByText(/혹등고래카레/);
    screen.getByText(/메가반점/);
  });
});
