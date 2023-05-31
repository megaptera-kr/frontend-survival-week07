import Restaurants from '../components/Restaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <main>
      <h1>식당 목록</h1>
      <Restaurants restaurants={restaurants} />
    </main>
  );
}

export default RestaurantListPage;
