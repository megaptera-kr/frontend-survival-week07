import Menu from './Menu';
import useRestaurantStore from '../../hooks/useRestaurantStore';

export default function MenuContainer() {
  const [{ restaurants }, store] = useRestaurantStore();

  const filteredRestaurants = store.filterRestaurants(restaurants);

  return filteredRestaurants.length > 0 ? (
    <ul className="w-full h-[calc(100%-104px)] grid grid-cols-3 mx-auto mt-8 gap-4">
      { filteredRestaurants.map((restaurant) => (
        <Menu
          key={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
        />
      ))}
    </ul>
  ) : (
    <div className="w-1/2 flex justify-center items-center p-4 border-2 border-purple-300 mt-8 mx-auto font-bold text-2xl">
      메뉴가 준비중 입니다.
    </div>
  );
}
