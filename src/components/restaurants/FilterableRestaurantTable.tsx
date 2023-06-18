import { Restaurant } from '../../types';
import RestaurantRow from './RestaurantRow';

interface FilterableRestaurantTableProps {
  restaurants: Restaurant[];
  loading: boolean;
  error: boolean;
}
export default function FilterableRestaurantTable({
  restaurants, loading, error,
}: FilterableRestaurantTableProps) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>메뉴 불러오기 실패</p>;
  }

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
