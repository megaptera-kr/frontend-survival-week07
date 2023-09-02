import { useFetch } from 'usehooks-ts';
import { Order } from '../types/restaurants';

export default function useFetchOrder(id: string): Order {
  const url = `http://localhost:3000/orders/${id}`;
  const { data } = useFetch<Order>(url);

  if (!data) return {} as Order;

  return data;
}
