import { useLocation } from 'react-router-dom';
import Restaurant from '../models/Restaurant';

import Restaurants from '../components/Restaurants';
import useFetchRestaurant from '../hooks/useFetchRestaurant';

export default function RestaurantDetailPage() {
  const location = useLocation();

  const restaurants: Restaurant = useFetchRestaurant(location.state);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
