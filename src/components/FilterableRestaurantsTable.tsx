import { Restaurant } from '../types/restaurants';
import RestaurantsTable from './RestaurantsTable';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  return (
    <RestaurantsTable restaurants={restaurants} />
  );
}
