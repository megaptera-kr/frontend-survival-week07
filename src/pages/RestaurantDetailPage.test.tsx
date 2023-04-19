import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  function renderRestaurantDetailPage() {
    render(
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage />
      </MemoryRouter>,
    );
  }

  it('should renders without crash', () => {
    renderRestaurantDetailPage();
  });
});
