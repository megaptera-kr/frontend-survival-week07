import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import useCartStore from '../hooks/useCartStore';
import useFetchOrder from '../hooks/useFetchOrder';
import Menu from '../types/Menu';

export default function CompleteOrderPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [, store] = useCartStore();

  const orderId = searchParams.get('orderId');

  const handleClick = () => {
    store.clear();
    navigate('/');
  };

  if (!orderId) {
    return <div />;
  }

  const order = useFetchOrder(orderId);

  if (!order) {
    return <div />;
  }

  return (
    <div>
      <div>
        <h2>주문이 완료되었습니다!</h2>
        <p>
          주문번호
          {' '}
          {order.id}
        </p>
      </div>
      <div>
        <h2>주문목록</h2>
        <ul>
          {
            order.menu?.map((orderMenu: Menu) => (
              <li key={orderMenu.id}>
                <span>
                  {orderMenu.name}
                  {orderMenu.price.toLocaleString()}
                  원
                </span>
              </li>
            ))
          }
        </ul>
        <div>
          <span>
            총가격
            {' '}
            {order.totalPrice?.toLocaleString()}
            원
          </span>
        </div>
      </div>
      <button type="button" onClick={handleClick}>메인화면으로 돌아가기</button>
    </div>
  );
}
