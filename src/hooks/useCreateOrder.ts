import Food from '../types/Food';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Food[]) => {
    const totalPrice = calculateTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { id } = await response.json();

    return id;
  };

  return {
    createOrder,
  };
}
