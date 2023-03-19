import { useParams } from 'react-router-dom';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import Restaurants from '../components/Restaurants';

export default function RestaurantDetailPage() {
  const restauratns = useFetchRestaurants();
  const { id } = useParams();

  const selectedRestaurant = restauratns.filter((restaurant) => restaurant.id.toString() === id);

  return (
    <Restaurants restaurants={selectedRestaurant} />
  );
}
