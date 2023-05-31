import storeGetSelectedFood from '../utils/storeGetSelectedFood';
import CartFood from './CartFood';

export default function CartItem() {
  const selectedFood = storeGetSelectedFood();
  return (
    <div>
      {selectedFood.map((food, index) => {
        const key = `${food.id}-${index}`;
        return (
          <CartFood food={food} index={index} key={key} />
        );
      })}
    </div>
  );
}
