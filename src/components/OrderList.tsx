import useFetchOrder from '../hooks/useFetchOrder';
import OrderItem from './OrderItem';

type OrderListProps = {
    orderId: string
}

export default function OrderList({ orderId }:OrderListProps) {
  const { fetchOrder } = useFetchOrder();

  const order = fetchOrder(orderId);
  return (
    <>
      <h2>주문목록</h2>
      <ul>
        {order?.menu.map((food, index) => {
          const key = `${index}-${food.id}`;

          return <OrderItem key={key} food={food} />;
        })}
      </ul>
      <p>
        총가격
        {' '}
        {order?.totalPrice.toLocaleString()}
        원
      </p>
    </>
  );
}
