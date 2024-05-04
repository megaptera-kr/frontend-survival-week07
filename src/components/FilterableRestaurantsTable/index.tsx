import { useState } from 'react';
import useFetchRestaurants from '../../hook/useFetchRestaurants';
import { Category } from '../../types/category';
import filterRestaurantsByQuery from '../../utils/filterRestaurantsByQuery';
import getUniqueCategory from '../../utils/getUniqueCategory';
import RestaurantsTable from '../RestaurantsTable';
import SearchBar from '../SearchBar';

function FilterableRestaurantsTable() {
  const [filterText, setFilterText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const { restaurants, error } = useFetchRestaurants();
  const categories = getUniqueCategory(restaurants);

  const filteredRestaurants = filterRestaurantsByQuery(
    restaurants,
    { text: filterText.trim(), category: selectedCategory },
  );
  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {error && <p>{error}</p>}
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantsTable;
