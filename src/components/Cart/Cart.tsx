import { useNavigate } from 'react-router';

import Summary from './Summary';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';

import useCreateOrder from '../../hooks/useCreateOrder';
import useCartStore from '../../hooks/useCartStore';

// type CartProps = {
//   setReceipt: (value: Receipt) => void;
// }

export default function Cart() {
  const navigate = useNavigate();
  // const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);
  const [{ menu }, store] = useCartStore();

  const { createOrder } = useCreateOrder();

  const handleClickRemove = (index: number) => {
    // const foods = selectedFoods.filter((_, i) => i !== index);
    // setFoods(foods);
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clear();
    navigate('/');
  };

  const handleClickOrder = async () => {
    // if (!selectedFoods.length) { return; }
    if (!menu.length) { return; }

    // const receipt = await createOrder(selectedFoods);
    // const receipt = await createOrder(menu);
    // setReceipt(receipt);
    // setFoods([]);

    const { id } = await createOrder(menu);
    store.clear();
    navigate(`/order/complete?orderId=${id}`);

    store.clear();
  };

  return (
    <div>
      <Summary selectedMenu={menu} />
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <CartItem
            key={key}
            food={food}
            index={index}
            onClickCancle={handleClickRemove}
          />
        );
      })}
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
      {/* <OrderButton foods={menu} onClick={handleClickOrder} /> */}
    </div>
  );
}
