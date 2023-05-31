import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import extractCategories from '../../utils/extractCategories';
import filterRestaurants from '../../utils/filterRestaurants';

import useFetchRestaurants from '../../hooks/useFetchRestaurants';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const categories = extractCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div>
      <SearchBar
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
