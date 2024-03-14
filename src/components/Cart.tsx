import useCartStore from '../hooks/useCartStore';
import CartItem from './CartItem';

import CartItemModel from '../models/CartItemModel';

function Cart() {
  const [{ cart }, cartStore] = useCartStore();

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
        {!cart.cartItems.length ? (
          <div
            style={{
              display: 'flex',
              marginBottom: '1rem',
              justifyContent: 'center',
            }}
          >
            <i>선택한 메뉴가 없습니다.</i>
          </div>
        ) : (
          cart.cartItems.map((item: CartItemModel) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>
      <div>
        <button type='button'>취소</button>
        <button type='button'>주문하기</button>
      </div>
    </section>
  );
}

export default Cart;
