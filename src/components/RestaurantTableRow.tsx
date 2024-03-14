import Menu from './Menu';

import RestaurantModel from '../models/RestaurantModel';

type RestaurantTableRowProps = {
  restaurant: RestaurantModel;
};

export default function RestaurantTableRow({
  restaurant,
}: RestaurantTableRowProps) {
  const { name, menu } = {
    name: restaurant.getName(),
    menu: restaurant.getMenu(),
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <Menu menu={menu} restaurant={restaurant} />
      </td>
    </tr>
  );
}
