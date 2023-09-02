import type { Menu } from '../types/restaurants';
import calcTotalPrice from '../utils/calcTotalPrice';

const url = 'http://localhost:3000/orders';

function useCreateOrder() {
  const createOrder = async (menu: Menu[]) => {
    const totalPrice = calcTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const data = await response.json() as { id: string };
    return data;
  };

  return { createOrder };
}

export default useCreateOrder;
