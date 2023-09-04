import { Restaurant } from '../types/restaurants';
import RestaurantsMenu from './RestaurantsMenu';

type RestaurantsTableRow = {
  restaurant: Restaurant;
}

export default function RestaurantsTableRow({ restaurant }: RestaurantsTableRow) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        <RestaurantsMenu menu={restaurant.menu} />
      </td>
    </tr>
  );
}
