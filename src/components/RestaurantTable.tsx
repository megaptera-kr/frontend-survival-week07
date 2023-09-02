import { Restaurant } from '../types/restaurants';
import RestaurantTableRow from './RestaurantTableRow';

type RestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantTableRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
