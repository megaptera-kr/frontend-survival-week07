import { useEffect, useState } from 'react';

export default function useFetchOrder(orderId: string) {
  const [orderData, setOrderData] = useState({});

  const fetchOrder = async () => {
    const url = `http://localhost:3000/orders/${orderId}`;
    const res = await fetch(url);
    const { order } = await res.json();

    setOrderData(order);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return orderData;
}
