import Order from '../types/Order';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (order: Order) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...order }),
    });

    const { id } = await response.json();

    return id;
  };

  return { createOrder };
}
