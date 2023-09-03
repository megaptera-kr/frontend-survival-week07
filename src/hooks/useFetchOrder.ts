import { useFetch } from 'usehooks-ts';
import { Order } from '../types/order';

const API_URL = process.env.API_BASE_URL || 'http://localhost:3000';
const url = `${API_URL}/orders`;

export default function useFetchOrder(id: string) {
  const { data } = useFetch<{ order: Order }>(`${url}/${id}`);

  return data?.order;
}
