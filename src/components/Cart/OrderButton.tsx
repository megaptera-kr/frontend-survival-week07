import calculateTotalPrice from '../../utils/calculateTotalPrice';

import Food from '../../types/Food';

type OrderButtonProps = {
    foods: Food[],
    onClick: () => void;
}

export default function OrderButton({ foods, onClick }: OrderButtonProps) {
  const totalPrice = calculateTotalPrice(foods);

  return (
    <button
      type="button"
      onClick={onClick}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
