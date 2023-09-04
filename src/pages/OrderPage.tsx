import Basket from '../components/Basket';
import FilterableRestaurantsTable from '../components/FilterableRestaurantsTable';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function OrderPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <FilterableRestaurantsTable restaurants={restaurants} />
      <Basket />
    </div>
  );
}
