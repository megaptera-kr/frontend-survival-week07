import { Restaurant } from '../types/restaurants';
import RestaurantsTableRow from './RestaurantsTableRow';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantsTableRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
