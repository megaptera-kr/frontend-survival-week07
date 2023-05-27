import { Restaurant } from '../types/restaurant';
import RestaurantsTableBody from './RestaurantsTableBody';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <tbody>
        <RestaurantsTableBody restaurants={restaurants} />
      </tbody>
    </table>
  );
}
