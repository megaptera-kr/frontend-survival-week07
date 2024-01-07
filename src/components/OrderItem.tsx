import Food from '../types/Food';

type OrderItemProps = {
    food: Food
}

export default function OrderItem({ food }:OrderItemProps) {
  return (
    <li>
      {food.name}
      {' '}
      {food.price}
      원
    </li>
  );
}
