import useCartStore from '../../hook/useCartStore';
import { Restaurant } from '../../types/restaurant';
import convertKRW from '../../utils/convertKRW';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const [, cartStore] = useCartStore();
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <li key={food.id}>
              <button type="button" onClick={() => cartStore.addCart(food)}>
                {`${food.name} ${convertKRW(food.price)}`}
              </button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
