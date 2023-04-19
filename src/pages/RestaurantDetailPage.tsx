import { useParams } from 'react-router-dom';

import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Restaurants from '../components/Restaurants';
import { filterRestaurants } from '../utils/restaurants';

export default function RestaurantsDetailPage() {
  const { id } = useParams();
  const restaurants = useFetchRestaurants();

  const filteredRestaurants = filterRestaurants(restaurants, +(id as string));
  return (
    <section>
      <h1>식당 상세</h1>
      <Restaurants restaurants={filteredRestaurants} />
    </section>
  );
}
