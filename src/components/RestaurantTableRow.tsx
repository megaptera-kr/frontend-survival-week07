import { Restaurant } from '../types/restaurants';
import Menu from './Menu';

type RestaurantTableRow = {
  restaurant: Restaurant
}

export default function RestaurantTableRow({ restaurant }: RestaurantTableRow) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        <Menu menu={restaurant.menu} />
      </td>
    </tr>
  );
}
