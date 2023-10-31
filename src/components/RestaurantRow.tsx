import Restaurant from '../types/restaurant';
import Menu from './Menu';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const { name, menu } = restaurant;

  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
