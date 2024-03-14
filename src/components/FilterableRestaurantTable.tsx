import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Restaurants from './Restaurants';

export default function FilterResTaurantTable() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
