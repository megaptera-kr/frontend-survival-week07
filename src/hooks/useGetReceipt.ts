import { useFetch } from 'usehooks-ts';

import type Receipt from '../types/Receipt';

const url = 'http://localhost:3000/orders';

export default function useFetchReceipt(orderId = '') {
  const { data } = useFetch<{order?: Receipt}>(`${url}/${orderId}`);

  return data?.order || {} as Receipt;
}
