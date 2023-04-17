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
        {restaurants.map(({ id, name }) => {
          const path = `/restaurants/${id}`;
          return (
            <li key={id}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
