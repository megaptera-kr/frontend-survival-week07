import { useState } from 'react';
import SearchInput from './SearchInput';
import CategoryButtons from './CategoryButtons';
import filterRestaurants from '../utils/filterRestaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import extractCategories from '../utils/extractCategories';
import RestaurantTable from './RestaurantTable';

function FilterableRestaurant() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();
  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    query, category,
  });

  return (
    <>
      <SearchInput query={query} setQuery={setQuery} label="검색" placeholder='"식당 이름을 검색해주세요"' />
      <CategoryButtons setCategory={setCategory} categories={categories} />
      <RestaurantTable filteredRestaurants={filteredRestaurants} />
    </>
  );
}

export default FilterableRestaurant;
