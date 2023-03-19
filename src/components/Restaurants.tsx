import Menu from './Menu';

import Restaurant from '../models/Restaurant';

type RestaurantProps = {
  restaurants: Restaurant;
};

export default function Restaurants({ restaurants }: RestaurantProps) {
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
          <tr key={restaurants.id}>
            <td>
              {restaurants.name}
            </td>
            <td>
              {restaurants.category}
            </td>
            <td>
              <Menu menu={restaurants.menu} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
