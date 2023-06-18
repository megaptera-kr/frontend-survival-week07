import { Food } from '../../types';

interface MenuRowProps {
    food: Food;
    addCart: (food: Food) => void
}

export default function MenuRow({
  food, addCart,
}: MenuRowProps) {
  return (
    <li>
      <button
        type="button"
        onClick={() => addCart(food)}
      >
        {food.name}
        {' '}
        {food.price.toLocaleString()}
        원
      </button>
    </li>
  );
}
