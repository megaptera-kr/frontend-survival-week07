import { useNavigate } from 'react-router-dom';

import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';

import CartItem from './CartItem';
import OperationButtons from './OperationButtons';
import Summary from './Summary';

export default function Cart() {
  const navigate = useNavigate();

  const { createOrder } = useCreateOrder();
  const [{ menu }, store] = useCartStore();

  const handleClickRemove = (index:number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clearMenu();
    navigate('/');
  };

  const handleClickOrder = async () => {
    if (!menu.length) {
      return;
    }
    const orderId = await createOrder(menu);
    navigate(`/order/complete?orderId=${orderId}`);
  };

  return (
    <div>
      <Summary selectedMenu={menu} />
      <ul>
        {menu.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickCancel={handleClickRemove}
            />
          );
        })}
      </ul>
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </div>
  );
}
