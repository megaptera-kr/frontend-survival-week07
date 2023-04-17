import { Link } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>식당 목록</h1>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={`/detail/${restaurant.id}`} state={restaurant.id}>
                {restaurant.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
