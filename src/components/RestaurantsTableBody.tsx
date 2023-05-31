import { Restaurant } from '../types/restaurant';
import RestaurantsTableBodyFood from './RestaurantsTableBodyFood';

type RestaurantsTableBody = {
  restaurants: Restaurant[];
}

export default function RestaurantsTableBody({ restaurants }: RestaurantsTableBody) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>
            <RestaurantsTableBodyFood menu={restaurant.menu} />
          </td>
        </tr>
      ))}
    </>
  );
}
