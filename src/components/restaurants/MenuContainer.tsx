import Menu from './Menu';
import useRestaurantStore from '../../hooks/useRestaurantStore';

export default function MenuContainer() {
  const [{ restaurants }, store] = useRestaurantStore();

  const filteredRestaurants = store.filterRestaurants(restaurants);

  return (
    <ul className="w-full h-[calc(100%-104px)] grid grid-cols-3 mx-auto mt-8 gap-4">
      {filteredRestaurants.map((restaurant) => (
        <Menu
          key={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
        />
      ))}
    </ul>
  );
}
