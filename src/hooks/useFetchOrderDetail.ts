import { useEffect, useState } from 'react';
import { Order } from '../types';

const useFetchOrderDetail = (id:string) => {
  const url = `http://localhost:3000/orders/${id}`;
  const [order, setOrder] = useState<Order>();

  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setOrder(data.order);
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  if (!order) return null;

  return order;
};

export default useFetchOrderDetail;
