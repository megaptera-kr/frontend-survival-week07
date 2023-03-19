import { NavLink } from 'react-router-dom';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h2>
        식당 목록
      </h2>
      <ul>
        {restaurants.map((item) => {
          const path = `/restaurants/${item.id}`;
          return (
            <li key={item.id}>
              <NavLink to={path}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
