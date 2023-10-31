import { useState } from 'react';
import extractCategories from '../utils/extractCategories';
import SearchBar from './SearchBar';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterRestaurants from '../utils/filterRestaurants';
import RestaurantTable from './RestaurantsTable';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);

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
    </div>
  );
}
