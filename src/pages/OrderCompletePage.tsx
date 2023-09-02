import { useNavigate, useSearchParams } from 'react-router-dom';
import useCartStore from '../hooks/useCartStore';
import useOrder from '../hooks/useOrder';

export default function OrderCompletePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  if (!orderId) {
    return (
      <div />
    );
  }
  const order = useOrder(orderId);

  const [, store] = useCartStore();

  return (
    <div>
      <main>
        <div>
          <div>
            <h2>주문이 완료되었습니다!</h2>
            <p>
              주문번호
              {order?.id}
            </p>
          </div>
          <div>
            <h2>주문목록</h2>
            <ul>
              {
                order?.menu.map((menu) => (
                  <li key={menu.id}>
                    <span>{menu.name}</span>
                    <span>
                      {menu.price.toLocaleString()}
                      원
                    </span>
                  </li>
                ))
              }
            </ul>
            <div>
              <span>
                총가격
                {order?.totalPrice.toLocaleString()}
                원
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              store.resetCart();
              navigate('/');
            }}
          >
            메인화면으로 돌아가기
          </button>
        </div>
      </main>
    </div>
  );
}
