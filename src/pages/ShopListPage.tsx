import { Link } from 'react-router-dom';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function ShopListPage() {
  const restaurants = useFetchRestaurants();

  return (
    <>
      <h3>식당 목록이야 연진아 골라봐 !@ ^^*</h3>
      <div>식당 목록</div>
      <nav>
        <ul>
          {restaurants.map((restaurant) => {
            const { id, name } = restaurant;

            return (
              <li key={id}>
                <Link to={`/restaurant/${id}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>

  );
}
