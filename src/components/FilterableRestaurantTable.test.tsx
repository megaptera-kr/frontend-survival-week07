import { render, screen, waitFor } from '@testing-library/react';

import FilterResTaurantTable from './FilterableRestaurantTable';

describe('FilterableRestaurantTable', () => {
  it('renders Restaurants information', async () => {
    render(<FilterResTaurantTable />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/고래/);
      screen.getByText(/짜장면/);
      screen.getByText(/8,000원/);
      screen.getByText(/3,000/);
    });
  });
});
