import { useParams } from 'react-router-dom';
import Restaurants from '../components/Restaurants';
import useFetchRestaurant from '../hooks/useFetchRestaurant';

export default function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = useFetchRestaurant(id);

  return (
    <div>{restaurant && <Restaurants restaurant={restaurant} />}</div>
  );
}
