import Food from '../../types/Food';

type CartItemProps = {
  food: Food;
  index: number;
  handleClickRemove: (index: number) => void;
}

export default function CartItem(
  { food, index, handleClickRemove }: CartItemProps,
) {
  const { name, price } = food;

  return (
    <div>
      <div>
        <span>
          {name}
          {' '}
          {price.toLocaleString()}
          원
        </span>
        <button
          type="button"
          onClick={() => handleClickRemove(index)}
        >
          X
        </button>
      </div>
    </div>
  );
}
