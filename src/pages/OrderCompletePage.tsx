import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useOrderStore from '../hooks/useOrderStore';

export default function OrderCompletePage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [{ order }, store] = useOrderStore();

  useEffect(() => {
    if (orderId) {
      store.fetchOrders(orderId);
    }
  }, [orderId]);
  return <div>{order?.id}</div>;
}
