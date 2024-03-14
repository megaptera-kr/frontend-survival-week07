import Menu from './Menu';

import Restaurant from '../Types/Restaurant';

type RestaurantRowProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, menu } = restaurant;
  return (
    <div>
      <p>{name}</p>
      <Menu menus={menu} />
    </div>
  );
}
