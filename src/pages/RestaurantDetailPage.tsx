import { useParams } from 'react-router-dom';
import useFetchRestaurant from '../hooks/useFetchRestaurant';
import RestaurantDetail from '../components/RestaurantDetail';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const restaurant = useFetchRestaurant(id);

  if (!restaurant) {
    return null;
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
