import { useFetch } from 'usehooks-ts';
import Order from '../types/Order';

const BASE_URL = 'http://localhost:3000';

type orderFetchResult = {
    order: Order
  }

export default function useFetchOrder() {
  const fetchOrder = (orderId: string) => {
    const { data } = useFetch<orderFetchResult>(`${BASE_URL}/orders/${orderId}`);
    const order = data?.order;

    return order;
  };

  return { fetchOrder };
}
