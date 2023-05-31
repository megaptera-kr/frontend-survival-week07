import { useParams } from 'react-router-dom';
import Restaurants from '../components/Restaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantDetailPage() {
  const params = useParams();
  const restaurants = useFetchRestaurants();
  const selectedRestaurant = restaurants.filter((item) => {
    if (params.id) {
      return item.id === Number(params.id);
    }
    return null;
  });

  return (
    <Restaurants restaurants={selectedRestaurant} />
  );
}
