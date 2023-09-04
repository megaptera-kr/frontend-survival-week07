import { useState } from 'react';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import { Restaurant } from '../types/restaurants';
import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [category, setCategory] = useState('전체');

  const categories = selectCategories({ restaurants });

  const filteredRestaurants = filterRestaurants({
    restaurants,
    searchKeyword,
    category,
  });

  return (
    <div>
      <SearchBar
        value={searchKeyword}
        setValue={setSearchKeyword}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantsTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}
