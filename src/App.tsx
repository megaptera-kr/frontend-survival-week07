import Cart from './components/Cart/Cart';
import FilterableRestaurantTable from './components/Restaurant/FilterableRestaurantTable';

import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h2>점심 바구니</h2>
      <Cart />
      <FilterableRestaurantTable restaurants={restaurants} />
    </div>
  );
}
