import useFetchRestaurants from '../../hook/useFetchRestaurants';
import getUniqueCategory from '../../utils/getUniqueCategory';
import RestaurantsTable from '../RestaurantsTable';
import SearchBar from '../SearchBar';

function FilterableRestaurantsTable() {
  const restaurants = useFetchRestaurants();
  const categories = getUniqueCategory(restaurants);
  return (
    <div>
      <SearchBar categories={categories} />
      <RestaurantsTable restaurants={restaurants} />
    </div>
  );
}

export default FilterableRestaurantsTable;
