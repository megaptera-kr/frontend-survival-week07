import Menu from '../types/Menu';
import getTotalPrice from '../utils/getTotalPrice';

export default function useCreateOrder() {
  const createOrder = async (cart: Menu[]) => {
    const url = 'http://localhost:3000/orders';
    const totalPrice = getTotalPrice(cart);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu: cart,
        totalPrice,
      }),
    });

    const { id } = await response.json();
    return id;
  };

  return {
    createOrder,
  };
}
