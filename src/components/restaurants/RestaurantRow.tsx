import Menu from './Menu';

import Restaurants from '../../types/Restaurants';

type RestaurantTableRowProps = {
  restaurant: Restaurants;
};

export default function RestaurantRow({
  restaurant,
}: RestaurantTableRowProps) {
  const { id, name, menu } = restaurant;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
