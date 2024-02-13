import { useNavigate } from 'react-router';

import useStore from '../../hooks/useStore';
import useCreateOrder from '../../hooks/useCreateOrder';

import CartItem from './CartItem';
import OrderBtn from './OrderBtn';
import OrderSummary from './OrderSummary';

export default function Cart() {
  const navigate = useNavigate();

  const store = useStore();

  const { createOrder } = useCreateOrder();

  const handleRemoveMenu = (targetIdx: number) => {
    store.removeMenu(targetIdx);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const clearMenu = () => {
    store.clear();
    navigateToHome();
  };

  const orderMenu = async () => {
    if (!store.menu.length) {
      return;
    }

    const id = await createOrder(store.menu);
    store.clear();
    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <div>
      <OrderSummary selectedMenu={store.menu} />
      {store.menu.map((food, index) => {
        const key = `${food}-${index}`;
        return (
          <CartItem
            key={key}
            food={food}
            handleRemoveMenu={handleRemoveMenu}
            index={index}
          />
        );
      })}
      <OrderBtn clearMenu={clearMenu} orderMenu={orderMenu} />
    </div>
  );
}
