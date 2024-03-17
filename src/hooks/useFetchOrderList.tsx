import { useFetch } from 'usehooks-ts';

import Order from '../types/Order';

import PUBLIC_API_URL from '../utils/api';

interface Orders {
  order: Order;
}

export default function useFetchOrderList(id?: string) {
  const url = `${PUBLIC_API_URL}/orders/${id}`;
  const { data } = useFetch<Orders>(url);

  if (!data) {
    return { menu: [], totalPrice: 0 };
  }

  return data.order;
}
