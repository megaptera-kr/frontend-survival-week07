import axios from 'axios';
import Food from '../types/Food';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Food[]) => {
    const totalPrice = menu.reduce((acc, food) => food.price + acc, 0);
    const response = await axios.post(url, { menu, totalPrice });
    const { id } = response.data;
    return id;
  };

  return {
    createOrder,
  };
}
