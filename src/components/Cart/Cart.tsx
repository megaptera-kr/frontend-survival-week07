import { useNavigate } from 'react-router';
import { useState } from 'react';
import { postOrders } from '../../services/postOrders';
import useCartStore from '../../hooks/useCartStore';

function Cart() {
  const [{ cart, totalPrice }, store] = useCartStore();
  const [orderText, setOrderText] = useState('');

  const navigate = useNavigate();
  const handleOrder = async () => {
    const postData = {
      menu: [...cart],
      totalPrice,
    };
    const response = await postOrders(postData);
    if (response.id) {
      setOrderText('주문이 완료되었습니다!');
      setTimeout(() => {
        // store.clearCart();
        navigate(`/complete?ordersId=${response.id}`);
      }, 200);
    }
  };

  return (
    <div className="cart">
      <h3>장바구니</h3>
      <ul className="cart-menu-list">
        {cart.map((menu, menuIdx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`cart_${menuIdx}`}>
            <span>
              메뉴명 :
              {' '}
              {menu.name}
            </span>
            <span>
              가격 :
              {' '}
              {menu.price}
            </span>
            <button type="button" data-testid={`cart_${menu.id}_${cart.length}`} onClick={() => store.deleteCartMenu(menuIdx)}>삭제</button>
          </li>
        ))}
      </ul>
      <p className="cart-footer">
        <span>
          주문내역
          {cart.length}
          개
        </span>
        <span className="price">
          총 결제 예상금액 :
          {' '}
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </p>
      {totalPrice > 0
      && (
        <ul className="cart-btn-list">
          <li>
            <button type="button" onClick={() => store.clearCart()}>취소</button>
          </li>
          <li>
            <button type="button" onClick={handleOrder}>주문하기</button>
          </li>
        </ul>
      )}
      {orderText}
    </div>
  );
}

export default Cart;
