import { useFetch } from 'usehooks-ts';

import { ordersURL } from '../apis';

import Order from '../types/Order';

type useFetchReceiptProps = {
  orderId: string;
};

type orderResult = {
  order: Order;
};

export default function useFetchOrder({ orderId }: useFetchReceiptProps) {
  const { data } = useFetch<orderResult>(`${ordersURL}/${orderId}`);

  if (!data) {
    return {} as Order;
  }

  return data.order;
}
