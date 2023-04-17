import Menu from './Menu';

import Restaurant from '../models/Restaurant';

type RestaurantsProps = {
  restaurant: Restaurant;
}

export default function Restaurants({ restaurant }: RestaurantsProps) {
  return (
    <div>
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
          <tr>
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
    </div>
  );
}
