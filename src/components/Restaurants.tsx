import Restaurant from '../Types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantsProps = {
  restaurants: Restaurant[];
};

export default function Restaurants({ restaurants }: RestaurantsProps) {
  if (!restaurants.length) {
    return <div>식당이 존재하지 않습니다.</div>;
  }
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantRow key={restaurant.name} restaurant={restaurant} />
      ))}
    </div>
  );
}
