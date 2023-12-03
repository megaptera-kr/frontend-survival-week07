import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOrders } from '../../services/getOrders';

export default function Complete() {
  const [orderResponse, setOrderResponse] = useState({});
  const [searchParams] = useSearchParams();
  const ordersId = searchParams.get('ordersId');
  useEffect(() => {
    if (ordersId) {
      getOrders(ordersId).then((res) => {
        setOrderResponse({ ...res.order });
      });
    }
  }, []);
  if (orderResponse.id) {
    return (
      <>
        <h1>주문목록</h1>
        주문번호 :
        {' '}
        {orderResponse.id}
        <ul className="cart-menu-list">
          {orderResponse.menu.map((item, itemIdx) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`cart_${itemIdx}`}>
              <span>
                메뉴명 :
                {' '}
                {item.name}
              </span>
              <span>
                가격 :
                {' '}
                {item.price}
              </span>
            </li>
          ))}
        </ul>
        <p>합계 : {orderResponse.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원 </p>
      </>
    );
  }
}
