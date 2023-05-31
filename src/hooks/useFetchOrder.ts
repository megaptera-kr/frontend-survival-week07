import { useFetch } from 'usehooks-ts';

import Order from '../types/Order';

const BASE_URL = 'http://localhost:3000';

type useFetchOrderProps = {
    orderId: string;
}

type orderResult = {
    order: Order;
}

export default function useFetchOrder({ orderId }: useFetchOrderProps) {
  const { data } = useFetch<orderResult>(`${BASE_URL}/orders/${orderId}`);

  if (!data) {
    return {} as Order;
  }

  return data.order;
}
