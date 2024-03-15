import Food from '../types/Food';

type CartItemProps = {
  index: number;
  food: Food;
  onClickItem: (index: number) => void;
};

export default function CartItem({ index, food, onClickItem }: CartItemProps) {
  const { name, price } = food;
  return (
    <li>
      <span>{name}</span>
      <span>{`(${price.toLocaleString()}원)`}</span>
      <button type="button" onClick={() => onClickItem(index)}>
        X
      </button>
    </li>
  );
}
