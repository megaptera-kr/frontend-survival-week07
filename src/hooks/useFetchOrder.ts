import { useFetch } from 'usehooks-ts';
import OrderInfo from '../types/OrderInfo';

export default function useFetchOrder(orderId: string) {
  const url = `http://localhost:3000/orders/${orderId}`;
  const { data } = useFetch<OrderInfo>(url);

  if (!data) {
    return [];
  }

  return data.order;
}
