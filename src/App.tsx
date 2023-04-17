import Restaurants from './components/Restaurants';
import Cart from './components/Cart';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import NavBar from './components/NavBar';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <NavBar />
      <h1>어서오세요, 메가의 민족입니다</h1>
      <Restaurants restaurants={restaurants} />
      <Cart />
    </div>
  );
}
