import { useLocation } from 'react-router-dom';
import Restaurants from '../components/Restaurants';
import useFetchRestaurant from '../hooks/useFetchRestaurant';
import Restaurant from '../models/Restaurant';

function RestaurantDetailPage() {
  const location = useLocation();
  const restaurant = useFetchRestaurant(location.state?.id ?? 1) as Restaurant;

  return (
    <div>
      <Restaurants restaurants={[restaurant]} />
    </div>
  );
}

export default RestaurantDetailPage;
