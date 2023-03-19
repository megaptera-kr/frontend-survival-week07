import { Link } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Restaurant from '../models/Restaurant';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();
  return (
    <div>
      <h1>식당 목록</h1>
      <ul>
        {restaurants.map((restaurant: Restaurant) => (
          <li key={restaurant.id}>
            <Link to="/restaurantDetail" state={{ id: restaurant.id }}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
