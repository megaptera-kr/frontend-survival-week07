import { useState } from 'react';
import SearchBar from './SearchBar';
import Table from './Table';
import filterRestaurants from '../util/filterRestaurants';
import useFetchReataurants from '../hooks/useFetchReataurants';
import extractCategories from '../util/extractCategories';

export default function FilterableTable() {
  console.log('홈');
  const restaurants = [
    {
      id: '1',
      category: '중식',
      name: '메가반점',
      menu: [
        {
          id: '1',
          name: '짜장면',
          price: 8000,
        },
        {
          id: '2',
          name: '짬뽕',
          price: 8000,
        },
        {
          id: '3',
          name: '탕수육',
          price: 14000,
        },
      ],
    },
  ];
  const categories = extractCategories(restaurants);

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

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
