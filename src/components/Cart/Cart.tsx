import { useLocalStorage } from 'usehooks-ts';

import CartItem from './CartItem';
import OrderButton from './OrderButton';

import Food from '../../types/Food';
import Receipt from '../../types/Receipt';

import useCreateOrder from '../../hooks/useCreateOrder';

type CartProps = {
  setReceipt: (value: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickCancle = (index: number) => {
    const foods = selectedFoods.filter((_, i) => i !== index);
    setFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) { return; }

    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setFoods([]);
  };

  return (
    <div>
      {selectedFoods.map((food, index) => {
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
      <OrderButton foods={selectedFoods} onClick={handleClickOrder} />
    </div>
  );
}
