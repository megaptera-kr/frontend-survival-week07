import { useState } from 'react';

const BASE_URL = 'http://localhost:3000';

export default function useFetchOrder(orderId: number) {
  const [orderData, setOrderData] = useState({});

  const fetchOrder = async () => {
    const res = await fetch(`${BASE_URL}/orders/${orderId}`);
    const { order } = await res.json();
    setOrderData(order);
    // console.log(order);
  };

  fetchOrder();

  return orderData;
}
