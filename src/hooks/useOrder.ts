import { useFetch } from 'usehooks-ts';
import { OrderInfo } from '../types';

const useFetchOrder = (id: string) => {
  const url = `http://localhost:3000/orders/${id}`;

  const { data } = useFetch<OrderInfo>(url);

  return data?.order;
};

export default useFetchOrder;
