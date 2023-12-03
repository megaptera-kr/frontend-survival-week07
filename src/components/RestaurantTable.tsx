import { Restaurant } from '../types';
import MenuRow from './MenuRow';

type Props = {
  filteredRestaurants : Restaurant[]
}

function RestaurantTable({ filteredRestaurants } : Props) {
  return (
    <table>
      <tbody>
        {filteredRestaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>
              <ul>
                {restaurant.menu.map((food) => (
                  <MenuRow key={food.id} food={food} />
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
