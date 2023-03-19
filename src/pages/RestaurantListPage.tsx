import { NavLink } from 'react-router-dom';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h2>식당 목록</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <NavLink to={`/detail/${restaurant.id}`}>{restaurant.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
