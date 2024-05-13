import OrderType from '../../types/order';
import convertKRW from '../../utils/convertKRW';

type OrdersProps = {
  order:OrderType
}

function Orders({ order }:OrdersProps) {
  return (
    <div>
      <p>
        {`주문번호 ${order.id}`}
      </p>
      <h3>주문목록</h3>
      <ul>
        {order.menu.map((food) => (
          <li
            key={food.id}
          >
            {`${food.name} ${convertKRW(food.price)}`}
          </li>
        ))}
      </ul>
      <p>{`총가격 ${convertKRW(order.totalPrice)}`}</p>
    </div>
  );
}

export default Orders;
