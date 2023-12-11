import { Menu } from '../types';

const url = 'http://localhost:3000/orders';

const useCreateOrder = () => {
  const createOrder = async (cart:Menu[], totalPrice : number) => {
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
    const data = await response.json();

    return data.id;
  };

  return createOrder;
};

export default useCreateOrder;
