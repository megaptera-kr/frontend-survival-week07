import { Food } from '../types/restaurant';
import totalPrice from '../utils/totalPrice';

export default function useCreateReceipt(cart: Food[]) {
  const createOrder = async () => {
    const url = 'http://localhost:3000/orders';
    const data = {
      menu: cart,
      totalPrice: totalPrice(cart),
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const { id } = await response.json();
    return id;
  };
  return createOrder();
}
