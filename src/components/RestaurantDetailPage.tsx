import { useLocation } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import Menu from './Menu';

type LocationState = {
  id: number;
};

export default function RestaurantDetailPage() {
  const { state } = useLocation();
  const id = (state as LocationState)?.id;

  const restaurants = useFetchRestaurants(id);

  return (
    <>
      <hr />
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
            {restaurants.map((restaurant) => (
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
    </>
  );
}
