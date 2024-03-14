import useCartStore from '../hooks/useCartStore';

import CartItems from './CartItems';

function Cart() {
  const [{ cart }] = useCartStore();

  return (
    <section>
      <div
        style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}
      >
        <p style={{ marginRight: '1rem' }}>
          주문내역 <span>{cart.totalNumItems()}</span>개
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
        <button type='button'>취소</button>
        <button type='button'>주문하기</button>
      </div>
    </section>
  );
}

export default Cart;
