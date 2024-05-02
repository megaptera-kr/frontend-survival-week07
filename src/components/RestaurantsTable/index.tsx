import { Restaurant } from '../../types/restaurant';
import RestaurantRow from '../RestaurantRow';

type RestaurantsTableProps = {
  restaurants:Restaurant[]
}

function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantsTable;
