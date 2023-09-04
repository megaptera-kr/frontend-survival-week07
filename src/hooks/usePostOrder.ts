import useBasketStore from './useBasketStore';

const API_URL = process.env.API_BASE_URL || 'http://localhost:3000';
const url = `${API_URL}/orders`;

export default function usePostOrder() {
  const [{ basket, totalPrice }] = useBasketStore();

  const postOrder = async () => {
    const body = {
      menu: basket,
      totalPrice,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return response.json();
  };

  return {
    postOrder,
  };
}
