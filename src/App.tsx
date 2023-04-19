import Restaurants from './components/Restaurants';
import Cart from './components/Cart';

import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <Restaurants restaurants={restaurants} />
      <Cart />
    </div>
  );
}
