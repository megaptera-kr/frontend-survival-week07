import Food from '../types/Food';

type CartItemProps = {
  index: number;
  food: Food;
  onClickCancel: (index: number) => void;
}

export default function CartItem({
  index, food, onClickCancel,
}: CartItemProps) {
  const { name, price } = food;

  return (
    <div>
      <span>{name}</span>
      <span>
        {price.toLocaleString()}
        원
      </span>
      <button
        type="button"
        onClick={() => onClickCancel(index)}
      >
        X
      </button>
    </div>
  );
}
