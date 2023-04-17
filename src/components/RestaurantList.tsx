import { Link } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

import Restaurant from '../models/Restaurant';

export default function RestaurantList() {
  const restaurants: Restaurant[] = useFetchRestaurants();
  const nameList = restaurants.map((item) => item.name);

  return (
    <div>
      <h1>식당 목록</h1>
      {nameList.map((item): JSX.Element => (
        <li key={item}>
          <Link to="../restaurants" state={{ name: item }}>
            {item}
          </Link>
        </li>
      ))}
    </div>
  );
}
