import { useNavigate } from 'react-router-dom';

import Summary from './Summary';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';

import useCartStore from '../hooks/useCartStore';
import useCreateOrders from '../hooks/useCreateOrders';

export default function Cart() {
  const [{ menu }, store] = useCartStore();
  const { createOrder } = useCreateOrders();
  const navigation = useNavigate();

  const handelClickRemove = (index: number) => {
    store.removeItem(index);
  };

  const handleClickClear = () => {
    store.clear();
    navigation('/');
  };

  const handleClickOrder = async () => {
    store.clear();
    const orderId = await createOrder(menu);
    navigation(`/order/complete?orderId=${orderId}`);
  };

  return (
    <section>
      <Summary selectedMenu={menu} />
      <div>
        {menu.map((food, index) => {
          const key = `${food.id}_${index}`;
          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickItem={handelClickRemove}
            />
          );
        })}
      </div>
      <OperationButtons
        handleClickClear={handleClickClear}
        handleClickOrder={handleClickOrder}
      />
    </section>
  );
}
