import { useLocation } from 'react-router-dom';
import Restaurants from '../components/Restaurants';

import useFetchRestaurant from '../hooks/useFetchRestaurant';
import Restaurant from '../models/Restaurant';

export default function RestaurantDetailPage() {
  const location = useLocation();
  const { id } = location.state;
  const restaurant = useFetchRestaurant(id) as Restaurant;
  return (
    <div>
      <Restaurants restaurant={restaurant} />
    </div>
  );
}
