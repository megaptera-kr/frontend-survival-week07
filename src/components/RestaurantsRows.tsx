import Restaurant from '../types/Restaurant';
import Menu from './Menu';

type RestaurantsRowsProps = {
  restaurant : Restaurant
}

export default function RestaurantsRows({ restaurant }: RestaurantsRowsProps) {
  return (
    <tr>
      <td>
        {restaurant.name}
      </td>
      <td>
        {
          (restaurant.menu).map((menu, index) => {
            const key = `${menu.id}-${index}`;
            return (
              <Menu key={key} menu={menu} />
            );
          })
        }
      </td>
    </tr>
  );
}
