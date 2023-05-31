import Restaurant from '../models/Restaurant';
import Menu from './Menu';

type Props = {
    restaurant: Restaurant
}

function RestaurantDetail({ restaurant }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            식당 이름
          </th>
          <th>
            종류
          </th>
          <th>
            메뉴
          </th>
        </tr>
      </thead>
      <tbody>
        <tr key={restaurant.id}>
          <td>
            {restaurant.name}
          </td>
          <td>
            {restaurant.category}
          </td>
          <td>
            <Menu menu={restaurant.menu} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RestaurantDetail;
