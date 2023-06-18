import { Food } from '../../types';

interface CartItemProps {
    food: Food;
    index: number;
    removeCart: (index: number) => void;
}

export default function CartItem({
  food, index, removeCart,
}: CartItemProps) {
  return (
    <li>
      <span>
        {food.name}
        {' '}
        {food.price.toLocaleString()}
        원
      </span>
      <button
        type="button"
        onClick={() => removeCart(index)}
      >
        X
      </button>
    </li>
  );
}
