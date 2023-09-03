import { useState } from 'react';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import { Restaurant } from '../types/restaurants';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredRestaurants = restaurants.filter((restaurant) => (
    restaurant.name.includes(searchKeyword.trim())
  ));

  return (
    <div>
      <SearchBar
        value={searchKeyword}
        setValue={setSearchKeyword}
      />
      <RestaurantsTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}
