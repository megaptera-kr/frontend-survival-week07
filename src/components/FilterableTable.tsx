import { useState } from 'react';
import SearchBar from './SearchBar';
import Table from './Table';
import filterRestaurants from '../util/filterRestaurants';
import useFetchReataurants from '../hooks/useFetchReataurants';
import extractCategories from '../util/extractCategories';

export default function FilterableTable() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const restaurants = useFetchReataurants();
  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />
      <Table
        restaurants={filteredRestaurants}
      />
    </>
  );
}
