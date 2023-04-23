import Menu from './Menu';

import Restaurant from '../models/Restaurant';
import { Link, NavLink } from 'react-router-dom';

type RestaurantProps = {
  restaurants: Restaurant[];
};

export default function Restaurants({ restaurants }: RestaurantProps) {
  return (
    <ul>
      {

        restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={`/restaurantdetail/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))
      } </ul>
  );
}
