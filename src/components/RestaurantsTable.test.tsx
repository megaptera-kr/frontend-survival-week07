import { render, screen, waitFor } from '@testing-library/react';
import RestaurantsTable from './RestaurantsTable';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';

const context = describe;

describe('RestaurantsTable ', () => {
  const restaurants = useFetchRestaurant();
  function renderRestaurantsTable() {
    render(<RestaurantsTable restaurants={restaurants} />);
  }
  context('when render component', () => {
    it('show tbody content', async () => {
      renderRestaurantsTable();

      await waitFor(() => {
        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      });
    });
  });
});
