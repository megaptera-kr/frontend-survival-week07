/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import FilterBox from '../components/filter/FilterBox';
import FilterableRestaurantTable from '../components/restaurants/FilterableRestaurantTable';
import Cart from '../components/cart/Cart';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import extractCategories from '../utils/extractCategories';
import filterRestaurants from '../utils/filterRestaurants';

export default function OrderPage() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const { restaurants, loading, error } = useFetchRestaurants();

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants({
    restaurants,
    filterText,
    filterCategory,
  });

  const filterBoxProps = {
    categories,
    filterText,
    setFilterText,
    setFilterCategory,
  };

  return (
    <div>
      <FilterBox {...filterBoxProps} />
      <FilterableRestaurantTable
        restaurants={filteredRestaurants}
        loading={loading}
        error={error}
      />
      <Cart />
    </div>
  );
}
