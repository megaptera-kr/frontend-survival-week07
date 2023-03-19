import { useParams } from 'react-router-dom';

import Restaurants from '../components/Restaurants';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantDetailPage() {
  const restaurants = useFetchRestaurants();
  const { id } = useParams();

  const selectedRestaurant = restaurants.filter((restaurant) => restaurant.id.toString() === id);

  return (
    <Restaurants restaurants={selectedRestaurant} />
  );
}
