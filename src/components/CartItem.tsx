import type { Menu } from '../types/restaurants';

type CartItemProps = {
  food: Menu;
  idx: number;
  onClickRemove: (index: number) => void;
}

export default function CartItem({ food, idx, onClickRemove }: CartItemProps) {
  return (
    <li style={{ marginBottom: '1rem' }}>
      <span>{`${food.name} ${food.price.toLocaleString()}원`}</span>
      <button type="button" onClick={() => onClickRemove(idx)}>X</button>
    </li>
  );
}
