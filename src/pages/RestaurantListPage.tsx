import { Link } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h2>식당목록</h2>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={restaurant.id.toString()} state={restaurant}>
                {restaurant.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default RestaurantListPage;
