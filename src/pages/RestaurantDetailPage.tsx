import { useParams } from 'react-router-dom';
import useFetchRestaurant from '../hooks/useFetchRestaurant';
import Restaurants from '../components/Restaurants';

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const restaurant = useFetchRestaurant(id);
  const restaurants = restaurant ? [restaurant] : [];

  return <Restaurants restaurants={restaurants} />;
}
