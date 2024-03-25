import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import extractCategories from '../../utils/extractCategories';
import filterRestaurants from '../../utils/filterRestaurants';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';

function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  const categories = extractCategories(restaurants);

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}

export default FilterableRestaurantTable;
