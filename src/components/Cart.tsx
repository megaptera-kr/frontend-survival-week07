import { useNavigate } from 'react-router';

import useCartStore from '../hooks/useCartStore';
import useOrder from '../hooks/useOrder';

import CartItems from './CartItems';

function Cart() {
  const naviagte = useNavigate();
  const [{ cart }, cartStroe] = useCartStore();
  const { handleOrderCreate } = useOrder(cart);

  const handleClickBackButton = () => {
    naviagte('/');
    cartStroe.setOrderKind();
  };

  const handleClickCancel = () => {
    cartStroe.clearItems();
  };

  return (
    <section>
      <div
        style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}
      >
        <p style={{ marginRight: '1rem' }}>
          주문내역 <span>{cart.totalItemNum()}</span>개
        </p>
        <p>
          총 결제 예상금액 <span>{cart.totalPriceFormatted()}원</span>
        </p>
      </div>

      <div>
        <CartItems cartItems={cart.cartItems} />
      </div>

      <hr />

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <button type='button' onClick={handleClickBackButton}>
          뒤로가기
        </button>
        <button type='button' onClick={handleClickCancel}>
          전체취소
        </button>
        <button type='button' onClick={handleOrderCreate}>
          주문하기
        </button>
      </div>
    </section>
  );
}

export default Cart;
