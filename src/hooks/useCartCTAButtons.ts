import { useNavigate } from 'react-router';

import { ordersURL } from '../apis';

import useCartStore from './useCartStore';

import calculateTotalPrice from '../utils/calculateTotalPrice';

import Food from '../types/Food';

import PATHNAME from '../constants/pathname';

import useSearchStore from './useSearchStore';

export default function useCartCTAButtons() {
  const [{ menu }, store] = useCartStore();

  const [, searchStore] = useSearchStore();

  const navigate = useNavigate();

  const createOrder = async (m: Food[]) => {
    const totalPrice = calculateTotalPrice(m);

    const response = await fetch(ordersURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu: m, totalPrice }),
    });

    const { id } = await response.json();

    return id;
  };

  const handleClickOrder = async () => {
    if (!menu.length) {
      return;
    }

    const id = await createOrder(menu);

    store.clear();

    searchStore.clear();

    navigate(`${PATHNAME.OrderComplete}?orderId=${id}`);
  };

  const handleClickCancel = () => {
    store.clear();

    searchStore.clear();

    navigate(PATHNAME.Home);
  };

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  return {
    handleClickOrder,
    handleClickCancel,
    handleClickRemove,
  };
}
