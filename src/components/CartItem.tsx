import Food from '../Types/Food';

type CartItemProps = {
    food: Food,
    index: number,
    onClickCancle: (index: number) => void
}

export default function CartItem({
  food, index, onClickCancle,
}: CartItemProps) {
  const { name, price } = food;
  return (
    <li>
      <span>
        {name}
        {' '}
        {price.toLocaleString()}
        원
      </span>
      <button
        type="button"
        onClick={() => onClickCancle(index)}
      >
        X
      </button>
    </li>
  );
}
