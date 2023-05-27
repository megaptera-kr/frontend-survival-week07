import Cart from './components/Cart/Cart';
import FilterableRestaurantTable from './components/Restaurant/FilterableRestaurantTable';

import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <Cart />
      <FilterableRestaurantTable restaurants={restaurants} />
    </div>
  );
}
