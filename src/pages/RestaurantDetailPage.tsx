import { useParams } from 'react-router-dom';
import useFetchRestaurant from '../hooks/useFetchRestaurant';
import RestaurantDetail from '../components/RestaurantDetail';

function RestaurantDetailPage() {
  const { restaurantId } = useParams();
  const restaurant = useFetchRestaurant(restaurantId);
  return (
    <main>
      {restaurant ? (
        <RestaurantDetail restaurant={restaurant} />
      ) : (
        <p>No Restaurant info</p>
      )}
    </main>
  );
}

export default RestaurantDetailPage;
