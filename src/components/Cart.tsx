import useCartStore from '../hooks/useCartStore';
import totalPrice from '../utils/totalPrice';
import CartList from './CartList';

export default function Cart() {
  const [, cartStore] = useCartStore();
  return (
    <div>
      <p>{`주문내역 ${cartStore.cart.length}개`}</p>
      <p>{`총 결제 예상금액 ${totalPrice(cartStore.cart).toLocaleString('ko-kr')}원`}</p>
      <CartList />
    </div>
  );
}
