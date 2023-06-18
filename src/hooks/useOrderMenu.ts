import { Food } from '../types';

const useOrderMenu = async (menu: Food[], totalPrice: number) => {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      menu,
      totalPrice,
    }),
  });

  const { id } = await response.json();

  return id;
};

export default useOrderMenu;
