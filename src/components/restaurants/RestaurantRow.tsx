import useCartStore from '../../hooks/useCartStore';
import { Food, Restaurant } from '../../types';

import MenuRow from './MenuRow';

interface RestaurantRowProps {
    restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant } : RestaurantRowProps) {
  const [, store] = useCartStore();

  const handleClickFood = (food: Food) => {
    store.addCart(food);
  };

  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        <ul style={{ paddingBlock: '.5rem' }}>
          {restaurant.menu.map((food) => (
            <MenuRow
              key={food.id}
              food={food}
              addCart={handleClickFood}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
