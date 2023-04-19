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
        <p>식당 정보가 없습니다. 🥲</p>
      )}
    </main>
  );
}

export default RestaurantDetailPage;
