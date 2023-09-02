import { Menu } from '../types/restaurants';

type MenuItemProps = {
  food: Menu
  onClickFoodBtn: (food: Menu) => void;
}

export default function MenuItem({ food, onClickFoodBtn }: MenuItemProps) {
  return (
    <li style={{ marginBottom: '1rem' }}>
      <button
        type="button"
        onClick={() => onClickFoodBtn(food)}
      >
        {`${food.name}: ${food.price.toLocaleString()}원`}
      </button>
    </li>
  );
}
