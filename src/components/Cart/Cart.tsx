import { useLocalStorage } from 'usehooks-ts';

import CartItem from './CartItem';
import OrderButton from './OrderButton';

import Receipt from '../../types/Receipt';

import useCreateOrder from '../../hooks/useCreateOrder';
import useCartStore from '../../hooks/useCartStore';

type CartProps = {
  setReceipt: (value: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  // const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);
  const [{ menu }, store] = useCartStore();

  const { createOrder } = useCreateOrder();

  const handleClickCancle = (index: number) => {
    // const foods = selectedFoods.filter((_, i) => i !== index);
    // setFoods(foods);
    store.removeMenu(index);
  };

  const handleClickOrder = async () => {
    // if (!selectedFoods.length) { return; }
    if (!menu.length) { return; }

    // const receipt = await createOrder(selectedFoods);
    const receipt = await createOrder(menu);
    setReceipt(receipt);

    // setFoods([]);
    store.clear();
  };

  return (
    <div>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <CartItem
            key={key}
            food={food}
            index={index}
            onClickCancle={handleClickCancle}
          />
        );
      })}
      <OrderButton foods={menu} onClick={handleClickOrder} />
    </div>
  );
}
