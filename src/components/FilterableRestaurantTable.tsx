import { useState } from 'react';

import SearchBar from './SearchBar';
import Restaurants from './Restaurants';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import extractCategories from '../utils/extractCategories';
import filterRestaurants from '../utils/filterRestaurants';

export default function FilterResTaurantTable() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const catagories = extractCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        catagories={catagories}
        setFilterCategory={setFilterCategory}
      />
      <Restaurants restaurants={filteredRestaurants} />
    </div>
  );
}
