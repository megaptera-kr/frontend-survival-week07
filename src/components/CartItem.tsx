import Food from '../types/Food';

type CartItemProps = {
    food: Food;
    onClickCancel: (index:number) => void;
    index: number;
}

export default function CartItem({ food, onClickCancel, index }:CartItemProps) {
  const { name, price } = food;
  return (
    <div>
      <span>{name}</span>
      <span>
        {price.toLocaleString()}
        원
      </span>
      <button type="button" onClick={() => onClickCancel(index)}>X</button>
    </div>
  );
}
