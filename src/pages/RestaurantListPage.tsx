import Restaurants from '../components/Restaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <>
      <h2>식당 목록</h2>
      <Restaurants restaurants={restaurants} />
    </>
  );
}
