import { useNavigate } from 'react-router';

import useCartStore from '../hooks/useCartStore';

import CartPrice from './CartPrice';
import CartItem from './CartItem';
import CartOrderBtns from './CartOrderBtns';
import useCreateOrder from '../hooks/useCreateOrder';

export default function Cart() {
  const navigate = useNavigate();
  const { createOrder } = useCreateOrder();
  const [{ menu }, store] = useCartStore();

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancelBtn = () => {
    navigate('/');
  };

  const handleClickOrderBtn = async () => {
    if (!menu.length) return;
    const { id } = await createOrder(menu);
    navigate({ pathname: '/order/complete', search: `?orderId=${id}` });
  };

  return (
    <div>
      <CartPrice cartMenu={menu} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menu.map((food, idx) => {
          const key = `${food.id}-${idx}`;
          return (
            <CartItem
              key={key}
              food={food}
              idx={idx}
              onClickRemove={handleClickRemove}
            />
          );
        })}
      </ul>
      <CartOrderBtns
        onClickCancelBtn={handleClickCancelBtn}
        onClickOrderBtn={handleClickOrderBtn}
      />
    </div>
  );
}
