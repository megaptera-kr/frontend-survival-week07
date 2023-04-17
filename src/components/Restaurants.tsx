import { useLocation } from 'react-router-dom';
import Menu from './Menu';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function Restaurants() {
  const restaurants = useFetchRestaurants();
  const { state } = useLocation();
  const filterRestaurants = restaurants.filter(
    (item) => item.name === state.name,
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {filterRestaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                <Menu menu={restaurant.menu} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
