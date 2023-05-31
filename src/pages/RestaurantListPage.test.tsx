import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import RestaurantListPage from './RestaurantListPage';

describe('RestaurantListPage', () => {
  function renderWithRouter() {
    render(
      <MemoryRouter initialEntries={['/restaurants']}>
        <RestaurantListPage />
      </MemoryRouter>,
    );
  }

  it('should renders without crash', () => {
    renderWithRouter();
  });
});
