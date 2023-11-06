import { useNavigate } from 'react-router';
import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';
import CartButtons from './CartButtons';
import CartItem from './CartItem';
import Summary from './Summary';

export default function CartField() {
  const navigate = useNavigate();
  const [{ cart }, store] = useCartStore();
  const { createOrder } = useCreateOrder();

  const handleClickCartCancel = (index: number) => {
    store.cancelCart(index);
  };

  const handleClickAllCancel = () => {
    store.clear();
  };

  const handleClickOrderButton = async () => {
    if (!cart.length) {
      return;
    }

    const id = await createOrder(cart);
    navigate(`/order/complete?orderId=${id}`);
    store.clear();
  };

  return (
    <div>
      <Summary
        selectedMenu={cart}
      />
      <ul>
        {
          cart.map((cartItem, index) => {
            const key = `cart-${cartItem.name}-${index.toString()}`;

            return (
              <CartItem
                key={key}
                cart={cartItem}
                index={index}
                onClickCancel={handleClickCartCancel}
              />
            );
          })
        }
      </ul>
      <CartButtons
        onClickAllCancel={handleClickAllCancel}
        onClickOrder={handleClickOrderButton}
      />
    </div>
  );
}
