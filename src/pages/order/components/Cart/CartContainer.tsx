import CartMenus from './CartMenus';
import CartOperations from './CartOperations';

import useCartStore from '../../../../hooks/useCartStore';

export default function CartContainer() {
  const [{ cart }] = useCartStore();
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <div style={{ marginTop: '30px' }}>
      <h3>
        주문내역
        {cart.length}
        개
      </h3>
      <h3>
        총 결제 예상금액:
        {totalPrice.toLocaleString()}
        원
      </h3>
      <CartMenus menus={cart} />
      <CartOperations />
    </div>
  );
}
