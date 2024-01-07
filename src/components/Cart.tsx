import { useNavigate } from 'react-router';
import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';
import getTotalPrice from '../utils/getTotalPrice';
import CartItem from './CartItem';

export default function Cart() {
  const [{ cart }, store] = useCartStore();
  const navigate = useNavigate();

  const totalPrice = getTotalPrice(cart);

  const handleCancle = () => {
    store.clear();
    navigate('/');
  };

  const handleOrder = async () => {
    if (cart.length === 0) {
      return;
    }

    const { createOrder } = useCreateOrder();
    const order = { menu: cart, totalPrice };

    const id = await createOrder(order);

    store.clear();
    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <>
      <h2>
        주문내역
        {cart.length}
        개
      </h2>
      <div>
        총 결제 예상금액
        {totalPrice.toLocaleString()}
        원
      </div>
      <ul>
        {cart.map((menu, index) => {
          const key = `${menu.id}-${index}`;
          return <CartItem key={key} menu={menu} index={index} />;
        })}
      </ul>
      <div>
        <button type="button" onClick={handleCancle}>
          취소
        </button>
        <button type="button" onClick={handleOrder}>
          주문하기
        </button>
      </div>
      <br />
    </>
  );
}
