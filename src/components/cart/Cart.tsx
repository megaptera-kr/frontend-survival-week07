import { useNavigate } from 'react-router';

import OrderSummary from './OrderSummary';
import OperationButtons from './OperationButtons';
import CartItem from './CartItem';

import useCartStore from '../../hooks/useCartStore';
import useOrderMenu from '../../hooks/useOrderMenu';

const key = (index: number, text: string) => `${index}-${text}`;

function Cart() {
  const [{ cart, count, totalPrice }, store] = useCartStore();
  const navigate = useNavigate();

  const handleClickRemove = (index: number) => {
    store.removeCart(index);
  };

  const handleClickOrder = async () => {
    if (cart.length) {
      const orderId = await useOrderMenu(cart, totalPrice);
      store.resetCart();

      navigate({
        pathname: '/order/complete',
        search: `?orderId=${orderId}`,
      });
    }
  };

  const handleClickCancel = () => {
    navigate('/');
    store.resetCart();
  };

  return (
    <div>
      <OrderSummary
        count={count}
        totalPrice={totalPrice}
      />
      <ul>
        {cart.map((food, index) => (
          <CartItem
            key={key(index, food.name)}
            food={food}
            index={index}
            removeCart={handleClickRemove}
          />
        ))}
      </ul>
      <OperationButtons
        onClickOrder={handleClickOrder}
        onClickCancel={handleClickCancel}
      />
    </div>
  );
}

export default Cart;
