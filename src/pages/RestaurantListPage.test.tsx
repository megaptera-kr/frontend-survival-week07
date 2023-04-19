import { render, screen } from '@testing-library/react';

import RestaurantListPage from './RestaurantListPage';

describe('RestaurantListPage', () => {
  it('should renders a page title', () => {
    render(<RestaurantListPage />);

    expect(screen.getByText(/식당 목록/)).toBeInTheDocument();
  });
});
