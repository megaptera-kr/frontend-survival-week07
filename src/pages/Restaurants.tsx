import { useState } from 'react';
import useFetchRestaurant from '../hooks/useFetchRestaurant';

import SearchBar from '../components/SearchBar';
import RestaurantTable from '../components/RestaurantTable';
import Cart from '../components/Cart';
import filterRestaurants from '../utils/filterResturants';
import extractCategories from '../utils/extractCategories';

export default function Order() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurant();

  const filteredRestaurants = filterRestaurants(restaurants, { category, query });
  const categories = extractCategories(restaurants);

  return (
    <div>
      <SearchBar
        categories={categories}
        query={query}
        setQuery={setQuery}
        setCategory={setCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
      <Cart />
    </div>
  );
}
