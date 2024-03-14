import Restaurant from '../Types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantsProps = {
  restaurants: Restaurant[];
};

export default function Restaurants({ restaurants }: RestaurantsProps) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantRow key={restaurant.name} restaurant={restaurant} />
      ))}
    </div>
  );
}
