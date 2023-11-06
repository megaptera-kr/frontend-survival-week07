import Restaurant from '../types/restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }:RestaurantsTableProps) {
  return (
    <div>
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
    </div>
  );
}
