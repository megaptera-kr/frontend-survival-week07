import { useState } from 'react';

import useFetchRestaurants from '../../hooks/useFetchRestaurants';

import MenuController from './MenuController';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  const [category, setCategory] = useState<string>('전체');
  const [query, setQuery] = useState<string>('');
  const restaurants = useFetchRestaurants();

  const categories = restaurants.reduce(
    (acc: string[], restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category]),
    [],
  );

  const filteredCategories = category === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === category);

  const filteredRestaurant = !query
    ? filteredCategories
    : filteredCategories.filter((restaurant) => restaurant.name.includes(query.trim()));

  return (
    <div>
      <MenuController
        setCategory={setCategory}
        setQuery={setQuery}
        query={query}
        categories={categories}
      />
      <RestaurantTable restaurants={filteredRestaurant} />
    </div>
  );
}
