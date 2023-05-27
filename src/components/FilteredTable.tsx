import filterRestaurants from '../utils/filterRestaurants';
import RestaurantsRows from './RestaurantsRows';

export default function FilteredTable() {
  const restaurants = filterRestaurants();
  return (
    <div>
      <table>
        <tbody>
          {
            restaurants.map((restaurant) => (
              <RestaurantsRows key={restaurant.id} restaurant={restaurant} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
