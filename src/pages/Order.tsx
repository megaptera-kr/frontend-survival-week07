import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useFetchRestaurants from '../hooks/useGetRestaurants';
import filterRestaurant from '../utils/filterRestaurants';
import RestaurantTable from '../components/RestaurantTable';
import Cart from '../components/Cart';

import type Restaurant from '../types/Restaurant';

export default function Order() {
  const [filterText, setFilterText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const data = useFetchRestaurants();
  const categoryList = data.reduce((acc:string[], cur:Restaurant) => (
    acc?.includes(cur.category) ? acc : [...acc, cur.category]
  ), ['전체']);

  const filteredData = filterRestaurant(data, { category, filterText });
  return (
    <div>
      <SearchBar
        categoryList={categoryList}
        value={filterText}
        setValue={setFilterText}
        setCategory={setCategory}
      />
      <RestaurantTable filteredData={filteredData} />
      <Cart />
    </div>
  );
}
