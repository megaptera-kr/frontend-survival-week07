import { useState } from 'react';

import RestaurantTable from './RestaurantTable';

import filterRestaurants from '../utils/filterRestaurants';
import selectCategories from '../utils/selectCategories';

import useFetchRestaurants from '../hooks/useFetchRestaurants';
import SearchBar from './SearchBar';
import Summary from './Summary';
import Cart from './Cart';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
      <Cart />
    </div>
  );
}
