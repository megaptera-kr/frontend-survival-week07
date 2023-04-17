import { useParams } from 'react-router-dom';

import Menu from '../components/Menu';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const restaurant = useFetchRestaurant(id);

  if (!restaurant) {
    return <div>존재하지 않는 식당입니다.</div>;
  }

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
          <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <Menu menu={restaurant.menu} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
