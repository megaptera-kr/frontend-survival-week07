import useFetchRestaurants from '../hooks/useFetchRestaurants';

import NavMenus from '../components/NavMenus';
import { parseRestaurantNavMenus } from '../utils/restaurants';

export default function RestaurantListPage() {
  const restaurants = useFetchRestaurants();
  const navMenus = parseRestaurantNavMenus(restaurants);

  return (
    <section>
      <h1>식당 목록</h1>
      <NavMenus menus={navMenus} relative="path" />
    </section>
  );
}
