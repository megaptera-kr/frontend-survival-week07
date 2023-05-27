import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterRestaurants from './FilterRestaurants';
import filterCategories from '../utils/filterCategories';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';

const context = describe;

describe('FilterRestaurants ', () => {
  const restaurants = useFetchRestaurant();
  const categories = filterCategories(restaurants);
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  function renderFilterRestaurants() {
    return render(
      <FilterRestaurants
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />,
    );
  }

  context('when render component', () => {
    it('show label, button text', () => {
      renderFilterRestaurants();

      expect(screen.getByLabelText('검색')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
    });
  });

  context('when write input text', () => {
    it('write any text', async () => {
      renderFilterRestaurants();

      const user = userEvent.setup();

      const input = screen.getByRole<HTMLInputElement>('textbox');
      await user.type(input, 'test');
      expect(input.value).toBe('test');
    });
  });
});
