import { useFetch } from 'usehooks-ts';
import { OrderType } from '../types/Order';

type FetchOrderType = {
    [order: string]: OrderType;
}

export default function useFetchOrder(orderId: string) {
  const url = `http://localhost:3000/orders/${orderId}`;
  const { data } = useFetch<FetchOrderType>(url);

  return data?.order;
}
