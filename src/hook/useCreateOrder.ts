import BASE_URL from '../api';
import { Food } from '../types/food';
import getTotalPrice from '../utils/getTotalPrice';

function useCreateOrder() {
  const postOrders = async (menu:Food[]) => {
    const totalPrice = getTotalPrice(menu);

    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { id } = await response.json();

    return id;
  };

  return {
    postOrders,
  };
}

export default useCreateOrder;
