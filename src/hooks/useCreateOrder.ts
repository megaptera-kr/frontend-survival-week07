import totalPrice from '../utils/totalPrice';

import type Food from '../types/Food';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Food[]) => {
    const caluTotalPrice = totalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, caluTotalPrice }),
    });

    const data = await response.json() as { id: string };

    return data;
  };

  return {
    createOrder,
  };
}
