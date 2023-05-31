import { NavLink } from 'react-router-dom';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h2>식당목록</h2>
      <ul>
        {restaurants.map((item) => {
          // item마다 id가 다르기 때문에 path 설정
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
