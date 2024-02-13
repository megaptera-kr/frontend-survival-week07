import { useEffect, useState } from 'react';

import axios from 'axios';

import Receipt from '../types/Receipt';

const useFetchOrder = ({ orderId }:{orderId: string}) => {
  const [order, setOrder] = useState<Receipt>({}as Receipt);
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3000/orders/${orderId}`;
      const response = await axios(url);
      if (response) {
        setOrder(response.data.order);
      }
    };
    fetchData();
  }, []);
  return order;
};

export default useFetchOrder;
