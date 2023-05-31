import useStore from '../hooks/useStore';
import calcTotalPrice from '../utils/calcTotalPrice';
import CartItem from './CartItem';

export default function Cart() {
  const store = useStore();
  const totalPrice = calcTotalPrice();
  return (
    <div>
      <div>
        <span>
          {'주문내역 '}
          {store.state.selectedFood.length}
          개
        </span>
      </div>
      {
        store.state.selectedFood.length > 0 ? <CartItem /> : null
      }
      <div>
        <span>
          총 결제 예상금액
          {' '}
          {totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </div>
    </div>
  );
}
