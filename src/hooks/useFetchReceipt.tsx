/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';

import Receipt from '../types/Receipt';

const emptyOrder = {} as Receipt;

export default function useFetchReceipt(id: string | null) {
  const [order, setOrder] = useState(emptyOrder);
  useEffect(() => {
    const fetchReceipt = async () => {
      const response = await fetch(`http://localhost:3000/orders/${id}`);
      const data = await response.json();
      if (!data) {
        return {};
      }

      setOrder(data.order);
    };

    fetchReceipt();
  }, [id]);

  return order;
}
