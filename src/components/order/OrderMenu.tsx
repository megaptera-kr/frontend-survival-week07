import Receipt from '../../types/Receipt';

type OrderMenuProps = {
    order: Receipt
}
export default function OrderMenu({ order }:OrderMenuProps) {
  return (
    <div>
      <p>
        주문번호
        {order.id}
      </p>
      <h2>주문목록</h2>
      <ul>
        {order.menu?.length
        && order.menu.map((food) => (
          <li key={food.id}>
            {food.name}
            {' '}
            {food.price.toLocaleString()}
            원
          </li>
        ))}
      </ul>
    </div>
  );
}
